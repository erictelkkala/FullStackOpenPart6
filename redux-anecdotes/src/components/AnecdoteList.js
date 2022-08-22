import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import {
  setNotification,
  removeNotification,
} from '../reducers/notificationReducer'
// import { getFilter } from '../reducers/filterReducer'

const AnecdoteList = () => {
  // The state is immutable after refactoring into Redux Toolkit, stack trace didn't help at all
  // => https://stackoverflow.com/questions/49278578/reactjs-sorting-typeerror-0-is-read-only
  const anecdotes = useSelector((state) => [...state.anecdotes])
  console.log('AnecdoteList: ', anecdotes)
  // Get the filter from the state
  const filter = useSelector((state) => state.filter.filter)

  const dispatch = useDispatch()

  const handleVote = (id, content) => {
    console.log('Vote ID:', id)
    // Dispatch the vote action
    dispatch(vote(id))

    // Dispatch the action to set the notification
    dispatch(
      setNotification({
        message: `You voted for "${content}"`,
      })
    )
    // Dispatch the action to remove the notification
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  // Sort the anecdotes by votes
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)

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
            <button onClick={() => handleVote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
