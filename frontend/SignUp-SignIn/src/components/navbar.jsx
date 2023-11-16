import { Link } from 'react-router-dom'

export default function navbar() {

  const style = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    background: '#333', // Add your preferred background color
    padding: '10px',
    color: '#fff', // Add your preferred text color
    zIndex: 1000,  // Add a higher z-index to ensure it appears above other
    display: 'flex',
    justifyContent: 'space-around' 
     
  };

  return (
    <nav style={style}>
      <Link to='/'>Home</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
    </nav>
  )
}

