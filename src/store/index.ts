import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import themeReducer from './theme'

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
