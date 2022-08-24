import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const FilterForm = (props) => {
  const handleFilterChange = (event) => {
    props.setFilter({ filter: event.target.value })
  }

  const style = {
    paddingBottom: 10,
  }

  return (
    <div style={style}>
      filter shown with
      <input onChange={handleFilterChange} />
    </div>
  )
}

const ConnectedFilterForm = connect(null, { setFilter })(FilterForm)

export default ConnectedFilterForm
