import { createFileRoute } from '@tanstack/react-router';
import MemoPage from '../../../../pages/memos/MemoPage';

export const Route = createFileRoute('/main/memos/$memoId/')({
  component: MemoPage,
});
