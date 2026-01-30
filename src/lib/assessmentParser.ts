/**
 * Assessment Parser - Extract criteria from assessment markdown
 */

export interface AssessmentCriterion {
  id: string;
  title: string;
  task: string;
  successCriteria: string[];
  order: number;
}

export interface ParsedAssessment {
  criteria: AssessmentCriterion[];
  totalCount: number;
}

/**
 * Parse assessment markdown to extract criteria
 *
 * Expected format:
 * ### 1. Criterion Title
 * **Task**: Description
 * **Success Criteria**:
 * - [ ] Criterion 1
 * - [ ] Criterion 2
 * **Pass/Fail**: _____
 */
export function parseAssessment(markdownContent: string): ParsedAssessment {
  const criteria: AssessmentCriterion[] = [];

  // Split into sections by ### headings (numbered criteria)
  const sections = markdownContent.split(/(?=^### \d+\. )/gm);

  for (const section of sections) {
    if (!section.trim()) continue;

    // Extract criterion number and title from heading
    const headingMatch = section.match(/^### (\d+)\. (.+)$/m);
    if (!headingMatch || !headingMatch[1] || !headingMatch[2]) continue;

    const order = parseInt(headingMatch[1], 10);
    const title = headingMatch[2].trim();

    // Extract task description
    const taskMatch = section.match(/\*\*Task\*\*:\s*(.+?)(?=\n\*\*|$)/s);
    const task = taskMatch && taskMatch[1] ? taskMatch[1].trim() : '';

    // Extract success criteria (checkbox items)
    const criteriaRegex = /^- \[ \] (.+)$/gm;
    const successCriteria: string[] = [];
    let match;

    while ((match = criteriaRegex.exec(section)) !== null) {
      if (match[1]) {
        successCriteria.push(match[1].trim());
      }
    }

    // Only add if we have a valid heading and task
    if (title && task) {
      criteria.push({
        id: `criterion-${order}`,
        title,
        task,
        successCriteria,
        order,
      });
    }
  }

  // Sort by order number
  criteria.sort((a, b) => a.order - b.order);

  return {
    criteria,
    totalCount: criteria.length,
  };
}

/**
 * Calculate assessment score from checked criteria
 */
export interface ScoringResult {
  score: number; // 0.0 to 1.0
  passed: boolean;
  criteriaResults: Record<string, boolean>;
  passedCount: number;
  totalCount: number;
}

export function calculateScore(
  checkedCriteria: Record<string, boolean>,
  passingThreshold: number = 0.8
): ScoringResult {
  const criteriaIds = Object.keys(checkedCriteria);
  const totalCount = criteriaIds.length;
  const passedCount = criteriaIds.filter(id => checkedCriteria[id]).length;
  const score = totalCount > 0 ? passedCount / totalCount : 0;
  const passed = score >= passingThreshold;

  return {
    score,
    passed,
    criteriaResults: checkedCriteria,
    passedCount,
    totalCount,
  };
}
