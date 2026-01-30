/**
 * ToastContext - Global toast notification system
 *
 * Provides toast notification functionality throughout the application.
 * Supports success, error, warning, and info messages with auto-dismiss.
 */

import React, { createContext, useContext, useState, useCallback } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
  duration: number; // milliseconds, 0 for no auto-dismiss
}

interface ToastContextValue {
  toasts: Toast[];
  showToast: (message: string, type: ToastType, duration?: number) => string;
  showSuccess: (message: string, duration?: number) => string;
  showError: (message: string, duration?: number) => string;
  showWarning: (message: string, duration?: number) => string;
  showInfo: (message: string, duration?: number) => string;
  dismissToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

/**
 * Hook to access toast context
 */
export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}

let toastIdCounter = 0;

/**
 * Toast Provider Component
 */
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  /**
   * Generate unique toast ID
   */
  const generateToastId = (): string => {
    toastIdCounter += 1;
    return `toast-${toastIdCounter}-${Date.now()}`;
  };

  /**
   * Show a toast notification
   */
  const showToast = useCallback((message: string, type: ToastType, duration: number = 5000): string => {
    const id = generateToastId();
    const toast: Toast = {
      id,
      type,
      message,
      duration,
    };

    setToasts((prev) => [...prev, toast]);

    // Auto-dismiss after duration (if duration > 0)
    if (duration > 0) {
      setTimeout(() => {
        dismissToast(id);
      }, duration);
    }

    return id;
  }, []);

  /**
   * Dismiss a specific toast
   */
  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  /**
   * Convenience method: Show success toast
   */
  const showSuccess = useCallback(
    (message: string, duration?: number): string => {
      return showToast(message, 'success', duration);
    },
    [showToast]
  );

  /**
   * Convenience method: Show error toast
   */
  const showError = useCallback(
    (message: string, duration?: number): string => {
      return showToast(message, 'error', duration);
    },
    [showToast]
  );

  /**
   * Convenience method: Show warning toast
   */
  const showWarning = useCallback(
    (message: string, duration?: number): string => {
      return showToast(message, 'warning', duration);
    },
    [showToast]
  );

  /**
   * Convenience method: Show info toast
   */
  const showInfo = useCallback(
    (message: string, duration?: number): string => {
      return showToast(message, 'info', duration);
    },
    [showToast]
  );

  const value: ToastContextValue = {
    toasts,
    showToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    dismissToast,
  };

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}
