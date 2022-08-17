import { Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../Actiion/User'
import "./Login.css"


const Login= () => {

  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  
  const Loginhandelar = (e) => {
    e.preventDefault()
    console.log(email, password)

    dispatch(loginUser(email, password))
    
  }

  return (
    <div className='login' >

      <form className='loginForm ' onSubmit={Loginhandelar} >
        <Typography variant="h5" >
          Tolindo  app
        </Typography>

        <input type="text" placeholder="Email" required value={email}
         onChange={(e)=> setemail(e.target.value)}  />
        <input type="password" placeholder="Password" required value={password}
        onChange={(e)=>setpassword(e.target.value)} />


        <Link to="/forget/password" >
          <Typography variant="body2" >
            Forget Password
          </Typography>
        </Link>

        <Button type='submit'>Login</Button>



      </form>


    </div>
  )
}

export default Login