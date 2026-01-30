/**
 * ToastContainer Component - Renders active toast notifications
 *
 * Displays toasts in a fixed container with smooth animations.
 * Toasts stack vertically and can be dismissed manually or auto-dismiss.
 */

import { View, Flex, Text, ActionButton } from '@adobe/react-spectrum';
import CheckmarkCircle from '@spectrum-icons/workflow/CheckmarkCircle';
import Alert from '@spectrum-icons/workflow/Alert';
import Info from '@spectrum-icons/workflow/Info';
import Close from '@spectrum-icons/workflow/Close';
import { useToast, type Toast, type ToastType } from '../contexts/ToastContext';

/**
 * Get icon for toast type
 */
function getToastIcon(type: ToastType) {
  switch (type) {
    case 'success':
      return <CheckmarkCircle size="S" />;
    case 'error':
      return <Alert size="S" />;
    case 'warning':
      return <Alert size="S" />;
    case 'info':
      return <Info size="S" />;
    default:
      return <Info size="S" />;
  }
}

/**
 * Get color scheme for toast type
 */
function getToastColor(type: ToastType): string {
  switch (type) {
    case 'success':
      return 'var(--spectrum-global-color-green-600)';
    case 'error':
      return 'var(--spectrum-global-color-red-600)';
    case 'warning':
      return 'var(--spectrum-global-color-orange-600)';
    case 'info':
      return 'var(--spectrum-global-color-blue-600)';
    default:
      return 'var(--spectrum-global-color-gray-600)';
  }
}

/**
 * Get background color for toast type
 */
function getToastBackground(type: ToastType): string {
  switch (type) {
    case 'success':
      return 'var(--spectrum-global-color-green-100)';
    case 'error':
      return 'var(--spectrum-global-color-red-100)';
    case 'warning':
      return 'var(--spectrum-global-color-orange-100)';
    case 'info':
      return 'var(--spectrum-global-color-blue-100)';
    default:
      return 'var(--spectrum-global-color-gray-100)';
  }
}

/**
 * Individual toast item component
 */
function ToastItem({ toast }: { toast: Toast }) {
  const { dismissToast } = useToast();
  const color = getToastColor(toast.type);
  const backgroundColor = getToastBackground(toast.type);

  return (
    <View
      UNSAFE_style={{
        backgroundColor,
        border: `2px solid ${color}`,
        borderRadius: '8px',
        padding: '12px 16px',
        minWidth: '300px',
        maxWidth: '500px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        animation: 'slideInRight 0.3s ease-out',
      }}
    >
      <Flex direction="row" gap="size-150" alignItems="center" justifyContent="space-between">
        <Flex direction="row" gap="size-150" alignItems="center" flex="1">
          <View UNSAFE_style={{ color }}>
            {getToastIcon(toast.type)}
          </View>
          <Text UNSAFE_style={{ color, fontSize: '14px', fontWeight: 500 }}>
            {toast.message}
          </Text>
        </Flex>
        <ActionButton
          isQuiet
          onPress={() => dismissToast(toast.id)}
          aria-label="Dismiss notification"
          UNSAFE_style={{ minWidth: 'auto' }}
        >
          <Close size="S" />
        </ActionButton>
      </Flex>
    </View>
  );
}

/**
 * Toast container component
 * Renders all active toasts in a fixed position
 */
export function ToastContainer() {
  const { toasts } = useToast();

  if (toasts.length === 0) {
    return null;
  }

  return (
    <>
      {/* Keyframe animations */}
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>

      {/* Toast container */}
      <View
        UNSAFE_style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          pointerEvents: 'none',
        }}
      >
        {toasts.map((toast) => (
          <View key={toast.id} UNSAFE_style={{ pointerEvents: 'auto' }}>
            <ToastItem toast={toast} />
          </View>
        ))}
      </View>
    </>
  );
}
