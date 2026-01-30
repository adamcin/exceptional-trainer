/**
 * ModulePage - Displays module overview and content
 */

import { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  View,
  Flex,
  Heading,
  Text,
  Button,
  ProgressCircle,
  Divider,
  Badge,
  Well,
  StatusLight,
} from '@adobe/react-spectrum';
import { ContentView } from '../components/ContentView';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { loadModule, loadContent } from '../lib/contentLoader';
import { useProgress } from '../contexts/ProgressContext';
import type { ModuleMetadata, ContentItem, ParsedContent } from '../content/schema';

export default function ModulePage() {
  const { moduleId, contentType, contentId } = useParams<{
    moduleId: string;
    contentType?: string;
    contentId?: string;
  }>();
  const navigate = useNavigate();

  const [module, setModule] = useState<ModuleMetadata | null>(null);
  const [overview, setOverview] = useState<ParsedContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const { getModuleProgress, getModuleCompletionPercentage } = useProgress();
  const moduleProgress = getModuleProgress(moduleId || '');

  // Load module metadata and overview
  useEffect(() => {
    if (!moduleId) return;

    setLoading(true);
    setError(null);

    Promise.all([
      loadModule(moduleId),
      loadContent(moduleId, 'overview.md').catch(() => null), // Overview is optional
    ])
      .then(([moduleData, overviewData]) => {
        setModule(moduleData);
        setOverview(overviewData);
      })
      .catch((err) => {
        console.error('Failed to load module:', err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [moduleId]);

  // Calculate module completion percentage
  const completionPercentage = useMemo(() => {
    if (!module || !moduleId) return 0;

    const exercisesCount = module.exercises.length;
    const challengesCount = module.challenges.length;
    const hasAssessment = Boolean(module.assessment);

    return getModuleCompletionPercentage(
      moduleId,
      exercisesCount,
      challengesCount,
      hasAssessment
    );
  }, [module, moduleId, moduleProgress, getModuleCompletionPercentage]);

  // Navigate to specific content
  const navigateToContent = (type: string, id: string) => {
    navigate(`/module/${moduleId}/${type}/${id}`);
  };

  // Navigate back to module overview
  const navigateToOverview = () => {
    navigate(`/module/${moduleId}`);
  };

  // Find current content item and navigation context
  const getCurrentContentInfo = () => {
    if (!module || !contentType || !contentId) return null;

    let allContent: { type: string; item: ContentItem }[] = [];

    // Build ordered list of all content
    module.exercises.forEach((ex) => {
      allContent.push({ type: 'exercise', item: ex });
    });
    module.challenges.forEach((ch) => {
      allContent.push({ type: 'challenge', item: ch });
    });
    if (module.assessment) {
      allContent.push({
        type: 'assessment',
        item: {
          id: 'assessment',
          title: 'Assessment',
          file: module.assessment.file,
          estimatedMinutes: 30,
        },
      });
    }

    const currentIndex = allContent.findIndex(
      (c) => c.type === contentType && c.item.id === contentId
    );

    if (currentIndex === -1) return null;

    const current = allContent[currentIndex];
    const prev = currentIndex > 0 ? allContent[currentIndex - 1] : null;
    const next = currentIndex < allContent.length - 1 ? allContent[currentIndex + 1] : null;

    return { current, prev, next, allContent };
  };

  const contentInfo = getCurrentContentInfo();

  // Loading state
  if (loading) {
    return (
      <View padding="size-400">
        <Flex direction="column" alignItems="center" gap="size-200" marginTop="size-600">
          <ProgressCircle isIndeterminate aria-label="Loading module" />
          <Text>Loading module...</Text>
        </Flex>
      </View>
    );
  }

  // Error state
  if (error || !module || !moduleId) {
    return (
      <View padding="size-400">
        <Flex direction="column" gap="size-200" alignItems="center" marginTop="size-400">
          <Heading level={2}>Failed to Load Module</Heading>
          <Text>An error occurred while loading this module.</Text>
          {error && (
            <Text UNSAFE_style={{ color: 'var(--spectrum-global-color-red-600)', fontFamily: 'monospace' }}>
              {error.message}
            </Text>
          )}
          <Button variant="primary" onPress={() => navigate('/dashboard')}>
            Back to Dashboard
          </Button>
        </Flex>
      </View>
    );
  }

  // If showing specific content, render ContentView
  if (contentType && contentId && contentInfo) {
    const { current, prev, next } = contentInfo;

    if (!current) {
      return (
        <View padding="size-400">
          <Flex direction="column" gap="size-200" alignItems="center" marginTop="size-400">
            <Heading level={2}>Content Not Found</Heading>
            <Text>The requested content could not be found.</Text>
            <Button variant="primary" onPress={navigateToOverview}>
              Back to Module Overview
            </Button>
          </Flex>
        </View>
      );
    }

    const filePath = current.item.file;

    return (
      <ContentView
        moduleId={moduleId}
        contentId={contentId}
        contentType={contentType as any}
        filePath={filePath}
        passingThreshold={
          contentType === 'assessment' && module.assessment
            ? module.assessment.passingCriteria
            : undefined
        }
        onNavigatePrev={
          prev ? () => navigateToContent(prev.type, prev.item.id) : undefined
        }
        onNavigateNext={
          next ? () => navigateToContent(next.type, next.item.id) : undefined
        }
        onComplete={() => {
          // Optionally navigate to next content after completion
          if (next) {
            navigateToContent(next.type, next.item.id);
          } else {
            navigateToOverview();
          }
        }}
      />
    );
  }

  // Render module overview page
  return (
    <View padding="size-400">
      <Flex direction="column" gap="size-400">
        {/* Module Header */}
        <Flex direction="column" gap="size-200">
          <Flex direction="row" justifyContent="space-between" alignItems="start">
            <Heading level={1}>{module.title}</Heading>
            <Button variant="secondary" onPress={() => navigate('/dashboard')}>
              Back to Dashboard
            </Button>
          </Flex>

          <Text>{module.description}</Text>

          <Flex direction="row" gap="size-200" wrap>
            <StatusLight variant="neutral">
              {module.estimatedMinutes} minutes
            </StatusLight>

            <Badge variant={
              completionPercentage === 100 ? 'positive' :
              completionPercentage > 0 ? 'info' :
              'neutral'
            }>
              {completionPercentage}% Complete
            </Badge>

            {moduleProgress?.status === 'completed' && (
              <Badge variant="positive">
                Module Completed
              </Badge>
            )}
          </Flex>
        </Flex>

        <Divider size="M" />

        {/* Learning Objectives */}
        {module.learningObjectives.length > 0 && (
          <Well>
            <Heading level={3}>Learning Objectives</Heading>
            <ul>
              {module.learningObjectives.map((objective, index) => (
                <li key={index}>
                  <Text>{objective}</Text>
                </li>
              ))}
            </ul>
          </Well>
        )}

        {/* Overview Content */}
        {overview && (
          <>
            <Heading level={2}>Overview</Heading>
            <MarkdownRenderer content={overview.content} />
            <Divider size="S" />
          </>
        )}

        {/* Exercises */}
        {module.exercises.length > 0 && (
          <Flex direction="column" gap="size-200">
            <Heading level={2}>Exercises</Heading>
            {module.exercises.map((exercise) => {
              const exerciseProgress = moduleProgress?.exercises[exercise.id];
              const isCompleted = exerciseProgress?.status === 'completed';

              return (
                <View
                  key={exercise.id}
                  borderWidth="thin"
                  borderColor="default"
                  borderRadius="medium"
                  padding="size-200"
                >
                  <Flex direction="row" justifyContent="space-between" alignItems="center">
                    <Flex direction="column" gap="size-100">
                      <Flex direction="row" gap="size-100" alignItems="center">
                        <Text UNSAFE_style={{ fontWeight: 'bold' }}>{exercise.title}</Text>
                        {isCompleted && (
                          <Badge variant="positive">Completed</Badge>
                        )}
                      </Flex>
                      <Text>
                        <StatusLight variant="neutral">
                          {exercise.estimatedMinutes} minutes
                        </StatusLight>
                      </Text>
                    </Flex>
                    <Button
                      variant={isCompleted ? 'secondary' : 'primary'}
                      onPress={() => navigateToContent('exercise', exercise.id)}
                    >
                      {isCompleted ? 'Review' : 'Start'}
                    </Button>
                  </Flex>
                </View>
              );
            })}
          </Flex>
        )}

        {/* Challenges */}
        {module.challenges.length > 0 && (
          <Flex direction="column" gap="size-200">
            <Heading level={2}>Challenges</Heading>
            {module.challenges.map((challenge) => {
              const challengeProgress = moduleProgress?.challenges[challenge.id];
              const isCompleted = challengeProgress?.status === 'completed';

              return (
                <View
                  key={challenge.id}
                  borderWidth="thin"
                  borderColor="default"
                  borderRadius="medium"
                  padding="size-200"
                >
                  <Flex direction="row" justifyContent="space-between" alignItems="center">
                    <Flex direction="column" gap="size-100">
                      <Flex direction="row" gap="size-100" alignItems="center">
                        <Text UNSAFE_style={{ fontWeight: 'bold' }}>{challenge.title}</Text>
                        {isCompleted && (
                          <Badge variant="positive">Completed</Badge>
                        )}
                      </Flex>
                      <Text>
                        <StatusLight variant="neutral">
                          {challenge.estimatedMinutes} minutes
                        </StatusLight>
                      </Text>
                    </Flex>
                    <Button
                      variant={isCompleted ? 'secondary' : 'primary'}
                      onPress={() => navigateToContent('challenge', challenge.id)}
                    >
                      {isCompleted ? 'Review' : 'Start'}
                    </Button>
                  </Flex>
                </View>
              );
            })}
          </Flex>
        )}

        {/* Assessment */}
        {module.assessment && (
          <Flex direction="column" gap="size-200">
            <Heading level={2}>Assessment</Heading>
            <View
              borderWidth="thin"
              borderColor="default"
              borderRadius="medium"
              padding="size-200"
            >
              <Flex direction="row" justifyContent="space-between" alignItems="center">
                <Flex direction="column" gap="size-100">
                  <Flex direction="row" gap="size-100" alignItems="center">
                    <Text UNSAFE_style={{ fontWeight: 'bold' }}>Module Assessment</Text>
                    {moduleProgress?.assessment?.status === 'completed' && (
                      <Badge variant="positive">Passed</Badge>
                    )}
                    {moduleProgress?.assessment?.status === 'failed' && (
                      <Badge variant="negative">Not Passed - Retry Available</Badge>
                    )}
                  </Flex>
                  <Text>
                    Pass {module.assessment.criteriaCount} criteria at {Math.round(module.assessment.passingCriteria * 100)}%
                  </Text>
                  {moduleProgress?.assessment?.bestScore !== undefined && (
                    <Text>Best Score: {Math.round(moduleProgress.assessment.bestScore * 100)}%</Text>
                  )}
                </Flex>
                <Button
                  variant={moduleProgress?.assessment?.status === 'completed' ? 'secondary' : 'accent'}
                  onPress={() => navigateToContent('assessment', 'assessment')}
                >
                  {moduleProgress?.assessment?.status === 'completed' ? 'Review' : 'Start Assessment'}
                </Button>
              </Flex>
            </View>
          </Flex>
        )}
      </Flex>
    </View>
  );
}
