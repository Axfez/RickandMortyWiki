import './App.css'
import { useState, useEffect } from 'react'
import {
  Cardsload,
  ResponsiveDrawer,
  Footpagination,
  Searchbar,
} from './components'
import Grid from '@mui/material/Grid'


function App() {

  useEffect(() => {
  }, [])



  return (
    <div>
      <ResponsiveDrawer />
        <Cardsload />
        <Footpagination />
    </div>
  )
}

export default App
