/**
 * Type definitions for progress tracking and state management
 */

/**
 * Status for individual content progress
 */
export type ContentStatus = 'not-started' | 'in-progress' | 'completed';

/**
 * Status for module progress
 */
export type ModuleStatus = 'locked' | 'in-progress' | 'completed';

/**
 * Status for assessment progress
 */
export type AssessmentStatus = 'not-started' | 'in-progress' | 'completed' | 'failed';

/**
 * Progress tracking for individual content items (exercises, challenges)
 */
export interface ContentProgress {
  contentId: string;
  status: ContentStatus;
  startedAt: string | null;
  completedAt: string | null;
  timeSpentMinutes: number;
}

/**
 * Single assessment attempt
 */
export interface AssessmentAttempt {
  attemptNumber: number;
  attemptedAt: string;
  score: number;
  criteriaResults: Record<string, boolean>; // criteriaId -> pass/fail
  passed: boolean;
}

/**
 * Assessment progress tracking
 */
export interface AssessmentProgress {
  status: AssessmentStatus;
  attempts: AssessmentAttempt[];
  bestScore: number;
  lastAttemptAt: string | null;
}

/**
 * Progress tracking for a complete module
 */
export interface ModuleProgress {
  moduleId: string;
  status: ModuleStatus;
  startedAt: string | null;
  completedAt: string | null;
  exercises: Record<string, ContentProgress>;
  challenges: Record<string, ContentProgress>;
  assessment: AssessmentProgress | null;
}

/**
 * Root progress state structure
 */
export interface ProgressState {
  version: number;
  lastUpdated: string;
  currentModule: string | null;
  currentContent: string | null;
  modules: Record<string, ModuleProgress>;
}

/**
 * Result from importing progress data
 */
export interface ImportResult {
  success: boolean;
  error?: string;
  migratedFrom?: number;
}

/**
 * Exported progress data structure
 */
export interface ExportedProgress {
  exportedAt: string;
  exportVersion: number;
  appVersion: string;
  data: ProgressState;
}

/**
 * Create initial progress state
 */
export function createInitialProgress(): ProgressState {
  return {
    version: 1,
    lastUpdated: new Date().toISOString(),
    currentModule: null,
    currentContent: null,
    modules: {},
  };
}

/**
 * Initialize progress for a new module
 */
export function initializeModuleProgress(moduleId: string): ModuleProgress {
  return {
    moduleId,
    status: 'locked',
    startedAt: null,
    completedAt: null,
    exercises: {},
    challenges: {},
    assessment: null,
  };
}

/**
 * Initialize progress for content item
 */
export function initializeContentProgress(contentId: string): ContentProgress {
  return {
    contentId,
    status: 'not-started',
    startedAt: null,
    completedAt: null,
    timeSpentMinutes: 0,
  };
}

/**
 * Initialize assessment progress
 */
export function initializeAssessmentProgress(): AssessmentProgress {
  return {
    status: 'not-started',
    attempts: [],
    bestScore: 0,
    lastAttemptAt: null,
  };
}
