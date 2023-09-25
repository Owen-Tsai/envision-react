type UserInfo = {
  name: string
  avatar?: string
}

export type ITaskEntry = {
  title: string
  id: string
  initiator: UserInfo
  assignee: UserInfo
  priority: number
  type: string
  status: number
  deadline?: string
  tags?: string[]
}
