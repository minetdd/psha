import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import hvacLogo from '../assets/psha.png';
import { Link as RouterLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Service', to: '/service' },
  { label: 'Bio', to: '/bio' },
  { label: 'About', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

const Banner = () => (
  <AppBar position="static" elevation={0} sx={{ background: 'transparent', boxShadow: 'none' }}>
    <Toolbar>
      <img src={hvacLogo} alt="HVAC Logo" style={{ width: 70, height: 70, marginRight: 12 }} />
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          marginRight: 2,
          background: 'linear-gradient(90deg, #1976d2, #d32f2f)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        }}
      >
        Preferred Services Heating & Air
      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Preferred Services Heating & Air
      </Typography>
      <Stack direction="row" spacing={2}>
        {navItems.map((item) => (
          <Button
            key={item.label}
            color="inherit"
            component={RouterLink}
            to={item.to}
            sx={{ textTransform: 'none', color: '#000' }}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
    </Toolbar>
  </AppBar>
);

export default Banner;
