import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      console.log('setFilter: ', action.payload)
      state.filter = action.payload.filter
    },
    getFilter: (state) => {
      console.log('getFilter: ', state.filter)
      return state.filter
    },
  },
})

export const { setFilter, getFilter } = filterSlice.actions
export default filterSlice.reducer
