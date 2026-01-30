/**
 * React Context for managing user progress state
 */

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import type { ContentType } from '../content/schema';
import type {
  ProgressState,
  ModuleProgress,
  ContentProgress,
  AssessmentProgress,
  ImportResult,
  AssessmentAttempt,
} from '../types/progress';
import {
  createInitialProgress,
  initializeModuleProgress,
  initializeContentProgress,
  initializeAssessmentProgress,
} from '../types/progress';
import {
  loadProgressFromStorage,
  saveProgressToStorage,
  exportProgress as exportProgressData,
  importProgress as importProgressData,
  downloadJSON,
  calculateModuleCompletion,
  getCurrentTimestamp,
} from '../lib/progressUtils';

/**
 * Context value interface
 */
interface ProgressContextValue {
  progress: ProgressState;

  // Navigation
  setCurrentContent: (moduleId: string | null, contentId: string | null) => void;

  // Progress updates
  startContent: (moduleId: string, contentId: string, type: ContentType) => void;
  completeContent: (moduleId: string, contentId: string, type: ContentType) => void;

  // Assessment
  startAssessment: (moduleId: string) => void;
  submitAssessment: (moduleId: string, criteriaResults: Record<string, boolean>) => void;

  // Module management
  unlockModule: (moduleId: string) => void;
  isModuleUnlocked: (moduleId: string) => boolean;

  // Data management
  exportProgress: () => void;
  importProgressFromFile: (file: File) => Promise<ImportResult>;
  resetProgress: () => void;

