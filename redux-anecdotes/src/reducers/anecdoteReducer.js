import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const initialState = []

console.log('initialState: ', initialState)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    vote: (state, action) => {
      console.log('Slice.vote payload:', action.payload)
      const anecdote = state.find((a) => a.id === action.payload)
      anecdote.votes++
    },
    createAnecdote: (state, action) => {
      // console.log('Slice.create payload:', action.payload)
      state.push(action.payload)
    },
    setAnecdotes: (state, action) => {
      // console.log('Slice.setAnecdotes payload:', action.payload)
      state.push(...action.payload)
    }
  },
})

export const { vote, createAnecdote, setAnecdotes } = anecdoteSlice.actions

// Async action creators
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export default anecdoteSlice.reducer
