import { createSlice } from '@reduxjs/toolkit'
import { SubmitForm } from '../types/types'

const initialState: SubmitForm = {
  successSubmit: false,
}

const appSlice = createSlice({
  name: 'formSubmit',
  initialState,
  reducers: {
    setSuccessSubmit: (state) => {
      state.successSubmit = true
    },
  },
})

export const { setSuccessSubmit } = appSlice.actions
export default appSlice.reducer
