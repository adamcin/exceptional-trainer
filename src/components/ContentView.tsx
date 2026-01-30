/**
 * ContentView Component - Displays module content (exercises, challenges, overview)
 */

import { useEffect, useState } from 'react';
import {
  View,
  Flex,
  Heading,
  Text,
  Button,
  ProgressCircle,
  Badge,
  Divider,
  Well,
  StatusLight,
} from '@adobe/react-spectrum';
import { MarkdownRenderer } from './MarkdownRenderer';
import { AssessmentView } from './AssessmentView';
import { loadContent } from '../lib/contentLoader';
import type { ParsedContent, ContentType } from '../content/schema';
import { useProgress } from '../contexts/ProgressContext';

export interface ContentViewProps {
  moduleId: string;
  contentId: string;
  contentType: ContentType;
  filePath: string;
  passingThreshold?: number; // For assessments (0.0 to 1.0)
  onComplete?: () => void;
  onNavigateNext?: () => void;
  onNavigatePrev?: () => void;
}

/**
 * Main component for displaying content of any type
 */
export function ContentView({
  moduleId,
  contentId,
  contentType,
  filePath,
  passingThreshold = 0.8,
  onComplete,
  onNavigateNext,
  onNavigatePrev,
}: ContentViewProps) {
  const [content, setContent] = useState<ParsedContent | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  const { startContent, completeContent, getModuleProgress } = useProgress();
  const moduleProgress = getModuleProgress(moduleId);

  // Determine content progress status
  const getContentProgress = () => {
    if (!moduleProgress) return null;

    if (contentType === 'exercise') {
      return moduleProgress.exercises[contentId] || null;
    } else if (contentType === 'challenge') {
      return moduleProgress.challenges[contentId] || null;
    }
    return null;
  };

  const contentProgress = getContentProgress();
  const isCompleted = contentProgress?.status === 'completed';

  // Load content on mount or when params change
  useEffect(() => {
    setLoading(true);
    setError(null);

    loadContent(moduleId, filePath)
      .then((parsed) => {
        setContent(parsed);

        // Auto-start content if not already started
        if (contentType === 'exercise' || contentType === 'challenge') {
          if (!contentProgress || contentProgress.status === 'not-started') {
            startContent(moduleId, contentId, contentType);
          }
        }
      })
      .catch((err) => {
        console.error('Failed to load content:', err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [moduleId, contentId, filePath, contentType]);

  const handleComplete = () => {
    if (contentType === 'exercise' || contentType === 'challenge') {
      completeContent(moduleId, contentId, contentType);
    }
    if (onComplete) {
      onComplete();
    }
  };

  // Loading state
  if (loading) {
    return (
      <View padding="size-400">
        <Flex direction="column" alignItems="center" gap="size-200" marginTop="size-600">
          <ProgressCircle isIndeterminate aria-label="Loading content" />
          <Text>Loading content...</Text>
        </Flex>
      </View>
    );
  }

  // Error state
  if (error) {
    return (
      <View padding="size-400">
        <Flex direction="column" gap="size-200" alignItems="center" marginTop="size-400">
          <Heading level={2}>Failed to Load Content</Heading>
          <Text>An error occurred while loading this content.</Text>
          <Text UNSAFE_style={{ color: 'var(--spectrum-global-color-red-600)', fontFamily: 'monospace' }}>
            {error.message}
          </Text>
          <Button variant="primary" onPress={() => window.location.reload()}>
            Try Again
          </Button>
        </Flex>
      </View>
    );
  }

  // Content not found state
  if (!content) {
    return (
      <View padding="size-400">
        <Flex direction="column" gap="size-200" alignItems="center" marginTop="size-400">
          <Heading level={2}>Content Not Found</Heading>
          <Text>The requested content could not be found.</Text>
          {onNavigatePrev && (
            <Button variant="secondary" onPress={onNavigatePrev}>
              Go Back
            </Button>
          )}
        </Flex>
      </View>
    );
  }

  const { frontmatter } = content;

  return (
    <View padding="size-400">
      <Flex direction="column" gap="size-300">
        {/* Header Section */}
        <Flex direction="column" gap="size-200">
          <Flex direction="row" gap="size-200" alignItems="center" wrap>
            <Badge variant={
              contentType === 'exercise' ? 'positive' :
              contentType === 'challenge' ? 'info' :
              contentType === 'assessment' ? 'negative' :
              'neutral'
            }>
              {contentType.toUpperCase()}
            </Badge>

            {frontmatter.difficulty && (
              <Badge variant={
                frontmatter.difficulty === 'beginner' ? 'info' :
                frontmatter.difficulty === 'intermediate' ? 'neutral' :
                'negative'
              }>
                {frontmatter.difficulty}
              </Badge>
            )}

            {frontmatter.duration && (
              <Text>
                <StatusLight variant="neutral">
                  {frontmatter.duration} min
                </StatusLight>
              </Text>
            )}

            {isCompleted && (
              <Badge variant="positive">
                Completed
              </Badge>
            )}
          </Flex>

          <Heading level={1}>{frontmatter.title}</Heading>

          {frontmatter.skills && frontmatter.skills.length > 0 && (
            <Flex direction="row" gap="size-100" wrap>
              <Text UNSAFE_style={{ fontWeight: 'bold', marginRight: '0.5em' }}>Skills:</Text>
              {frontmatter.skills.map((skill, index) => (
                <Text key={index}>
                  {skill}
                  {index < frontmatter.skills.length - 1 && ', '}
                </Text>
              ))}
            </Flex>
          )}
        </Flex>

        <Divider size="S" />

        {/* Content Body */}
        {contentType === 'exercise' && (
          <>
            <ExerciseContent content={content.content} />
            <Divider size="S" marginTop="size-400" />
            {/* Action Buttons for Exercise */}
            <Flex direction="row" gap="size-200" justifyContent="space-between" wrap>
              <Flex direction="row" gap="size-200">
                {onNavigatePrev && (
                  <Button variant="secondary" onPress={onNavigatePrev}>
                    Previous
                  </Button>
                )}
                {onNavigateNext && (
                  <Button variant="secondary" onPress={onNavigateNext}>
                    Next
                  </Button>
                )}
              </Flex>
              {!isCompleted && (
                <Button variant="accent" onPress={handleComplete}>
                  Mark as Complete
                </Button>
              )}
            </Flex>
          </>
        )}

        {contentType === 'challenge' && (
          <>
            <ChallengeContent content={content.content} />
            <Divider size="S" marginTop="size-400" />
            {/* Action Buttons for Challenge */}
            <Flex direction="row" gap="size-200" justifyContent="space-between" wrap>
              <Flex direction="row" gap="size-200">
                {onNavigatePrev && (
                  <Button variant="secondary" onPress={onNavigatePrev}>
                    Previous
                  </Button>
                )}
                {onNavigateNext && (
                  <Button variant="secondary" onPress={onNavigateNext}>
                    Next
                  </Button>
                )}
              </Flex>
              {!isCompleted && (
                <Button variant="accent" onPress={handleComplete}>
                  Mark as Complete
                </Button>
              )}
            </Flex>
          </>
        )}

        {contentType === 'overview' && (
          <>
            <MarkdownRenderer content={content.content} />
            <Divider size="S" marginTop="size-400" />
            {/* Action Buttons for Overview */}
            <Flex direction="row" gap="size-200" justifyContent="space-between" wrap>
              <Flex direction="row" gap="size-200">
                {onNavigatePrev && (
                  <Button variant="secondary" onPress={onNavigatePrev}>
                    Previous
                  </Button>
                )}
                {onNavigateNext && (
                  <Button variant="secondary" onPress={onNavigateNext}>
                    Next
                  </Button>
                )}
              </Flex>
            </Flex>
          </>
        )}

        {contentType === 'assessment' && (
          /* Assessment has its own navigation built-in */
          <AssessmentView
            moduleId={moduleId}
            content={content.content}
            passingThreshold={passingThreshold}
          />
        )}
      </Flex>
    </View>
  );
}

/**
 * Enhanced rendering for exercise content
 * Highlights step-by-step instructions and tips
 */
function ExerciseContent({ content }: { content: string }) {
  // Parse content to identify numbered steps and tips (blockquotes)
  // For now, use standard markdown rendering with special styling
  return (
    <View>
      <MarkdownRenderer content={content} />
    </View>
  );
}

/**
 * Enhanced rendering for challenge content
 * Highlights goals, constraints, and success criteria
 */
function ChallengeContent({ content }: { content: string }) {
  // Challenges have special sections for goals and constraints
  // For now, use standard markdown rendering
  return (
    <View>
      <Well>
        <Text UNSAFE_style={{ fontStyle: 'italic', marginBottom: '1em' }}>
          Complete this challenge by following the goal and meeting the success criteria below.
        </Text>
      </Well>
      <MarkdownRenderer content={content} />
    </View>
  );
}
