import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    message: '',
    timeoutID: 0,
  },
  reducers: {
    setNotification: (state, action) => {
      state.message = action.payload.message
    },
    setTimeoutID: (state, action) => {
      // Clear the previous timeout if there is one
      clearTimeout(state.timeoutID)
      state.timeoutID = action.payload.timeoutID
    },
  },
})

export const setNewNotification = (message, time) => {
  // Convert the time from seconds to milliseconds
  const timeInMilliseconds = time * 1000

  let timeoutID = 0

  function setTimeoutMessage(dispatch) {
    // Set the timeoutID variable to the ID of the timeout
    // And clear the message and timeoutID variables after the timeout
    timeoutID = setTimeout(() => {
      dispatch(setNotification({ message: '' }))
      dispatch(setTimeoutID({ timeoutID: 0 }))
    }, timeInMilliseconds)
    // This dispatch is called after the timeout has been set
    // It is used to set the timeoutID state variable to allow for clearing the timeout
    dispatch(setTimeoutID({ timeoutID: timeoutID }))
  }

  return async (dispatch) => {
    await dispatch(setNotification({ message }))
    // Call the setTimeoutMessage function
    setTimeoutMessage(dispatch)
  }
}

export const { setNotification, setTimeoutID } = notificationSlice.actions
export default notificationSlice.reducer
