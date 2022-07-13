import './App.css'
import { useState, useEffect } from 'react'
import { Cardsload, ResponsiveDrawer, Footpagination } from './components'
import { useGetCharacterMutation } from './components/Api'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

function App() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [page, setPage] = useState(1)
  // const [numberOfPages, setnumberOfPages] = useState()

  useEffect(() => {
    getCharactersData()
  }, [query, status, gender, page])

  const [getCharacter, { data }] = useGetCharacterMutation()

  const getCharactersData = async () => {
    getCharacter({ query, status, gender, page })
  }


  return (
    <div>
      <ResponsiveDrawer
        setQuery={setQuery}
        setStatus={setStatus}
        setGender={setGender}
        status={status}
        gender={gender}
      />
      <Cardsload data={data} />
      <Footpagination data={data} setPage={setPage} />
    </div>
  )
}

export default App
