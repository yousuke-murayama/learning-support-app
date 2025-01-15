import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => <Navigate from={Route.fullPath} to="/home" replace />,
});
