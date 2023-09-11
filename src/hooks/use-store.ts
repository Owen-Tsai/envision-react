import {
  TypedUseSelectorHook,
  useDispatch as uD,
  useSelector as uS,
} from 'react-redux'
import type { RootState, AppDispatch } from '@/store'

export const useDispatch: () => AppDispatch = uD
export const useSelector: TypedUseSelectorHook<RootState> = uS
