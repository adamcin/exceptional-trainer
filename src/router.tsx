import { createHashRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ModulePage from './pages/ModulePage';
import { ErrorBoundary } from './components/ErrorBoundary';

export const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <ErrorBoundary>
            <HomePage />
          </ErrorBoundary>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <ErrorBoundary>
            <DashboardPage />
          </ErrorBoundary>
        ),
      },
      {
        path: 'module/:moduleId',
        element: (
          <ErrorBoundary>
            <ModulePage />
          </ErrorBoundary>
        ),
      },
      {
        path: 'module/:moduleId/:contentType/:contentId',
        element: (
          <ErrorBoundary>
            <ModulePage />
          </ErrorBoundary>
        ),
      },
    ],
  },
]);
