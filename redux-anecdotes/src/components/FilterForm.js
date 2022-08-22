// import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const FilterForm = () => {
  //   const [filter, setFilter] = useState('')
  const dispatch = useDispatch()

  const handleFilterChange = (event) => {
    dispatch(setFilter({ filter: event.target.value }))
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

export default FilterForm
