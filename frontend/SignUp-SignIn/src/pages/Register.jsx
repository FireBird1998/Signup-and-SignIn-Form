import { useState } from "react";
import axios from "axios";
import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })
  
  
  const registerUser = async(event) => {
    event.preventDefault();
    const { name, email, password } = data;
    try {
      const res = await axios.post('/register', {name, email, password}) 
      console.log(res);
      
      setData({})
      toast.success('User Registered Successfully');
      navigate('/login');
      

    } catch (error) {
      console.log(error);
      const {data} = error.response;
      toast.error(data.error);
    }
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  }
  
  return (
    <div>
      <form style={formStyle} onSubmit={registerUser}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={data.name} onChange={(e) => {
          setData({ ...data, name: e.target.value });

        }}  />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={data.email} onChange={(e) => {
          setData({ ...data, email: e.target.value });

        }} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={data.password} onChange={(e) => {
          setData({ ...data, password: e.target.value });

        }} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
