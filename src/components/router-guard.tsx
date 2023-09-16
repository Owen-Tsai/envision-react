import { Navigate } from 'react-router-dom'
import { isAuthed } from '@/utils/auth'
import { RouteMeta } from '@/types'

export default function RouterGuard({
  meta,
  children,
}: {
  meta: RouteMeta | undefined
  children: JSX.Element
}) {
  console.log(meta)
  if (meta?.title) {
    document.title = meta.title
  }

  if (!!meta?.auth && !isAuthed()) {
    console.log(isAuthed())
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
