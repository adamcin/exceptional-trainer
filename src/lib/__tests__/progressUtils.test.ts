/**
 * Tests for progress utility functions
 *
 * Note: These are manual tests to validate functionality.
 * Run these by importing and calling in a test page/component.
 */

import { createInitialProgress } from '../../types/progress';
import {
  validateProgressData,
  migrateProgressData,
  exportProgress,
  importProgress,
  calculateModuleCompletion,
} from '../progressUtils';

export function testValidateProgressData(): boolean {
  console.log('Testing validateProgressData...');

  // Test valid progress data
  const validData = createInitialProgress();
  if (!validateProgressData(validData)) {
    console.error('Valid data failed validation');
    return false;
  }

  // Test invalid data (missing version)
  const invalidData1 = { modules: {} };
  if (validateProgressData(invalidData1)) {
    console.error('Invalid data (missing version) passed validation');
    return false;
  }

  // Test invalid data (wrong modules type)
  const invalidData2 = { version: 1, lastUpdated: '2024-01-01', modules: null };
  if (validateProgressData(invalidData2)) {
    console.error('Invalid data (null modules) passed validation');
    return false;
  }

  console.log('✓ validateProgressData tests passed');
  return true;
}

export function testExportImport(): boolean {
  console.log('Testing export/import...');

  // Create test progress data
  const progress = createInitialProgress();
  progress.modules['test-module'] = {
    moduleId: 'test-module',
    status: 'in-progress',
    startedAt: '2024-01-01T00:00:00Z',
    completedAt: null,
    exercises: {},
    challenges: {},
    assessment: null,
  };

  // Export
  const exported = exportProgress(progress);
  if (!exported.exportedAt || !exported.data) {
    console.error('Export failed to create valid structure');
    return false;
  }

  // Import
  const jsonString = JSON.stringify(exported);
  const result = importProgress(jsonString);

  if (!result.success) {
    console.error('Import failed:', result.error);
    return false;
  }

  console.log('✓ export/import tests passed');
  return true;
}

export function testCalculateModuleCompletion(): boolean {
  console.log('Testing calculateModuleCompletion...');

  // Test with no items
  const completion1 = calculateModuleCompletion(0, 0, false, 0, 0, false);
  if (completion1 !== 0) {
    console.error('Expected 0% for no items, got:', completion1);
    return false;
  }

  // Test with 2 exercises, 1 challenge, 1 assessment
  // 1 exercise completed, 0 challenges, 0 assessment = 25%
  const completion2 = calculateModuleCompletion(2, 1, true, 1, 0, false);
  if (completion2 !== 25) {
    console.error('Expected 25% completion, got:', completion2);
    return false;
  }

  // Test with all complete
  const completion3 = calculateModuleCompletion(2, 1, true, 2, 1, true);
  if (completion3 !== 100) {
    console.error('Expected 100% completion, got:', completion3);
    return false;
  }

  // Test with no assessment
  const completion4 = calculateModuleCompletion(2, 1, false, 2, 1, false);
  if (completion4 !== 100) {
    console.error('Expected 100% completion (no assessment), got:', completion4);
    return false;
  }

  console.log('✓ calculateModuleCompletion tests passed');
  return true;
}

export function testMigration(): boolean {
  console.log('Testing data migration...');

  // Create v0 data (unversioned)
  const v0Data = {
    modules: {},
    currentModule: null,
    currentContent: null,
  };

  // Migrate to v1
  const migrated = migrateProgressData(v0Data, 0, 1);

  if (migrated.version !== 1) {
    console.error('Migration failed to set version to 1');
    return false;
  }

  if (!migrated.lastUpdated) {
    console.error('Migration failed to add lastUpdated');
    return false;
  }

  console.log('✓ migration tests passed');
  return true;
}

// Run all tests
export function runAllProgressTests(): boolean {
  console.log('=== Running Progress Utils Tests ===');

  const results = [
    testValidateProgressData(),
    testExportImport(),
    testCalculateModuleCompletion(),
    testMigration(),
  ];

  const allPassed = results.every((r) => r);
  console.log(allPassed ? '✓ All tests passed' : '✗ Some tests failed');

  return allPassed;
}