  // Computed values
  getModuleProgress: (moduleId: string) => ModuleProgress | null;
  getModuleCompletionPercentage: (
    moduleId: string,
    exercisesCount: number,
    challengesCount: number,
    hasAssessment: boolean
  ) => number;
  getOverallCompletionPercentage: (totalModules: number, completedModules: number) => number;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

/**
 * Hook to access progress context
 */
export function useProgress(): ProgressContextValue {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
}

/**
 * Progress Provider Component
 */
export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(createInitialProgress);
  const [isInitialized, setIsInitialized] = useState(false);
  const saveTimerRef = useRef<number | null>(null);
  const lastSaveErrorRef = useRef<string | null>(null);

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const stored = loadProgressFromStorage();
      if (stored) {
        setProgress(stored);
      }
    } catch (error) {
      console.error('Failed to load progress from storage:', error);
      // Continue with initial progress if load fails
    }
    setIsInitialized(true);
  }, []);

  // Auto-save to localStorage (debounced)
  useEffect(() => {
    if (!isInitialized) {
      return;
    }

    // Clear existing timer
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
    }

    // Set new timer for debounced save
    saveTimerRef.current = setTimeout(() => {
      try {
        saveProgressToStorage(progress);
        // Clear error state on successful save
        lastSaveErrorRef.current = null;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Failed to save progress:', error);

        // Only log unique errors to avoid spam
        if (lastSaveErrorRef.current !== errorMessage) {
          lastSaveErrorRef.current = errorMessage;

          // Check for specific error types
          if (error instanceof Error) {
            if (error.name === 'QuotaExceededError') {
              console.warn('Storage quota exceeded. Please export your progress.');
            } else if (error.name === 'SecurityError') {
              console.warn('Storage unavailable. Browser settings may prevent saving progress.');
            }
          }
        }
      }
    }, 500);

    return () => {
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
      }
    };
  }, [progress, isInitialized]);

  /**
   * Update progress state and timestamp
   */
  const updateProgress = useCallback((updater: (prev: ProgressState) => ProgressState) => {
    setProgress((prev) => {
      const updated = updater(prev);
      return {
        ...updated,
        lastUpdated: getCurrentTimestamp(),
      };
    });
  }, []);

  /**
   * Ensure module progress exists in state
   */
  const ensureModuleProgress = useCallback(
    (moduleId: string): ModuleProgress => {
      return progress.modules[moduleId] || initializeModuleProgress(moduleId);
    },
    [progress.modules]
  );

  /**
   * Set current module and content
   */
  const setCurrentContent = useCallback(
    (moduleId: string | null, contentId: string | null) => {
      updateProgress((prev) => ({
        ...prev,
        currentModule: moduleId,
        currentContent: contentId,
      }));
    },
    [updateProgress]
  );

  /**
   * Start content (exercise or challenge)
   */
  const startContent = useCallback(
    (moduleId: string, contentId: string, type: ContentType) => {
      if (type !== 'exercise' && type !== 'challenge') {
        return;
      }

      updateProgress((prev) => {
        const moduleProgress = ensureModuleProgress(moduleId);
        const contentMap = type === 'exercise' ? moduleProgress.exercises : moduleProgress.challenges;
        const existingContent = contentMap[contentId];

        // Don't update if already started or completed
        if (existingContent && existingContent.status !== 'not-started') {
          return prev;
        }

        const newContent: ContentProgress = existingContent
          ? { ...existingContent, status: 'in-progress', startedAt: getCurrentTimestamp() }
          : { ...initializeContentProgress(contentId), status: 'in-progress', startedAt: getCurrentTimestamp() };

        const newContentMap = { ...contentMap, [contentId]: newContent };
        const updatedModule: ModuleProgress = {
          ...moduleProgress,
          [type === 'exercise' ? 'exercises' : 'challenges']: newContentMap,
          status: moduleProgress.status === 'locked' ? 'in-progress' : moduleProgress.status,
          startedAt: moduleProgress.startedAt || getCurrentTimestamp(),
        };

        return {
          ...prev,
          modules: {
            ...prev.modules,
            [moduleId]: updatedModule,
          },
        };
      });
    },
    [updateProgress, ensureModuleProgress]
  );

  /**
   * Complete content (exercise or challenge)
   */
  const completeContent = useCallback(
    (moduleId: string, contentId: string, type: ContentType) => {
      if (type !== 'exercise' && type !== 'challenge') {
        return;
      }

      updateProgress((prev) => {
        const moduleProgress = ensureModuleProgress(moduleId);
        const contentMap = type === 'exercise' ? moduleProgress.exercises : moduleProgress.challenges;
        const existingContent = contentMap[contentId] || initializeContentProgress(contentId);

        const completedContent: ContentProgress = {
          ...existingContent,
          status: 'completed',
          completedAt: getCurrentTimestamp(),
          startedAt: existingContent.startedAt || getCurrentTimestamp(),
        };

        const newContentMap = { ...contentMap, [contentId]: completedContent };
        const updatedModule: ModuleProgress = {
          ...moduleProgress,
          [type === 'exercise' ? 'exercises' : 'challenges']: newContentMap,
          status: moduleProgress.status === 'locked' ? 'in-progress' : moduleProgress.status,
          startedAt: moduleProgress.startedAt || getCurrentTimestamp(),
        };

        return {
          ...prev,
          modules: {
            ...prev.modules,
            [moduleId]: updatedModule,
          },
        };
      });
    },
    [updateProgress, ensureModuleProgress]
  );

  /**
   * Start assessment
   */
  const startAssessment = useCallback(
    (moduleId: string) => {
      updateProgress((prev) => {
        const moduleProgress = ensureModuleProgress(moduleId);
        const existingAssessment = moduleProgress.assessment || initializeAssessmentProgress();

        const updatedAssessment: AssessmentProgress = {
          ...existingAssessment,
          status: 'in-progress',
        };

        const updatedModule: ModuleProgress = {
          ...moduleProgress,
          assessment: updatedAssessment,
          status: moduleProgress.status === 'locked' ? 'in-progress' : moduleProgress.status,
          startedAt: moduleProgress.startedAt || getCurrentTimestamp(),
        };

        return {
          ...prev,
          modules: {
            ...prev.modules,
            [moduleId]: updatedModule,
          },
        };
      });
    },
    [updateProgress, ensureModuleProgress]
  );

  /**
   * Submit assessment
   */
  const submitAssessment = useCallback(
    (moduleId: string, criteriaResults: Record<string, boolean>) => {
      updateProgress((prev) => {
        const moduleProgress = ensureModuleProgress(moduleId);
        const existingAssessment = moduleProgress.assessment || initializeAssessmentProgress();

        // Calculate score
        const criteriaValues = Object.values(criteriaResults);
        const passedCount = criteriaValues.filter(Boolean).length;
        const totalCount = criteriaValues.length;
        const score = totalCount > 0 ? passedCount / totalCount : 0;

        // Determine if passed (assuming 0.8 threshold, should come from module metadata)
        const passed = score >= 0.8;

        // Create new attempt
        const attemptNumber = existingAssessment.attempts.length + 1;
        const newAttempt: AssessmentAttempt = {
          attemptNumber,
          attemptedAt: getCurrentTimestamp(),
          score,
          criteriaResults,
          passed,
        };

        // Update assessment
        const updatedAssessment: AssessmentProgress = {
          status: passed ? 'completed' : 'failed',
          attempts: [...existingAssessment.attempts, newAttempt],
          bestScore: Math.max(existingAssessment.bestScore, score),
          lastAttemptAt: getCurrentTimestamp(),
        };

        // Update module status if assessment passed
        const updatedModule: ModuleProgress = {
          ...moduleProgress,
          assessment: updatedAssessment,
          status: passed ? 'completed' : moduleProgress.status,
          completedAt: passed ? getCurrentTimestamp() : moduleProgress.completedAt,
        };

        return {
          ...prev,
          modules: {
            ...prev.modules,
            [moduleId]: updatedModule,
          },
        };
      });
    },
    [updateProgress, ensureModuleProgress]
  );

  /**
   * Unlock a module
   */
  const unlockModule = useCallback(
    (moduleId: string) => {
      updateProgress((prev) => {
        const moduleProgress = ensureModuleProgress(moduleId);

        if (moduleProgress.status !== 'locked') {
          return prev;
        }

        const updatedModule: ModuleProgress = {
          ...moduleProgress,
          status: 'in-progress',
        };

        return {
          ...prev,
          modules: {
            ...prev.modules,
            [moduleId]: updatedModule,
          },
        };
      });
    },
    [updateProgress, ensureModuleProgress]
  );

  /**
   * Check if module is unlocked
   * First module (01-*) is always unlocked by default
   */
  const isModuleUnlocked = useCallback(
    (moduleId: string): boolean => {
      // First module is always unlocked (starts with "01-")
      if (moduleId.startsWith('01-')) {
        return true;
      }

      const moduleProgress = progress.modules[moduleId];
      return moduleProgress ? moduleProgress.status !== 'locked' : false;
    },
    [progress.modules]
  );

  /**
   * Export progress to JSON file
   */
  const exportProgress = useCallback(() => {
    const exported = exportProgressData(progress);
    const filename = `exceptional-trainer-progress-${new Date().toISOString().split('T')[0]}.json`;
    downloadJSON(exported, filename);
  }, [progress]);

  /**
   * Import progress from JSON file
   */
  const importProgressFromFile = useCallback(
    async (file: File): Promise<ImportResult> => {
      try {
        const text = await file.text();
        const result = importProgressData(text);

        if (result.success) {
          const parsed = JSON.parse(text);
          const progressData = parsed.exportVersion ? parsed.data : parsed;
          setProgress(progressData);
        }

        return result;
      } catch (error) {
        return {
          success: false,
          error: error instanceof Error ? error.message : 'Failed to read file',
        };
      }
    },
    []
  );

  /**
   * Reset all progress
   */
  const resetProgress = useCallback(() => {
    const newProgress = createInitialProgress();
    setProgress(newProgress);
  }, []);

  /**
   * Get module progress
   */
  const getModuleProgress = useCallback(
    (moduleId: string): ModuleProgress | null => {
      return progress.modules[moduleId] || null;
    },
    [progress.modules]
  );

  /**
   * Calculate module completion percentage
   */
  const getModuleCompletionPercentage = useCallback(
    (
      moduleId: string,
      exercisesCount: number,
      challengesCount: number,
      hasAssessment: boolean
    ): number => {
      const moduleProgress = progress.modules[moduleId];

      if (!moduleProgress) {
        return 0;
      }

      const exercisesCompleted = Object.values(moduleProgress.exercises).filter(
        (e) => e.status === 'completed'
      ).length;

      const challengesCompleted = Object.values(moduleProgress.challenges).filter(
        (c) => c.status === 'completed'
      ).length;

      const assessmentCompleted =
        moduleProgress.assessment?.status === 'completed' || false;

      return calculateModuleCompletion(
        exercisesCount,
        challengesCount,
        hasAssessment,
        exercisesCompleted,
        challengesCompleted,
        assessmentCompleted
      );
    },
    [progress.modules]
  );

  /**
   * Calculate overall completion percentage
   */
  const getOverallCompletionPercentage = useCallback(
    (totalModules: number, completedModules: number): number => {
      if (totalModules === 0) {
        return 0;
      }
      return Math.round((completedModules / totalModules) * 100);
    },
    []
  );

  const value: ProgressContextValue = {
    progress,
    setCurrentContent,
    startContent,
    completeContent,
    startAssessment,
    submitAssessment,
    unlockModule,
    isModuleUnlocked,
    exportProgress,
    importProgressFromFile,
    resetProgress,
    getModuleProgress,
    getModuleCompletionPercentage,
    getOverallCompletionPercentage,
  };

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}
