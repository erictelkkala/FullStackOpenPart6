import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  }
}

const initialState = anecdotesAtStart.map(asObject)
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
      state.push(asObject(action.payload))
    },
    setAnecdotes: (state, action) => {
      // console.log('Slice.setAnecdotes payload:', action.payload)
      state.push(...action.payload)
    }
  },
})

export const { vote, createAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
