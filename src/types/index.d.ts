export * from './route'
export * from './user'
export * from './file'

export type MockParams = {
  url: string
  type: 'GET' | 'POST' | 'PATCH' | 'DELETE'
  body: string
}

export type HTTPResponse = {
  code?: number
  msg?: string
  data: Record<string, unknown>
  success: boolean
}
