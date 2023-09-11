import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Theme = 'light' | 'dark' | null

type InitialState = {
  value: Theme
}

const initialState: () => InitialState = () => {
  let themeStored = window.localStorage.getItem('envision-theme')
  if (themeStored === null) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      themeStored = 'dark'
    } else {
      themeStored = 'light'
    }
  }
  return {
    value: themeStored as Theme,
  }
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      if (action.payload === null) {
        window.localStorage.removeItem('envision-theme')
      } else {
        window.localStorage.setItem('envision-theme', action.payload)
      }
      state.value = action.payload
    },
  },
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
