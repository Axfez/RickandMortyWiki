import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useGetIdMutation } from '../../components/Api'

export const Details = () => {
  const location = useLocation()
  const { id } = location.state

  useEffect(() => {
    useGetId()
  }, [id])

  const [getId, { data }] = useGetIdMutation()

  const useGetId = async () => {
    getId({ id })
  }

    return (
        <div>
        </div>
    )
}
