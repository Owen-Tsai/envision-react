import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserInfo } from '@/types/user'

type InitialState = {
  userInfo: UserInfo | null
  token: string | null
}

const initialState: InitialState = {
  userInfo: null,
  token: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<Partial<UserInfo>>) => {
      state.userInfo = {
        ...state.userInfo,
        ...action.payload,
      }
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
  },
})

export const { setUserInfo, setToken } = userSlice.actions

export default userSlice.reducer
