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
  },
})

export const setNewNotification = (message, time) => {
  // Convert the time from seconds to milliseconds
  const timeInMilliseconds = time * 1000

  return async (dispatch) => {
    await dispatch(setNotification({ message }))
    setTimeout(() => {
      dispatch(setNotification({ message: '' }))
    }, timeInMilliseconds)
  }
}

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer
