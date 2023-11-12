import { useState } from "react";


export default function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  
  const registerUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const user = { name, email, password };
    console.log(user);
  }
  
  return (
    <div>
      <form className="form register" onSubmit={registerUser}>
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
