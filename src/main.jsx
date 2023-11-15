import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Contact from './Pages/contact.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Contact' element={<Contact />} /> 
  </Routes>
  </BrowserRouter>
)
