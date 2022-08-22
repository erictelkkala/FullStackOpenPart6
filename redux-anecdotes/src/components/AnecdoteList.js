import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import {
  setNotification,
  removeNotification,
} from '../reducers/notificationReducer'

const AnecdoteList = () => {
  // The state is immutable after refactoring into Redux Toolkit, stack trace didn't help at all
  // => https://stackoverflow.com/questions/49278578/reactjs-sorting-typeerror-0-is-read-only
  const anecdotes = useSelector((state) => [...state.anecdotes])
  console.log('AnecdoteList: ', anecdotes)

  // Sort the anecdotes by votes
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)
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

  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
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
