import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  // The state is immutable after refactoring into Redux Toolkit, stack trace didn't help at all
  // => https://stackoverflow.com/questions/49278578/reactjs-sorting-typeerror-0-is-read-only
  const anecdotes = useSelector((state) => [...state])
  console.log('AnecdoteList: ', anecdotes)

  // Sort the anecdotes by votes
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)
  const dispatch = useDispatch()

  const handleVote = (id) => {
    console.log('Vote ID:', id)
    // Dispatch the vote action
    dispatch(vote(id))
  }

  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
