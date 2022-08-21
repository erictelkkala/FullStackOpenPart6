import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    message: 'Initial notification',
  },
  reducers: {
    setNotification: (state, action) => {
      state.message = action.payload.message
    },
  },
})

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer
