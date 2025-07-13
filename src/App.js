import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Container from '@mui/material/Container';
import Slider from './components/Slider';
import routes from './routes';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Container maxWidth={false} className="App" sx={{ width: '90vw', minHeight: '90vh', margin: 'auto', flexGrow: 1, display: 'flex', flexDirection: 'column', p: 0, bgcolor: '#fff' }}>
        <Banner />
        <Slider />
        <Routes>
          {routes.map(({ path, element }, idx) => (
            <Route key={path || idx} path={path} element={element} />
          ))}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
