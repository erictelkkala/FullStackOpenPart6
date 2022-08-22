import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    message: '',
  },
  reducers: {
    setNotification: (state, action) => {
      state.message = action.payload.message
    },
    removeNotification: (state) => {
      state.message = ''
    },
  },
})

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer
