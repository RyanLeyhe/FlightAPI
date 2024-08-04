import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ShowData from './pages/ShowData'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/data/showdatabyid/:id' element={<ShowData />} />
    </Routes>
  )
}

export default App