
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pagestwo/Home'

import Register from './pagestwo/Register'
import Login from './pagestwo/Login'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import ViewForm from './pagesone/ViewForm'
import Update from './pagesone/Update'
import Navbar from './pagesone/User'
import User from './pagesone/User'

// axios.defaults.baseURL='http:localhost:7000'
// axios.defaults.withCredentials=true

const App = () => {
  return (
    <div>
      {/* <User/> */}
      {/* <Toaster position='top-center' toastOptions={{duration:2000}}/> */}
      <Routes>
        <Route path='/' element={<User/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/details' element={<ViewForm/>}/>
        <Route path='/update/:id' element={<Update/>}/>

      </Routes>
    </div>
  )
}

export default App