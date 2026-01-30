/**
 * AssessmentView Component - Interactive self-assessment with scoring
 */

import { useState, useEffect, useMemo } from 'react';
import {
  View,
  Flex,
  Heading,
  Text,
  Button,
  Checkbox,
  Divider,
  Well,
  Badge,
  StatusLight,
  ProgressBar,
} from '@adobe/react-spectrum';
import { useProgress } from '../contexts/ProgressContext';
import { parseAssessment, calculateScore } from '../lib/assessmentParser';

export interface AssessmentViewProps {
  moduleId: string;
  content: string; // Full markdown content
  passingThreshold: number; // 0.0 to 1.0 (e.g., 0.8 for 80%)
}

/**
 * AssessmentView Component
 */
export function AssessmentView({ moduleId, content, passingThreshold }: AssessmentViewProps) {
  const { startAssessment, submitAssessment, getModuleProgress } = useProgress();
  const moduleProgress = getModuleProgress(moduleId);

  // Parse assessment criteria from markdown
  const { criteria, totalCount } = useMemo(() => parseAssessment(content), [content]);

  // Track which criteria are checked (criterionId -> boolean)
  const [checkedCriteria, setCheckedCriteria] = useState<Record<string, boolean>>({});

  // Track if assessment is submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize from progress context on mount
  useEffect(() => {
    // Check if already submitted in progress
    const assessmentProgress = moduleProgress?.assessment;
    if (assessmentProgress && assessmentProgress.status === 'completed') {
      // Show last successful attempt
      const lastAttempt = assessmentProgress.attempts[assessmentProgress.attempts.length - 1];
      if (lastAttempt && lastAttempt.passed) {
        setCheckedCriteria(lastAttempt.criteriaResults);
        setIsSubmitted(true);
        return;
      }
    }

    // Start assessment if not already started
    if (!assessmentProgress || assessmentProgress.status === 'not-started') {
      startAssessment(moduleId);
    }

    // Initialize all criteria as unchecked
    const initial: Record<string, boolean> = {};
    criteria.forEach((criterion) => {
      initial[criterion.id] = false;
    });
    setCheckedCriteria(initial);
  }, [moduleId, criteria, moduleProgress, startAssessment]);

  // Handle checkbox change
  const handleCheckboxChange = (criterionId: string, checked: boolean) => {
    setCheckedCriteria((prev) => ({
      ...prev,
      [criterionId]: checked,
    }));
  };

  // Calculate current score
  const currentScore = useMemo(() => {
    return calculateScore(checkedCriteria, passingThreshold);
  }, [checkedCriteria, passingThreshold]);

  // Handle submit assessment
  const handleSubmit = () => {
    // Submit to progress context (scoring happens in context)
    submitAssessment(moduleId, checkedCriteria);

    // Module unlocking happens automatically in ProgressContext when assessment passes
    // The next module will be unlocked by the dashboard or module navigation logic

    setIsSubmitted(true);
  };

  // Handle retake
  const handleRetake = () => {
    // Reset all criteria
    const reset: Record<string, boolean> = {};
    criteria.forEach((criterion) => {
      reset[criterion.id] = false;
    });
    setCheckedCriteria(reset);
    setIsSubmitted(false);

    // Restart assessment
    startAssessment(moduleId);
  };

  // Render submitted results
  if (isSubmitted) {
    return (
      <View padding="size-400">
        <Flex direction="column" gap="size-300">
          {/* Results Header */}
          <Well>
            <Flex direction="column" gap="size-200" alignItems="center">
              <Heading level={2}>Assessment Results</Heading>

              {/* Score Display */}
              <Flex direction="column" gap="size-100" alignItems="center">
                <Text UNSAFE_style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                  {currentScore.passedCount} / {currentScore.totalCount}
                </Text>
                <Text UNSAFE_style={{ fontSize: '1.5rem' }}>
                  {Math.round(currentScore.score * 100)}%
                </Text>
              </Flex>

              {/* Pass/Fail Badge */}
              {currentScore.passed ? (
                <Badge variant="positive" UNSAFE_style={{ fontSize: '1.2rem', padding: '0.5rem 1rem' }}>
                  PASSED
                </Badge>
              ) : (
                <Badge variant="negative" UNSAFE_style={{ fontSize: '1.2rem', padding: '0.5rem 1rem' }}>
                  NEEDS REVIEW
                </Badge>
              )}

              {/* Feedback Message */}
              {currentScore.passed ? (
                <View marginTop="size-200">
                  <Heading level={3}>Congratulations!</Heading>
                  <Text>
                    You've successfully completed this module assessment. You've demonstrated mastery
                    of the key concepts and are ready to move forward.
                  </Text>
                </View>
              ) : (
                <View marginTop="size-200">
                  <Heading level={3}>Keep Learning</Heading>
                  <Text>
                    You're making progress, but need to review some areas. Don't be discouraged—learning
                    takes time. Review the exercises and challenges, then try again when ready.
                  </Text>
                </View>
              )}
            </Flex>
          </Well>

          <Divider size="S" />

          {/* Criteria Summary */}
          <Heading level={3}>Criteria Summary</Heading>
          <View>
            {criteria.map((criterion) => {
              const isPassed = checkedCriteria[criterion.id] === true;
              return (
                <Flex
                  key={criterion.id}
                  direction="row"
                  gap="size-200"
                  alignItems="center"
                  marginBottom="size-200"
                >
                  <StatusLight variant={isPassed ? 'positive' : 'neutral'}>
                    {criterion.order}. {criterion.title}
                  </StatusLight>
                  {isPassed ? (
                    <Badge variant="positive">Passed</Badge>
                  ) : (
                    <Badge variant="neutral">Not Met</Badge>
                  )}
                </Flex>
              );
            })}
          </View>

          <Divider size="S" />

          {/* Action Buttons */}
          <Flex direction="row" gap="size-200" justifyContent="space-between" wrap>
            <Button variant="secondary" onPress={handleRetake}>
              Retake Assessment
            </Button>

            {currentScore.passed && (
              <Button variant="accent" onPress={() => {
                // Navigate to next module (this will be enhanced with router integration)
                window.location.hash = '#/dashboard';
              }}>
                Continue to Dashboard
              </Button>
            )}

            {!currentScore.passed && (
              <Button variant="primary" onPress={() => {
                // Navigate back to module overview
                window.location.hash = `#/module/${moduleId}`;
              }}>
                Review Module Content
              </Button>
            )}
          </Flex>
        </Flex>
      </View>
    );
  }

  // Render assessment criteria (not yet submitted)
  return (
    <View padding="size-400">
      <Flex direction="column" gap="size-300">
        {/* Instructions */}
        <Well>
          <Heading level={3}>Self-Assessment Instructions</Heading>
          <Text>
            Work through each criterion below in Photoshop. Check each box only when you can
            successfully complete the task. You need {Math.round(passingThreshold * 100)}% to pass.
          </Text>
        </Well>

        {/* Real-time Score Indicator */}
        <View>
          <Flex direction="column" gap="size-100">
            <Flex direction="row" justifyContent="space-between">
              <Text>
                <strong>Current Progress:</strong> {currentScore.passedCount} / {currentScore.totalCount} ({Math.round(currentScore.score * 100)}%)
              </Text>
              <Text>
                <strong>Passing:</strong> {Math.round(passingThreshold * totalCount)} / {totalCount}
              </Text>
            </Flex>
            <ProgressBar
              label="Assessment Progress"
              value={currentScore.passedCount}
              maxValue={totalCount}
            />
          </Flex>
        </View>

        <Divider size="S" />

        {/* Assessment Criteria */}
        {criteria.map((criterion) => {
          const isChecked = checkedCriteria[criterion.id] === true;

          return (
            <View key={criterion.id}>
              <Flex direction="column" gap="size-200">
                <Heading level={3}>
                  {criterion.order}. {criterion.title}
                </Heading>

                <Text>
                  <strong>Task:</strong> {criterion.task}
                </Text>

                {criterion.successCriteria.length > 0 && (
                  <View>
                    <Text UNSAFE_style={{ fontWeight: 'bold', marginBottom: '0.5em' }}>
                      Success Criteria:
                    </Text>
                    <ul style={{ marginLeft: '1.5em', marginTop: '0.5em' }}>
                      {criterion.successCriteria.map((criteria, index) => (
                        <li key={index} style={{ marginBottom: '0.25em' }}>
                          <Text>{criteria}</Text>
                        </li>
                      ))}
                    </ul>
                  </View>
                )}

                {/* Single checkbox for entire criterion */}
                <Checkbox
                  isSelected={isChecked}
                  onChange={(checked) => handleCheckboxChange(criterion.id, checked)}
                >
                  <strong>I can successfully complete this criterion</strong>
                </Checkbox>
              </Flex>
              <Divider size="S" marginTop="size-300" />
            </View>
          );
        })}

        {/* Submit Button */}
        <Flex direction="row" justifyContent="end">
          <Button
            variant="accent"
            onPress={handleSubmit}
            isDisabled={currentScore.passedCount === 0}
          >
            Submit Assessment
          </Button>
        </Flex>
      </Flex>
    </View>
  );
}
