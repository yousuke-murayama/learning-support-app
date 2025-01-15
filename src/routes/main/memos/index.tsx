import { createFileRoute } from '@tanstack/react-router';
import MemosPage from '../../../pages/memos/MemosPage';

export const Route = createFileRoute('/main/memos/')({
  component: MemosPage,
});
