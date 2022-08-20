const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

// Action creator for voting
export const vote = (id) => {
  return {
    type: 'VOTE',
    id
  }
}

// Action creator for new anecdotes
export const createAnecdote = (content) => {
  return {
    type: 'ADD_ANECDOTE',
    content
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  switch (action.type) {
    case 'VOTE':
      const id = action.id
      // Find the anecdote to update
      const anecdote = state.find(a => a.id === id)
      // Copy the anecdote and update the votes
      const updatedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
      }
      // Find the index of the anecdote to update and then replace it with the updated anecdote
      const anecdotes = state.map(a => a.id === id ? updatedAnecdote : a)
      return anecdotes
    case 'ADD_ANECDOTE':
      // Format the new anecdote to the right object format
      const newAnecdote = asObject(action.content)
      // Add the new anecdote to the list of anecdotes
      return [...state, newAnecdote]
    default:
      return state
  }


}

export default reducer