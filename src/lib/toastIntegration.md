# Toast Notification Integration Points

This document describes how to integrate toast notifications throughout the application.

## Usage in Components

Import the `useToast` hook or the enhanced `useProgressWithToasts` hook:

```typescript
import { useToast } from '../contexts/ToastContext';
// OR for progress-related operations:
import { useProgressWithToasts } from '../hooks/useProgressWithToasts';
```

## Integration Points

### 1. Progress Save Operations (Already Integrated)
- **Location**: `src/contexts/ProgressContext.tsx`
- **Scenario**: Auto-save localStorage errors
- **Implementation**: Console warnings for quota exceeded and security errors
- **Status**: Implemented with enhanced error handling

### 2. Content Completion
- **Location**: Components using `completeContent`
- **Recommended Usage**:
```typescript
const { completeContentWithToast } = useProgressWithToasts();

// On completion button click:
completeContentWithToast(moduleId, contentId, contentType);
// Shows: "Exercise completed!" or "Challenge completed!"
```

### 3. Assessment Submission
- **Location**: `src/components/AssessmentView.tsx`
- **Recommended Usage**:
```typescript
const { submitAssessmentWithToast } = useProgressWithToasts();

// On assessment submit:
submitAssessmentWithToast(moduleId, criteriaResults);
// Shows: "Assessment passed! Score: 85%" or warning if failed
```

### 4. Export Progress
- **Location**: Dashboard or settings UI
- **Recommended Usage**:
```typescript
const { exportProgressWithToast } = useProgressWithToasts();

// On export button click:
exportProgressWithToast();
// Shows: "Progress exported successfully!"
```

### 5. Import Progress
- **Location**: Dashboard or settings UI
- **Recommended Usage**:
```typescript
const { importProgressWithToast } = useProgressWithToasts();

// On file upload:
const result = await importProgressWithToast(file);
// Shows: "Progress imported successfully!" or error message
```

### 6. Reset Progress
- **Location**: Dashboard or settings UI
- **Recommended Usage**:
```typescript
const { resetProgressWithToast } = useProgressWithToasts();

// After confirmation:
resetProgressWithToast();
// Shows: "All progress has been reset."
```

### 7. Content Loading Errors
- **Location**: Already handled in `ContentView.tsx`
- **Status**: Shows inline error UI with retry button
- **Optional Enhancement**: Could add toast on repeated failures

### 8. localStorage Quota Errors
- **Location**: Add to components that trigger heavy saves
- **Recommended Usage**:
```typescript
const toast = useToast();

try {
  // operation that might exceed quota
} catch (error) {
  if (error.name === 'QuotaExceededError') {
    toast.showError('Storage full. Please export your progress to backup data.');
  }
}
```

## Toast Types and When to Use

- **Success** (`showSuccess`): Completed actions - exercises, assessments passed, exports
- **Error** (`showError`): Failed operations - imports failed, save errors, critical issues
- **Warning** (`showWarning`): Non-critical issues - assessments not passed, resets, quota warnings
- **Info** (`showInfo`): Informational messages - module unlocked, hints, tips

## Best Practices

1. **Don't Over-Toast**: Only show toasts for user-initiated actions or important system events
2. **Keep Messages Concise**: 5-10 words maximum
3. **Use Appropriate Types**: Match toast type to severity
4. **Auto-Dismiss Timing**:
   - Success: 3000ms (default: 5000ms)
   - Info: 4000ms (default: 5000ms)
   - Warning: 6000ms (longer to ensure user sees it)
   - Error: 8000ms or manual dismiss (0 duration)
5. **Error Details**: For errors, include actionable information when possible

## Example Integration in DashboardPage

```typescript
import { useProgressWithToasts } from '../hooks/useProgressWithToasts';

export function DashboardPage() {
  const {
    exportProgressWithToast,
    importProgressWithToast,
    resetProgressWithToast,
  } = useProgressWithToasts();

  const handleExport = () => {
    exportProgressWithToast();
  };

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      await importProgressWithToast(file);
    }
  };

  const handleReset = () => {
    // Show confirmation dialog first
    if (confirm('Are you sure you want to reset all progress?')) {
      resetProgressWithToast();
    }
  };

  return (
    // ... UI with buttons calling these handlers
  );
}
```
