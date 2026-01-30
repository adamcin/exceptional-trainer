/**
 * ErrorFallback Component - Displays user-friendly error message
 *
 * This component is shown when an error boundary catches an error.
 * It provides a friendly error message and recovery options.
 */

import {
  View,
  Flex,
  Heading,
  Content,
  Button,
  Text,
  IllustratedMessage,
  Well,
} from '@adobe/react-spectrum';
import AlertCircle from '@spectrum-icons/workflow/Alert';
import type { ErrorFallbackProps } from './ErrorBoundary';

/**
 * Error fallback display component
 * Shows error icon, message, and recovery actions
 */
export function ErrorFallback({ error, resetError }: ErrorFallbackProps) {
  const handleReload = () => {
    window.location.reload();
  };

  const handleReset = () => {
    // Try to reset without full page reload
    resetError();
  };

  return (
    <View padding="size-600" height="100vh">
      <Flex direction="column" alignItems="center" justifyContent="center" height="100%">
        <IllustratedMessage>
          <AlertCircle size="XXL" UNSAFE_style={{ color: 'var(--spectrum-global-color-red-500)' }} />
          <Heading>Something Went Wrong</Heading>
          <Content>
            An unexpected error occurred while displaying this content. The rest of the application
            should continue to function normally.
          </Content>
        </IllustratedMessage>

        {error && (
          <Well marginTop="size-400" maxWidth="size-6000">
            <Flex direction="column" gap="size-100">
              <Text>
                <strong>Error Details:</strong>
              </Text>
              <Text UNSAFE_style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--spectrum-global-color-red-600)' }}>
                {error.message || 'Unknown error'}
              </Text>
            </Flex>
          </Well>
        )}

        <Flex direction="row" gap="size-200" marginTop="size-400">
          <Button variant="secondary" onPress={handleReset}>
            Try Again
          </Button>
          <Button variant="primary" onPress={handleReload}>
            Reload Page
          </Button>
        </Flex>
      </Flex>
    </View>
  );
}
