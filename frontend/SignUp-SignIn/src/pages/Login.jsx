import { useState } from "react";
import axios from "axios";

export default function Login() {

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  
  
  const loginUser = (e) => {
    e.preventDefault();
    axios.get('/');

  }
  
  return (
    <div>
      <form className="form login" onSubmit={loginUser}>      
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={data.email} onChange={(e) => {
          setData({ ...data, email: e.target.value})
        }} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={data.password} onChange={(e) => {
          setData({ ...data, password: e.target.value})
        }} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
