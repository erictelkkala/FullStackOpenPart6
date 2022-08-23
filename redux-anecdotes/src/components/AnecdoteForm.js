import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {
  setNotification,
  removeNotification,
} from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addNewAnecdote = (event) => {
    event.preventDefault()
    // Get the anecdote content from the input field
    const content = event.target.anecdote.value
    console.log('addNewAnecdote', content)

    anecdoteService.create(content).then((newAnecdote) => {
      // Dispatch the action to add the anecdote
      dispatch(createAnecdote(newAnecdote))
    })

    // Clear the input field
    event.target.anecdote.value = ''

    // Dispatch the action to set the notification
    dispatch(setNotification({ message: `You added "${content}"` }))
    // Dispatch the action to remove the notification
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNewAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
