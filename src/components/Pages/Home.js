import React, { useEffect, useState } from 'react'
import { Cardsload, Footpagination, ResponsiveDrawer } from '../../components'
import { useGetCharacterMutation } from '../../components/Api'

export const Home = () => {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [page, setPage] = useState(1)

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
