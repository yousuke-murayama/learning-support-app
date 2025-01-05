import { Drawer, List, ListItem, styled, Toolbar } from '@mui/material';
import type { FC } from 'react';

export const Sidebar: FC = () => {
  return (
    <StyledDrawer variant="permanent">
      <Toolbar />
      <List>
        <ListItem>foo</ListItem>
        <ListItem>bar</ListItem>
        <ListItem>buzz</ListItem>
      </List>
    </StyledDrawer>
  );
};

const StyledDrawer = styled(Drawer)({
  width: '240px',
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: '240px',
    boxSizing: 'border-box',
  },
});
