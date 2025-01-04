import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  styled,
} from '@mui/material';
import type { FC } from 'react';

const HomePage: FC = () => {
  return (
    <HomePageContainer>
      <Box>
        <h1>AI学習サポートツール</h1>
        <p>あなたの学習をAIがサポート。効率的に知識を定着させましょう。</p>
      </Box>
      <CardContainer>
        <Card>
          <CardHeader title="📝メモ機能" />
          <CardContent>
            学んだ内容を簡単に記録。いつでも振り返ることができます。
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="🤖AIサポート" />
          <CardContent>
            記録したメモから、AIが確認問題を生成し、あなたのアウトプットをサポートします。
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="📊進捗管理" />
          <CardContent>
            学習の進捗を可視化。モチベーション維持をサポートします。
          </CardContent>
        </Card>
      </CardContainer>
      <Button variant="contained">今すぐ始める</Button>
    </HomePageContainer>
  );
};

const HomePageContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  gap: theme.spacing(4),

  '& > .MuiBox-root': {
    textAlign: 'center',
  },
}));

const CardContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  '& > .MuiCard-root': {
    width: '250px',
    height: '180px',

    '&:hover': {
      boxShadow: `2px 2px 12px ${theme.palette.grey[500]}`,
    },
  },
}));

export default HomePage;
