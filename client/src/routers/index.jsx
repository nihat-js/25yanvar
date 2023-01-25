import React from 'react'
import { BrowserRouter , Routes , Route  } from 'react-router-dom'

import Home from '../pages/Home/index'
import Crud from '../pages/Crud/index'



export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crud" element={<Crud />} />
      </Routes>
    </BrowserRouter>
  )
}
