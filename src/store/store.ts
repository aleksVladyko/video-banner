import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice'

const store = configureStore({
  reducer: {
    formSubmit: appSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
