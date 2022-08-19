import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const handleVote = (id) => {
    console.log('vote', id)
    dispatch({
      type: 'VOTE',
      id
    })
  }

  const addNewAnecdote = (event) => {
    event.preventDefault()

    // Get the anecdote content from the input field
    const content = event.target.anecdote.value
    console.log('addNewAnecdote', content)
    // Dispatch the action to add the anecdote
    dispatch({
      type: 'ADD_ANECDOTE',
      content
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addNewAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App