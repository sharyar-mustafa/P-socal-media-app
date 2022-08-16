import { Typography ,Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

function Login() { 
  return (
    <div className='login' >

      <form  className='loginForm' >
        <Typography variant="h5" >
          Tolindo  app
        </Typography>

        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required />


        <Link to="/forget/password" >
          <Typography variant="body2" >
            Forget Password
          </Typography>
        </Link>

        <Button  type='submit'>Login</Button>

      

      </form>


    </div>
  )
}

export default Login