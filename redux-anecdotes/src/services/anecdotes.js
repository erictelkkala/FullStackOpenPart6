import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log('getAll: ', response.data)
  return response.data
}

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  }
}
const createNewAnecdote = async (content) => {
  const anecdote = asObject(content)
  console.log('createNewAnecdote: ', anecdote)
  const response = await axios.post(baseUrl, anecdote)
  console.log('create: ', response)
  return response.data
}

const voteForAnecdote = async (anecdote) => {
  const id = anecdote.id
  // Increment the vote count
  const anecdoteToVote = {
    ...anecdote,
    votes: anecdote.votes + 1,
  }
  const response = await axios.put(`${baseUrl}/${id}`, anecdoteToVote)
  console.log('voteForAnecdote: ', response)
  return response.data
}

export default { getAll, createNewAnecdote, voteForAnecdote }
