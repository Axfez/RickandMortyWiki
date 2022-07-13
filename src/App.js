import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { Home, Details } from './components/Pages/'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/details" exact element={<Details />}></Route>
      </Routes>
    </Router>
  )
}

export default App
