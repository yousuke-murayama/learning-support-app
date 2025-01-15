import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/main/')({
  component: () => <Navigate from={Route.fullPath} to="memos" replace />,
});
