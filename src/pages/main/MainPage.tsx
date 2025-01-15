import { Stack } from '@mui/material';
import type { FC } from 'react';
import { Sidebar } from '../../shared/components/sidebar/Sidebar';
import { Outlet } from '@tanstack/react-router';

const MainPage: FC = () => {
  return (
    <Stack flexDirection="row">
      <Sidebar />
      <Outlet />
    </Stack>
  );
};

export default MainPage;
