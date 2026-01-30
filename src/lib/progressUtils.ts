/**
 * Utility functions for progress data validation, migration, and export/import
 */

import type { ProgressState, ExportedProgress, ImportResult } from '../types/progress';

const STORAGE_KEY = 'exceptional-trainer-progress';
const CURRENT_VERSION = 1;

/**
 * Validate progress data structure
 */
export function validateProgressData(data: any): data is ProgressState {
  if (!data || typeof data !== 'object') {
    return false;
  }

  // Check required top-level fields
  if (
    typeof data.version !== 'number' ||
    typeof data.lastUpdated !== 'string' ||
    !data.modules ||
    typeof data.modules !== 'object'
  ) {
    return false;
  }

  // Validate modules structure
  for (const moduleId in data.modules) {
    const module = data.modules[moduleId];
    if (
      !module ||
      typeof module !== 'object' ||
      typeof module.moduleId !== 'string' ||
      !['locked', 'in-progress', 'completed'].includes(module.status) ||
      typeof module.exercises !== 'object' ||
      typeof module.challenges !== 'object'
    ) {
      return false;
    }
  }

  return true;
}

/**
 * Migrate progress data from older versions to current version
 */
export function migrateProgressData(
  data: any,
  fromVersion: number,
  toVersion: number
): ProgressState {
  let migrated = data;

  // Apply migrations sequentially
  if (fromVersion < 1 && toVersion >= 1) {
    migrated = migrateV0toV1(migrated);
  }

  // Future migrations would go here
  // if (fromVersion < 2 && toVersion >= 2) {
  //   migrated = migrateV1toV2(migrated);
  // }

  return migrated;
}

/**
 * Migrate from version 0 (unversioned) to version 1
 */
function migrateV0toV1(data: any): ProgressState {
  // If data has no version, assume it's version 0 and add version field
  return {
    ...data,
    version: 1,
    lastUpdated: data.lastUpdated || new Date().toISOString(),
    currentModule: data.currentModule || null,
    currentContent: data.currentContent || null,
    modules: data.modules || {},
  };
}

/**
 * Export progress data as JSON string
 */
export function exportProgress(progress: ProgressState): ExportedProgress {
  return {
    exportedAt: new Date().toISOString(),
    exportVersion: 1,
    appVersion: '1.0.0',
    data: progress,
  };
}

/**
 * Import and validate progress data from JSON
 */
export function importProgress(jsonString: string): ImportResult {
  try {
    const parsed = JSON.parse(jsonString);

    // Check if it's an exported progress object or raw progress state
    let progressData: any;
    let migratedFrom: number | undefined;

    if (parsed.exportVersion && parsed.data) {
      // It's an ExportedProgress object
      progressData = parsed.data;
    } else {
      // It's a raw ProgressState object
      progressData = parsed;
    }

    // Validate the data structure
    if (!validateProgressData(progressData)) {
      return {
        success: false,
        error: 'Invalid progress data structure',
      };
    }

    // Migrate if necessary
    if (progressData.version < CURRENT_VERSION) {
      migratedFrom = progressData.version;
      progressData = migrateProgressData(
        progressData,
        progressData.version,
        CURRENT_VERSION
      );
    }

    // Update lastUpdated timestamp
    progressData.lastUpdated = new Date().toISOString();

    return {
      success: true,
      migratedFrom,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error during import',
    };
  }
}

/**
 * Download JSON data as a file
 */
export function downloadJSON(data: any, filename: string): void {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Clean up the URL object
  URL.revokeObjectURL(url);
}

/**
 * Load progress from localStorage
 */
export function loadProgressFromStorage(): ProgressState | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return null;
    }

    const parsed = JSON.parse(stored);

    // Validate data
    if (!validateProgressData(parsed)) {
      console.error('Invalid progress data in localStorage');
      return null;
    }

    // Migrate if necessary
    if (parsed.version < CURRENT_VERSION) {
      const migrated = migrateProgressData(
        parsed,
        parsed.version,
        CURRENT_VERSION
      );
      return migrated;
    }

    return parsed;
  } catch (error) {
    console.error('Failed to load progress from localStorage:', error);
    return null;
  }
}

/**
 * Save progress to localStorage
 */
export function saveProgressToStorage(progress: ProgressState): void {
  try {
    const jsonString = JSON.stringify(progress);
    localStorage.setItem(STORAGE_KEY, jsonString);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'QuotaExceededError') {
        throw new Error('Storage quota exceeded. Please export your progress.');
      } else if (error.name === 'SecurityError') {
        throw new Error('Storage is disabled. Please enable storage or use export/import.');
      }
    }
    throw new Error('Failed to save progress to storage');
  }
}

/**
 * Clear progress from localStorage
 */
export function clearProgressFromStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear progress from localStorage:', error);
  }
}

/**
 * Calculate module completion percentage
 */
export function calculateModuleCompletion(
  exercisesCount: number,
  challengesCount: number,
  hasAssessment: boolean,
  exercisesCompleted: number,
  challengesCompleted: number,
  assessmentCompleted: boolean
): number {
  const totalItems = exercisesCount + challengesCount + (hasAssessment ? 1 : 0);

  if (totalItems === 0) {
    return 0;
  }

  const completedItems =
    exercisesCompleted +
    challengesCompleted +
    (assessmentCompleted ? 1 : 0);

  return Math.round((completedItems / totalItems) * 100);
}

/**
 * Get current timestamp in ISO format
 */
export function getCurrentTimestamp(): string {
  return new Date().toISOString();
}
