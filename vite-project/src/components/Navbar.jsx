import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const navStyle = ({ isActive }) => ({
    textDecoration: 'none',
    margin: '0 15px',
    color: isActive ? '#18A13A' : 'black',
    fontWeight: isActive ? 'bold' : 'normal',
    borderBottom: isActive ? '2px solid #F6E63B' : 'none'
  });

  return (
    <nav style={{ backgroundColor: '#CCF2B2', padding: '1rem', marginBottom: '20px' }}>
      <NavLink style={navStyle} to="/">Home</NavLink>
      <NavLink style={navStyle} to="/about">About</NavLink>
      <NavLink style={navStyle} to="/secret">Secret Page</NavLink>
      
     
      <button 
        onClick={() => navigate('/')}
        style={{ backgroundColor: '#F6E63B', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
      >
        Quick Home
      </button>
    </nav>
  );
};

export default Navbar;