import React from 'react'
import { Link } from 'react-router-dom'
  import './User.css'
import Button from 'react-bootstrap/esm/Button'

const User = () => {
  return (
    <div className='home'>
      <div className='homebody'>
      <h1 className='head'>REGISTER</h1>
       <div className='btn'> 
       <button><Link to='/register' className='reg'>Singup</Link></button><br/><br/>
       <button> <Link to='/login' className='reg'>Login</Link></button></div>
</div>




    </div>
  )
}

export default User