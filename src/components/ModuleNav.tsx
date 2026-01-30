/**
 * Module navigation component with progress indicators
 * Story 4A.2: Build Module Navigation Component
 */

import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Flex, View, Text, ProgressBar, StatusLight } from '@adobe/react-spectrum';
import LockClosedIcon from '@spectrum-icons/workflow/LockClosed';
import CheckmarkCircleIcon from '@spectrum-icons/workflow/CheckmarkCircle';
import { loadAllModules } from '../lib/contentLoader';
import { useProgress } from '../contexts/ProgressContext';
import type { ModuleMetadata } from '../content/schema';

export default function ModuleNav() {
  const [modules, setModules] = useState<ModuleMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { getModuleProgress, getModuleCompletionPercentage, isModuleUnlocked } = useProgress();

  useEffect(() => {
    loadAllModules()
      .then((loadedModules) => {
        setModules(loadedModules);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load modules:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  const isActivePath = (moduleId: string): boolean => {
    return location.hash.includes(`/module/${moduleId}`);
  };

  const handleModuleClick = (moduleId: string) => {
    navigate(`/module/${moduleId}`);
  };

  if (loading) {
    return (
      <View>
        <Text UNSAFE_style={{ fontSize: '14px', color: 'var(--spectrum-global-color-gray-600)' }}>
          Loading modules...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text UNSAFE_style={{ fontSize: '14px', color: 'var(--spectrum-global-color-red-600)' }}>
          Failed to load modules
        </Text>
      </View>
    );
  }

  if (modules.length === 0) {
    return (
      <View>
        <Text UNSAFE_style={{ fontSize: '14px', color: 'var(--spectrum-global-color-gray-600)' }}>
          No modules available
        </Text>
      </View>
    );
  }

  return (
    <Flex direction="column" gap="size-150">
      {modules.map((module) => {
        const moduleProgress = getModuleProgress(module.id);
        const isUnlocked = isModuleUnlocked(module.id);
        const isActive = isActivePath(module.id);
        const completionPercentage = getModuleCompletionPercentage(
          module.id,
          module.exercises.length,
          module.challenges.length,
          true // hasAssessment
        );

        const isCompleted = moduleProgress?.status === 'completed';
        const isInProgress = moduleProgress?.status === 'in-progress';
        const isLocked = !isUnlocked && moduleProgress?.status !== 'completed';

        return (
          <div
            key={module.id}
            style={{
              padding: '8px',
              borderRadius: '4px',
              backgroundColor: isActive
                ? 'var(--spectrum-global-color-gray-200)'
                : 'transparent',
              cursor: isLocked ? 'not-allowed' : 'pointer',
              opacity: isLocked ? 0.6 : 1,
            }}
            onClick={() => !isLocked && handleModuleClick(module.id)}
          >
            <Flex direction="column" gap="size-50">
              <Flex direction="row" alignItems="center" gap="size-100">
                {/* Status Icon */}
                {isLocked && <LockClosedIcon size="S" />}
                {isCompleted && <CheckmarkCircleIcon size="S" UNSAFE_style={{ color: 'var(--spectrum-global-color-green-600)' }} />}
                {isInProgress && !isCompleted && (
                  <StatusLight variant="info" UNSAFE_style={{ marginRight: '4px' }}>
                    {null}
                  </StatusLight>
                )}

                {/* Module Title */}
                <Text
                  UNSAFE_style={{
                    fontSize: '14px',
                    fontWeight: isActive ? 600 : 400,
                    flex: 1,
                  }}
                >
                  {module.title}
                </Text>
              </Flex>

              {/* Progress Bar */}
              {!isLocked && completionPercentage > 0 && (
                <ProgressBar
                  label=""
                  value={completionPercentage}
                  size="S"
                  UNSAFE_style={{ marginTop: '4px' }}
                />
              )}

              {/* Completion Percentage */}
              {!isLocked && (
                <Text
                  UNSAFE_style={{
                    fontSize: '12px',
                    color: 'var(--spectrum-global-color-gray-600)',
                  }}
                >
                  {completionPercentage}% complete
                </Text>
              )}
            </Flex>
          </div>
        );
      })}
    </Flex>
  );
}
