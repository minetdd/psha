import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import hvacLogo from '../assets/hvac-logo.svg';
import { Link as RouterLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Service', to: '/service' },
  { label: 'Bio', to: '/bio' },
  { label: 'About', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

const Banner = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <img src={hvacLogo} alt="HVAC Logo" style={{ width: 40, height: 40, marginRight: 16 }} />
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
            sx={{ textTransform: 'none' }}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
    </Toolbar>
  </AppBar>
);

export default Banner;
