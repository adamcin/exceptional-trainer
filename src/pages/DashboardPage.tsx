/**
 * Dashboard page showing overall progress and module status
 * Story 4A.3: Create Progress Dashboard Component
 */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  View,
  Heading,
  Flex,
  Grid,
  Content,
  Button,
  ButtonGroup,
  ProgressBar,
  StatusLight,
  Divider,
  Text,
  Well,
} from '@adobe/react-spectrum';
import { loadAllModules } from '../lib/contentLoader';
import { useProgress } from '../contexts/ProgressContext';
import type { ModuleMetadata } from '../content/schema';

export default function DashboardPage() {
  const [modules, setModules] = useState<ModuleMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {
    progress,
    getModuleProgress,
    getModuleCompletionPercentage,
    getOverallCompletionPercentage,
    exportProgress,
    importProgressFromFile,
    resetProgress,
    isModuleUnlocked,
  } = useProgress();

  useEffect(() => {
    loadAllModules()
      .then((loadedModules) => {
        setModules(loadedModules);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load modules:', err);
        setLoading(false);
      });
  }, []);

  const handleExport = () => {
    exportProgress();
  };

  const handleImport = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const result = await importProgressFromFile(file);
        if (result.success) {
          alert('Progress imported successfully!');
          window.location.reload(); // Reload to update UI
        } else {
          alert(`Import failed: ${result.error}`);
        }
      }
    };
    input.click();
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      resetProgress();
      window.location.reload(); // Reload to update UI
    }
  };

  const completedModules = modules.filter(
    (m) => getModuleProgress(m.id)?.status === 'completed'
  ).length;
  const overallPercentage = getOverallCompletionPercentage(modules.length, completedModules);

  const hasAnyProgress = Object.keys(progress.modules).length > 0;

  if (loading) {
    return (
      <View padding="size-400">
        <Heading level={1}>Dashboard</Heading>
        <Content>Loading your progress...</Content>
      </View>
    );
  }

  // Empty state for new users
  if (!hasAnyProgress) {
    return (
      <View padding="size-400">
        <Heading level={1}>Dashboard</Heading>

        <Flex direction="column" alignItems="center" marginTop="size-600" gap="size-300">
          <Well maxWidth="600px">
            <Flex direction="column" gap="size-200" alignItems="center">
              <Heading>Welcome to Exceptional Trainer!</Heading>
              <Content>
                You haven't started any modules yet. Begin your learning journey by exploring the
                modules in the sidebar, or return to the home page to learn more.
              </Content>
              <Button variant="accent" onPress={() => navigate('/')} marginTop="size-200">
                Get Started
              </Button>
            </Flex>
          </Well>
        </Flex>
      </View>
    );
  }

  return (
    <View padding="size-400">
      <Flex direction="column" gap="size-400">
        {/* Header */}
        <Flex direction="row" justifyContent="space-between" alignItems="center">
          <Heading level={1}>Dashboard</Heading>
          <ButtonGroup>
            <Button variant="secondary" onPress={handleExport}>
              Export Progress
            </Button>
            <Button variant="secondary" onPress={handleImport}>
              Import Progress
            </Button>
            <Button variant="negative" onPress={handleReset}>
              Reset Progress
            </Button>
          </ButtonGroup>
        </Flex>

        <Divider size="S" />

        {/* Overall Progress Card */}
        <View
          backgroundColor="gray-75"
          padding="size-300"
          borderRadius="medium"
          borderWidth="thin"
          borderColor="gray-300"
        >
          <Heading level={2} marginBottom="size-200">
            Overall Progress
          </Heading>
          <Flex direction="column" gap="size-200">
            <ProgressBar label="Total Completion" value={overallPercentage} />
            <Flex direction="row" gap="size-400" wrap="wrap">
              <Flex direction="column" gap="size-50">
                <Text UNSAFE_style={{ fontWeight: 600, fontSize: '24px' }}>
                  {completedModules}
                </Text>
                <Text UNSAFE_style={{ fontSize: '14px', color: 'var(--spectrum-global-color-gray-700)' }}>
                  Modules Completed
                </Text>
              </Flex>
              <Flex direction="column" gap="size-50">
                <Text UNSAFE_style={{ fontWeight: 600, fontSize: '24px' }}>{modules.length}</Text>
                <Text UNSAFE_style={{ fontSize: '14px', color: 'var(--spectrum-global-color-gray-700)' }}>
                  Total Modules
                </Text>
              </Flex>
              <Flex direction="column" gap="size-50">
                <Text UNSAFE_style={{ fontWeight: 600, fontSize: '24px' }}>
                  {overallPercentage}%
                </Text>
                <Text UNSAFE_style={{ fontSize: '14px', color: 'var(--spectrum-global-color-gray-700)' }}>
                  Overall Progress
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </View>

        <Divider size="S" />

        {/* Module Progress Grid */}
        <View>
          <Heading level={2} marginBottom="size-300">
            Module Progress
          </Heading>
          <Grid
            columns={{
              base: ['1fr'],
              M: ['1fr', '1fr'],
              L: ['1fr', '1fr', '1fr'],
            }}
            gap="size-300"
          >
            {modules.map((module) => {
              const moduleProgress = getModuleProgress(module.id);
              const completionPercentage = getModuleCompletionPercentage(
                module.id,
                module.exercises.length,
                module.challenges.length,
                true // hasAssessment
              );
              const unlocked = isModuleUnlocked(module.id);
              const status = moduleProgress?.status || 'locked';

              return (
                <div
                  key={module.id}
                  style={{
                    backgroundColor: 'var(--spectrum-global-color-gray-75)',
                    padding: '16px',
                    borderRadius: '4px',
                    border: '1px solid var(--spectrum-global-color-gray-300)',
                    cursor: unlocked ? 'pointer' : 'not-allowed',
                    opacity: unlocked ? 1 : 0.6,
                  }}
                  onClick={() => unlocked && navigate(`/module/${module.id}`)}
                >
                  <Flex direction="column" gap="size-200">
                    {/* Module Title and Status */}
                    <Flex direction="row" justifyContent="space-between" alignItems="start">
                      <Heading level={3} UNSAFE_style={{ fontSize: '18px' }}>
                        {module.title}
                      </Heading>
                      <StatusLight
                        variant={
                          status === 'completed'
                            ? 'positive'
                            : status === 'in-progress'
                            ? 'info'
                            : 'neutral'
                        }
                      >
                        {status === 'completed'
                          ? 'Complete'
                          : status === 'in-progress'
                          ? 'In Progress'
                          : 'Locked'}
                      </StatusLight>
                    </Flex>

                    {/* Module Description */}
                    <Content>{module.description}</Content>

                    {/* Progress Bar */}
                    {unlocked && (
                      <ProgressBar label="Progress" value={completionPercentage} size="S" />
                    )}

                    {/* Module Stats */}
                    <Flex direction="row" gap="size-200" wrap="wrap">
                      <Text UNSAFE_style={{ fontSize: '12px', color: 'var(--spectrum-global-color-gray-700)' }}>
                        {module.exercises.length} exercises
                      </Text>
                      <Text UNSAFE_style={{ fontSize: '12px', color: 'var(--spectrum-global-color-gray-700)' }}>
                        {module.challenges.length} challenges
                      </Text>
                      <Text UNSAFE_style={{ fontSize: '12px', color: 'var(--spectrum-global-color-gray-700)' }}>
                        ~{module.estimatedMinutes} min
                      </Text>
                    </Flex>

                    {/* Action Button */}
                    {unlocked && (
                      <Button
                        variant={status === 'completed' ? 'secondary' : 'accent'}
                        onPress={() => navigate(`/module/${module.id}`)}
                        UNSAFE_style={{ marginTop: '8px' }}
                      >
                        {status === 'completed'
                          ? 'Review'
                          : status === 'in-progress'
                          ? 'Continue'
                          : 'Start'}
                      </Button>
                    )}
                  </Flex>
                </div>
              );
            })}
          </Grid>
        </View>

        {/* Recent Activity Section */}
        {progress.lastUpdated && (
          <View marginTop="size-400">
            <Heading level={2} marginBottom="size-200">
              Recent Activity
            </Heading>
            <View
              backgroundColor="gray-75"
              padding="size-300"
              borderRadius="medium"
              borderWidth="thin"
              borderColor="gray-300"
            >
              <Text>
                Last updated: {new Date(progress.lastUpdated).toLocaleString()}
              </Text>
            </View>
          </View>
        )}

        {/* Assessment Scores Section */}
        {modules.some((m) => getModuleProgress(m.id)?.assessment?.bestScore) && (
          <View marginTop="size-400">
            <Heading level={2} marginBottom="size-200">
              Assessment Scores
            </Heading>
            <Grid
              columns={{
                base: ['1fr'],
                M: ['1fr', '1fr'],
                L: ['1fr', '1fr', '1fr'],
              }}
              gap="size-300"
            >
              {modules
                .filter((m) => getModuleProgress(m.id)?.assessment?.bestScore)
                .map((module) => {
                  const moduleProgress = getModuleProgress(module.id);
                  const bestScore = moduleProgress?.assessment?.bestScore || 0;
                  const attempts = moduleProgress?.assessment?.attempts.length || 0;

                  return (
                    <View
                      key={module.id}
                      backgroundColor="gray-75"
                      padding="size-300"
                      borderRadius="medium"
                      borderWidth="thin"
                      borderColor="gray-300"
                    >
                      <Flex direction="column" gap="size-100">
                        <Heading level={4}>{module.title}</Heading>
                        <Text UNSAFE_style={{ fontWeight: 600, fontSize: '20px' }}>
                          {Math.round(bestScore * 100)}%
                        </Text>
                        <Text UNSAFE_style={{ fontSize: '12px', color: 'var(--spectrum-global-color-gray-700)' }}>
                          Best score ({attempts} attempt{attempts !== 1 ? 's' : ''})
                        </Text>
                      </Flex>
                    </View>
                  );
                })}
            </Grid>
          </View>
        )}
      </Flex>
    </View>
  );
}
