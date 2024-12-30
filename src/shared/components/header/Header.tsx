import { AppBar, Box, Button, Stack, Toolbar } from '@mui/material';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <AppBar>
      <Toolbar>
        {/* TODO: ロゴとLinkを追加する */}
        <Box component="div" sx={{ flexGrow: 1 }}>
          学習ツール
        </Box>
        <Stack flexDirection="row">
          <Button color="inherit">ログイン</Button>
          <Button color="inherit">登録</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
