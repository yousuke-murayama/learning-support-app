import { createFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createFileRoute('/main/memos/$memoId')({
  notFoundComponent: () => <Navigate from={Route.fullPath} to="." replace />,
})
