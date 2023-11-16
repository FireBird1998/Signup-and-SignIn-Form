import { useState } from "react";
import axios from "axios";
import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  
  
  const loginUser = async(e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post('/login', {email, password});
      console.log(data);
      setData({});
      toast.success('User Logged In Successfully');
      navigate('/');

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
      <form style={formStyle} onSubmit={loginUser}>      
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
