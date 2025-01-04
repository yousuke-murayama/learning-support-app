import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  InputAdornment,
  Stack,
  styled,
  TextField,
} from '@mui/material';
import type { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const MemosPage: FC = () => {
  const mockMemos: Array<{
    id: number;
    title: string;
    content: string;
    date: string;
  }> = [
    {
      id: 1,
      title: 'React Hooks',
      content:
        'useState and useEffect are fundamental hooks in React...useState and useEffect are fundamental hooks in React...',
      date: '2023-06-01',
    },
    {
      id: 2,
      title: 'TypeScript Basics',
      content: 'TypeScript adds static typing to JavaScript, allowing for...',
      date: '2023-06-05',
    },
    {
      id: 3,
      title: 'CSS Grid Layout',
      content:
        'CSS Grid is a powerful tool for creating two-dimensional layouts...',
      date: '2023-06-10',
    },
    {
      id: 4,
      title: 'CSS Grid Layout',
      content:
        'CSS Grid is a powerful tool for creating two-dimensional layouts...',
      date: '2023-06-10',
    },
  ];

  return (
    <>
      <Box
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'space-between',
          padding: theme.spacing(2),
        })}
      >
        <h1>メモ一覧</h1>
        <Button variant="contained">新規追加</Button>
      </Box>
      <Stack gap={2} padding={2}>
        <TextField
          label="メモを検索する..."
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            width: '260px',
          }}
        />
        <CardContainer>
          {mockMemos.map(({ title, content, date }, index) => (
            <Card key={index}>
              <CardHeader title={title} />
              <CardContent>
                <p>{date}</p>
                {/* TODO: styled関数内で当てたい 2024/01/04 */}
                <p
                  style={{
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                  }}
                >
                  {content}
                </p>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="small">
                  <EditIcon />
                  編集
                </Button>
                <Button variant="contained" color="error" size="small">
                  <DeleteIcon />
                  削除
                </Button>
              </CardActions>
            </Card>
          ))}
        </CardContainer>
      </Stack>
    </>
  );
};

const CardContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),

  '& > .MuiCard-root': {
    width: '300px',

    '& > .MuiCardActions-root': {
      padding: theme.spacing(2),
      justifyContent: 'space-between',
    },
  },
}));

export default MemosPage;
