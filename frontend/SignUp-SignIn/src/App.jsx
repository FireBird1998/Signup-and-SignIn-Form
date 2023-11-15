import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;


function App() {
  

  return (
    <>
      <Navbar/>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
