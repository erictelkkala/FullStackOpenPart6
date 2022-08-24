import { useSelector, useDispatch } from 'react-redux'
import { setNewNotification } from '../reducers/notificationReducer'
import { voteForAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  // The state is immutable after refactoring into Redux Toolkit, stack trace didn't help at all
  // => https://stackoverflow.com/questions/49278578/reactjs-sorting-typeerror-0-is-read-only
  const anecdotes = useSelector((state) => [...state.anecdotes])
  console.log('AnecdoteList: ', anecdotes)
  // Get the filter from the state
  const filter = useSelector((state) => state.filter.filter)

  const dispatch = useDispatch()

  const handleVote = (anecdote) => {
    console.log('Vote ID:', anecdote.id)
    // Dispatch the vote action
    dispatch(voteForAnecdote(anecdote))

    // Dispatch the action to set the notification
    dispatch(setNewNotification(`You voted for "${anecdote.content}"`, 10))
  }

  // Sort the anecdotes by votes
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)
  console.log('sortedAnecdotes: ', sortedAnecdotes)

  // Filter the anecdotes by the filter
  const filteredAnecdotes = sortedAnecdotes.filter((anecdote) => {
    console.log('filter:', filter)
    if (filter.filter === '' || filter.filter === null) {
      return anecdote
    }
    return anecdote.content.toLowerCase().includes(filter.toLowerCase())
  })
  console.log('filteredAnecdotes:', filteredAnecdotes)

  return (
    <div>
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
