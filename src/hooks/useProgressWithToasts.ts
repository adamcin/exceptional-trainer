/**
 * Hook that combines progress context with toast notifications
 *
 * This hook wraps progress operations with appropriate toast notifications
 * for user feedback on save, export, import, and completion operations.
 */

import { useCallback } from 'react';
import { useProgress } from '../contexts/ProgressContext';
import { useToast } from '../contexts/ToastContext';
import type { ContentType } from '../content/schema';

/**
 * Extended progress context with integrated toast notifications
 */
export function useProgressWithToasts() {
  const progress = useProgress();
  const toast = useToast();

  /**
   * Complete content with success notification
   */
  const completeContentWithToast = useCallback(
    (moduleId: string, contentId: string, type: ContentType) => {
      progress.completeContent(moduleId, contentId, type);
      const typeLabel = type === 'exercise' ? 'Exercise' : 'Challenge';
      toast.showSuccess(`${typeLabel} completed!`);
    },
    [progress, toast]
  );

  /**
   * Submit assessment with result notification
   */
  const submitAssessmentWithToast = useCallback(
    (moduleId: string, criteriaResults: Record<string, boolean>) => {
      progress.submitAssessment(moduleId, criteriaResults);

      // Calculate if passed (assuming 0.8 threshold)
      const criteriaValues = Object.values(criteriaResults);
      const passedCount = criteriaValues.filter(Boolean).length;
      const totalCount = criteriaValues.length;
      const score = totalCount > 0 ? passedCount / totalCount : 0;
      const passed = score >= 0.8;

      if (passed) {
        toast.showSuccess(`Assessment passed! Score: ${Math.round(score * 100)}%`);
      } else {
        toast.showWarning(`Assessment not passed. Score: ${Math.round(score * 100)}%. You can try again.`);
      }
    },
    [progress, toast]
  );

  /**
   * Export progress with success notification
   */
  const exportProgressWithToast = useCallback(() => {
    try {
      progress.exportProgress();
      toast.showSuccess('Progress exported successfully!');
    } catch (error) {
      console.error('Export failed:', error);
      toast.showError('Failed to export progress. Please try again.');
    }
  }, [progress, toast]);

  /**
   * Import progress with result notification
   */
  const importProgressWithToast = useCallback(
    async (file: File) => {
      try {
        const result = await progress.importProgressFromFile(file);

        if (result.success) {
          toast.showSuccess('Progress imported successfully!');
        } else {
          toast.showError(`Import failed: ${result.error || 'Unknown error'}`);
        }

        return result;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        toast.showError(`Import failed: ${errorMessage}`);
        return {
          success: false,
          error: errorMessage,
        };
      }
    },
    [progress, toast]
  );

  /**
   * Reset progress with warning notification
   */
  const resetProgressWithToast = useCallback(() => {
    progress.resetProgress();
    toast.showWarning('All progress has been reset.');
  }, [progress, toast]);

  return {
    // All original progress context methods
    ...progress,

    // Enhanced methods with toasts
    completeContentWithToast,
    submitAssessmentWithToast,
    exportProgressWithToast,
    importProgressWithToast,
    resetProgressWithToast,
  };
}
