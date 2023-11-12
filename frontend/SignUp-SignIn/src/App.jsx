import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Register from './pages/Register';
import Login from './pages/Login';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;


function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
