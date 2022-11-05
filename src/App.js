import React  from "react"
import './App.css';

import { useState } from "react";







function App() {

const [userName, setUsername] = useState('');
const [password, setPassword] = useState('') ;

function Handleinput (e){
  e.preventDefault();
  alert(`Username: ${userName}  Password : ${password}`)
}

  return <form onSubmit={Handleinput} >
    
  <label htmlFor="Username">Email</label><br />
  <input type="text" name="username" id="username" placeholder="Email" onChange={e => setUsername(e.target.value)} />
  <br />
  <label htmlFor="Password">Password</label><br />
  <input  type="password"  name="password" id="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}/> <br></br>
  <button className="btn">Sumbit</button>
</form>

    
  
}

export default App;
