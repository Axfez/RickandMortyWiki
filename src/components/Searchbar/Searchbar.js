import { useState } from 'react'
import { useDispatch } from 'react-redux'

export const Searchbar = () => {
  const [search, setSearch] = useState('')
  const [pageNumber, setPageNumber] = useState()
  const dispatch = useDispatch()
  return (
    <div>
      <input
        onChange={(e) => {
          setPageNumber(1)
          setSearch(e.target.value)
        }}
        placeholder="Search for Characters"
        type="text"
      />
      <button onClick={() => dispatch(setSearch(search))}>Search</button>
    </div>
  )
}
