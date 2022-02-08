import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const submitData = async (e) =>{
      const data = { email, password }
      console.log('data', data)
      const res = await axios.post('http://127.0.0.1:8000/api/token/', data).then(val =>{
        console.log('val', val)
      })
      console.log('response', res)
      e.preventDefault()
    }
  
    return (
      <div>
        <form>
          Email<br/>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input><br/>
          Password<br/>
          <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}></input><br/><br/>
          <Button type="submit" onClick={() => submitData()}>LOGIN</Button>
        </form>
        
      </div>
    );
}

export default Login;
