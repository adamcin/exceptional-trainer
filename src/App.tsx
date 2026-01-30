import { Provider, defaultTheme } from '@adobe/react-spectrum'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ProgressProvider } from './contexts/ProgressContext'
import { ToastProvider } from './contexts/ToastContext'
import { ToastContainer } from './components/ToastContainer'
import { ErrorBoundary } from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Provider theme={defaultTheme}>
        <ToastProvider>
          <ErrorBoundary>
            <ProgressProvider>
              <ErrorBoundary>
                <RouterProvider router={router} />
                <ToastContainer />
              </ErrorBoundary>
            </ProgressProvider>
          </ErrorBoundary>
        </ToastProvider>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
