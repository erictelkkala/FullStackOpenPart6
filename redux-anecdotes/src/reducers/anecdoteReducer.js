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
      const anecdote = state.find((a) => a.id === action.payload.id)
      anecdote.votes += 1
    },
    // These following 2 reducers might look like the same
    // But the latter one is used to append multiple anecdotes at once, hence the ...
    createNewAnecdote: (state, action) => {
      state.push(action.payload)
    },
    appendAnecdotes: (state, action) => {
      // console.log('Slice.setAnecdotes payload:', action.payload)
      state.push(...action.payload)
    },
  },
})

export const {
  vote,
  createNewAnecdote,
  appendAnecdotes: appendAnecdote,
} = anecdoteSlice.actions

// Async action creators
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(appendAnecdote(anecdotes))
  }
}

export const createAnecdote = (content) => {
  console.log('Action creator', content)
  return async (dispatch) => {
    const newNote = await anecdoteService.createNewAnecdote(content)
    dispatch(createNewAnecdote(newNote))
  }
}

export const voteForAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.voteForAnecdote(anecdote)
    dispatch(vote(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer
