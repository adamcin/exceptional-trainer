import matter from 'gray-matter';
import type { ModuleMetadata, ParsedContent, ContentFrontmatter } from '../content/schema';

/**
 * Discover all module.json files at build time using Vite's import.meta.glob
 */
const moduleManifests = import.meta.glob<{ default: ModuleMetadata }>(
  '/src/content/modules/*/module.json',
  { eager: false }
);

/**
 * Discover all markdown files at build time
 */
const markdownFiles = import.meta.glob<string>(
  '/src/content/modules/**/*.md',
  {
    eager: false,
    query: '?raw',
    import: 'default'
  }
);

/**
 * In-memory cache for loaded modules
 */
const moduleCache = new Map<string, ModuleMetadata>();

/**
 * In-memory cache for parsed content
 */
const contentCache = new Map<string, ParsedContent>();

/**
 * Load all available modules sorted by order
 */
export async function loadAllModules(): Promise<ModuleMetadata[]> {
  const modules: ModuleMetadata[] = [];

  for (const path in moduleManifests) {
    const loader = moduleManifests[path];
    if (loader) {
      const moduleImport = await loader();
      modules.push(moduleImport.default);
    }
  }

  // Sort by order
  modules.sort((a, b) => a.order - b.order);

  // Cache all modules
  modules.forEach(m => moduleCache.set(m.id, m));

  return modules;
}

/**
 * Load a specific module by ID
 */
export async function loadModule(moduleId: string): Promise<ModuleMetadata> {
  // Check cache first
  if (moduleCache.has(moduleId)) {
    return moduleCache.get(moduleId)!;
  }

  const path = `/src/content/modules/${moduleId}/module.json`;
  const loader = moduleManifests[path];

  if (!loader) {
    throw new Error(`Module not found: ${moduleId}`);
  }

  const moduleImport = await loader();
  const moduleData = moduleImport.default;
  moduleCache.set(moduleId, moduleData);
  return moduleData;
}

/**
 * Load and parse markdown content
 */
export async function loadContent(
  moduleId: string,
  relativePath: string
): Promise<ParsedContent> {
  const fullPath = `/src/content/modules/${moduleId}/${relativePath}`;

  // Check cache first
  if (contentCache.has(fullPath)) {
    return contentCache.get(fullPath)!;
  }

  const loader = markdownFiles[fullPath];

  if (!loader) {
    throw new Error(`Content not found: ${fullPath}`);
  }

  const raw = await loader();
  const parsed = parseMarkdown(raw);
  contentCache.set(fullPath, parsed);
  return parsed;
}

/**
 * Parse markdown with YAML frontmatter
 */
export function parseMarkdown(raw: string): ParsedContent {
  try {
    const { data, content } = matter(raw);

    // Validate frontmatter has required fields
    if (!data.id || !data.type || !data.title) {
      throw new Error('Invalid frontmatter: missing required fields (id, type, title)');
    }

    return {
      frontmatter: data as ContentFrontmatter,
      content,
      raw,
    };
  } catch (error) {
    console.error('Markdown parsing failed:', error);

    // Return safe fallback
    return {
      frontmatter: {
        id: 'unknown',
        type: 'exercise',
        title: 'Content Error',
        duration: 0,
        skills: [],
        difficulty: 'beginner',
      },
      content: '**Error**: This content could not be loaded properly.',
      raw,
    };
  }
}

/**
 * Preload a module for faster navigation
 */
export function preloadModule(moduleId: string): void {
  loadModule(moduleId).catch(err => {
    console.warn('Preload failed for module:', moduleId, err);
  });
}

/**
 * Preload content for faster navigation
 */
export function preloadContent(moduleId: string, relativePath: string): void {
  loadContent(moduleId, relativePath).catch(err => {
    console.warn('Preload failed for content:', relativePath, err);
  });
}

/**
 * Get list of all available module IDs
 */
export function getAvailableModuleIds(): string[] {
  return Object.keys(moduleManifests).map(path => {
    const match = path.match(/\/([^/]+)\/module\.json$/);
    return match?.[1];
  }).filter((id): id is string => Boolean(id));
}

/**
 * Clear all caches (useful for development/testing)
 */
export function clearCaches(): void {
  moduleCache.clear();
  contentCache.clear();
}
