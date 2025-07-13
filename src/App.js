import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Container from '@mui/material/Container';
import Home from './components/Home';
import ComingSoon from './components/ComingSoon';
import Slider from './components/Slider';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Container maxWidth={false} className="App" sx={{ width: '90vw', minHeight: '90vh', margin: 'auto', flexGrow: 1, display: 'flex', flexDirection: 'column', p: 0, bgcolor: '#fff' }}>
        <Banner />
        <Slider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<ComingSoon title="Service" />} />
          <Route path="/bio" element={<ComingSoon title="Bio" />} />
          <Route path="/about" element={<ComingSoon title="About" />} />
          <Route path="/contact" element={<ComingSoon title="Contact Us" />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
