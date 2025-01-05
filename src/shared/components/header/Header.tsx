import { AppBar, Box, Button, Stack, Toolbar } from '@mui/material';
import type { FC } from 'react';

export const Header: FC = () => {
  return (
    <AppBar
      sx={(theme) => ({
        // NOTE: Sidebarが前面に出ないようにしている
        zIndex: theme.zIndex.drawer + 1,
      })}
    >
      <Toolbar>
        {/* TODO: ロゴとLinkを追加する */}
        <Box sx={{ flexGrow: 1 }}>学習ツール</Box>
        <Stack flexDirection="row">
          <Button color="inherit">ログイン</Button>
          <Button color="inherit">登録</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
