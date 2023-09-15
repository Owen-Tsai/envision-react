export type UserRole = 'admin' | 'user' | string
export type UserInfo = {
  id?: number
  username?: string
  role?: UserRole
  introduction?: string
  avatar?: string
  email?: string
  job?: string
  dept?: string
}
