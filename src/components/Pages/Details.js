import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useGetIdMutation } from '../../components/Api'
import { logo } from '../../assets'

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
    <nav className="navbar fixed-top navbar-light bg-light">
      <Link to="/">
        <button onClick={() => useGetId()}>Back</button>
      </Link>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={logo} className="img-fluid" />
          </div>
        </div>
      </div>
    </nav>
  )
}
