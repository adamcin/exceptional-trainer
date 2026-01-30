/**
 * Type definitions for curriculum content structure
 */

export type ContentType = 'overview' | 'exercise' | 'challenge' | 'assessment';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';
export type ProgressStatus = 'locked' | 'in-progress' | 'completed';

/**
 * Metadata for individual content items (exercises, challenges)
 */
export interface ContentItem {
  id: string;
  title: string;
  file: string;
  estimatedMinutes: number;
}

/**
 * Assessment metadata within a module
 */
export interface AssessmentMetadata {
  file: string;
  passingCriteria: number; // 0.0 to 1.0
  criteriaCount: number;
}

/**
 * Complete module metadata structure
 */
export interface ModuleMetadata {
  id: string;
  version: number;
  title: string;
  description: string;
  order: number;
  estimatedMinutes: number;
  prerequisites: string[];
  learningObjectives: string[];
  exercises: ContentItem[];
  challenges: ContentItem[];
  assessment: AssessmentMetadata;
}

/**
 * YAML frontmatter structure for markdown content files
 */
export interface ContentFrontmatter {
  id: string;
  type: ContentType;
  title: string;
  duration: number;
  skills: string[];
  difficulty: DifficultyLevel;
}

/**
 * Parsed markdown content with frontmatter and body
 */
export interface ParsedContent {
  frontmatter: ContentFrontmatter;
  content: string;
  raw: string;
}
