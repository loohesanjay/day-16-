import { Link, Outlet } from 'react-router-dom';

export const About = () => (
  <div style={{ padding: '20px', backgroundColor: '#CCF2B2', borderRadius: '10px' }}>
    <h1>About Us</h1>
    <p>We are a cool team!</p>
    <nav>
      <Link to="team">Our Team</Link> | <Link to="history">Our History</Link>
    </nav>
    <hr />

    <Outlet />
  </div>
);

export const Team = () => <h3>Meet our Forest Green Team!</h3>;
export const History = () => <h3>We started in 2025.</h3>;