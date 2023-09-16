const key = 'envision:token'

export const getToken = () => localStorage.getItem(key)

export const isAuthed = () => !!getToken()

export const setToken = (val: string) => {
  localStorage.setItem(key, val)
}
