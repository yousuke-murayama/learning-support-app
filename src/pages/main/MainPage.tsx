import { Stack } from '@mui/material';
import type { FC } from 'react';
import { Sidebar } from '../../shared/components/sidebar/Sidebar';
import MemosPage from '../memo/MemosPage';

const MainPage: FC = () => {
  return (
    <Stack flexDirection="row">
      <Sidebar />
      {/* TODO: 仮実装、後でOutletに置き換える */}
      <MemosPage />
    </Stack>
  );
};

export default MainPage;
