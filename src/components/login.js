

import React,{useState} from "react";
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../Coinbase.png'
import '../login.css';

export default function Login ({setToken}){

localStorage.clear()

const [username, setUsername] = useState();
const [password, setPassword] = useState();
 const [spinner, setSpinner] = useState();

  const handSubmit = async e => {
      e.preventDefault()
      console.log('here')

      console.log(username)
      console.log(password)

       setSpinner(true)

      if(username === 'testuser' && password === '12345'){
   

        setToken(username,password,'1212')
      }

  }


  return (

      <div id = 'loginpage'>

        <div id='backgreound'>

          <div id ='container'>
    <p id="name">WRESTER</p>
             
             <h3> Sign In to your Account</h3>
             <p id='deviceInfo'>Not your device?<br/> Use a private or incognito window to sign in.</p>

<div id='login'>

<TextField id="outlined-search" label="UserName"  onChange={e=> setUsername(e.target.value)} /> <br/>
<TextField   style={{marginTop:"10px"}}  onChange={e=> setPassword(e.target.value)}
    id="outlined-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
  />



</div>

<Button variant="contained" component="label" style={{marginTop:"10px"}} onClick={handSubmit}>
  Log In
  
</Button>

</div>
</div>



</div>
  )

}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

