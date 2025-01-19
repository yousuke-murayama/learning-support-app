import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  styled,
} from '@mui/material';
import { FC } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const MemoPage: FC = () => {
  const mockMemo: { id: number; title: string; content: string; date: string } =
    {
      id: 1,
      title: 'React Hooks',
      content:
        "React Hooks are functions that let you 'hook into' React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes.\n\nSome of the most commonly used hooks are:\n\n1. useState: Lets you add state to function components\n2. useEffect: Lets you perform side effects in function components\n3. useContext: Lets you subscribe to React context without introducing nesting\n4. useReducer: Lets you manage local state of complex components with a reducer\n\nHooks solve many problems that developers faced with class components, such as reusing stateful logic between components, splitting complex components into smaller functions, and using React features without classes.",
      date: '2023-06-01',
    };
  return (
    <Box>
      <Box
        sx={(theme) => ({
          padding: theme.spacing(2),
        })}
      >
        <Button variant="text" startIcon={<ArrowBackIosIcon />}>
          メモ一覧に戻る
        </Button>
      </Box>
      <CardContainer>
        <Card>
          <CardHeader title={mockMemo.title} />
          <CardContent>
            <p>{mockMemo.content}</p>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small" startIcon={<EditIcon />}>
              編集
            </Button>
            <Button
              variant="contained"
              size="small"
              startIcon={<AutoAwesomeIcon />}
              color="inherit"
            >
              問題を生成する
            </Button>
            <Button
              variant="contained"
              size="small"
              color="error"
              startIcon={<DeleteIcon />}
            >
              削除
            </Button>
          </CardActions>
        </Card>
      </CardContainer>
    </Box>
  );
};

const CardContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  '& > .MuiCard-root': {
    width: '1000px',
    padding: theme.spacing(3),
    '& > .MuiCardContent-root': {
      maxWidth: '780px',

      '& > p': {
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
      },
    },
  },
}));

export default MemoPage;
