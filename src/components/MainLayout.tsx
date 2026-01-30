/**
 * Main application layout with responsive navigation sidebar
 * Story 4A.1: Application Shell Layout
 */

import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  Grid,
  View,
  Flex,
  Heading,
  ActionButton,
  Divider,
  Text,
} from '@adobe/react-spectrum';
import MenuIcon from '@spectrum-icons/workflow/ShowMenu';
import CloseIcon from '@spectrum-icons/workflow/Close';
import HomeIcon from '@spectrum-icons/workflow/Home';
import DashboardIcon from '@spectrum-icons/workflow/Dashboard';
import ModuleNav from './ModuleNav';

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const isActivePath = (path: string): boolean => {
    return location.pathname === path || location.hash === `#${path}`;
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const NavLink = ({ to, icon, children }: { to: string; icon: React.ReactNode; children: React.ReactNode }) => {
    const active = isActivePath(to);
    return (
      <div
        style={{
          padding: '8px 12px',
          borderRadius: '4px',
          backgroundColor: active ? 'var(--spectrum-global-color-gray-200)' : 'transparent',
          cursor: 'pointer',
          fontWeight: active ? 600 : 400,
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
          alignItems: 'center',
        }}
        onClick={() => navigate(to)}
      >
        {icon}
        <Text>{children}</Text>
      </div>
    );
  };

  return (
    <Grid
      areas={{
        base: ['header', 'content'],
        M: ['sidebar header', 'sidebar content'],
      }}
      columns={{
        base: ['1fr'],
        M: isSidebarOpen ? ['250px', '1fr'] : ['0px', '1fr'],
      }}
      rows={{
        base: ['size-800', 'auto'],
        M: ['size-800', 'auto'],
      }}
      height="100vh"
      gap="size-0"
    >
      {/* Header */}
      <View
        gridArea="header"
        backgroundColor="gray-100"
        borderBottomWidth="thin"
        borderBottomColor="gray-300"
        padding="size-200"
      >
        <Flex direction="row" alignItems="center" justifyContent="space-between">
          <Flex direction="row" alignItems="center" gap="size-200">
            <ActionButton
              isQuiet
              onPress={toggleSidebar}
              aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
            >
              {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </ActionButton>
            <Heading level={2} margin="size-0">
              Exceptional Trainer
            </Heading>
          </Flex>
        </Flex>
      </View>

      {/* Sidebar */}
      {isSidebarOpen && (
        <View
          gridArea="sidebar"
          backgroundColor="gray-50"
          borderEndWidth="thin"
          borderEndColor="gray-300"
          padding="size-200"
          UNSAFE_style={{
            overflowY: 'auto',
          }}
        >
          <Flex direction="column" gap="size-100">
            <NavLink to="/" icon={<HomeIcon />}>
              Home
            </NavLink>
            <NavLink to="/dashboard" icon={<DashboardIcon />}>
              Dashboard
            </NavLink>

            <Divider size="S" marginTop="size-200" marginBottom="size-200" />

            <Heading level={4} marginTop="size-100" marginBottom="size-100">
              Modules
            </Heading>

            {/* Module navigation component */}
            <ModuleNav />
          </Flex>
        </View>
      )}

      {/* Main Content Area */}
      <View
        gridArea="content"
        padding="size-400"
        UNSAFE_style={{
          overflowY: 'auto',
          maxHeight: 'calc(100vh - 64px)',
        }}
      >
        <Outlet />
      </View>
    </Grid>
  );
}
