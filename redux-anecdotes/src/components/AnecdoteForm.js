import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNewNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const addNewAnecdote = async (event) => {
    event.preventDefault()
    // Get the anecdote content from the input field
    const content = event.target.anecdote.value
    console.log('addNewAnecdote', content)

    // Clear the input field
    event.target.anecdote.value = ''

    // Dispatch the action to create a new anecdote
    props.createAnecdote(content)

    // Dispatch the action to set the notification
    props.setNewNotification(`You added "${content}"`, 10)
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

// Map the dispatch functions to props
const mapDispatchToProps = {
  createAnecdote,
  setNewNotification,
}

// Only connect the dispatch function to the props, since the state is null
const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm
