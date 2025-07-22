import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Container from '@mui/material/Container';
import Slider from './components/Slider';
import routes from './routes';
import './styles/App.css';
import Footer from './components/Footer'; // Import the Footer component
import Typography from '@mui/material/Typography'; // Import Typography
import version from './version'; // Adjust path if needed

function App() {
  return (
    <Router>
      <Container
        maxWidth="lg"
        className="App"
        sx={{
          minHeight: '100vh',      // Always fill the viewport vertically
          width: '100%',           // Take full width up to maxWidth
          margin: 'auto',          // Center the container
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          p: 0,
          bgcolor: '#fff',
        }}
      >
        <Banner />
        <Slider />
        <Routes>
          {routes.map(({ path, element }, idx) => (
            <Route key={path || idx} path={path} element={element} />
          ))}
        </Routes>
        <Footer>
          <Typography variant="caption" color="text.secondary">
            Version {version}
          </Typography>
        </Footer>
      </Container>
    </Router>
  );
}

export default App;
