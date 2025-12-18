import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { About, Team, History } from './pages/About';
import { NotFound } from './pages/NotFound';

function App() {
  const isLoggedIn = false;

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>

          <Route path="/" element={<Home />} />


          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} />
            <Route path="history" element={<History />} />
          </Route>


          <Route path="/secret" element={
            isLoggedIn ? <h1>The Secret Vault 🔓</h1> : <h1 style={{ color: '#18A13A' }}>Access Denied! Log in first.</h1>
          } />


          <Route path="/old-home" element={<Navigate to="/" />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;