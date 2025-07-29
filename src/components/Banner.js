import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import hvacLogo from '../assets/psha.png';
import { Link as RouterLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Service', to: '/service' },
  { label: 'About', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

const Banner = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [tempError, setTempError] = useState(null);
  const [city, setCity] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isLandscape = useMediaQuery('(orientation: landscape)');

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // TODO: Need to replace with WEATHER_API_KEY from .env file eventually. use this prompt. How would I update my application to be serverless?
        fetch(
          `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${latitude},${longitude}&aqi=no`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.current && typeof data.current.temp_f === 'number') {
              setTemperature(Math.round(data.current.temp_f));
              setCity(data.location?.name || '');
            } else {
              setTempError('Weather unavailable');
            }
          })
          .catch(() => setTempError('Weather unavailable'));
      },
      () => setTempError('Location denied')
    );
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton
            component={RouterLink}
            to={item.to}
            onClick={() => setDrawerOpen(false)}
            >
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static" elevation={0} sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap', // allow wrapping on small/rotated screens
        }}
      >
        <img
          src={hvacLogo}
          alt="HVAC Logo"
          style={{
            width: isMobile ? 40 : 70,
            height: isMobile ? 40 : 70,
            marginRight: 12,
            marginBottom: 0,
            flexShrink: 0,
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Montserrat", "Roboto", "Helvetica Neue", Arial, sans-serif',
            fontWeight: 700,
            fontSize: { xs: 'clamp(0.85rem, 4vw, 1.2rem)', sm: '1.2rem', md: '2.125rem' },
            textAlign: isMobile ? 'center' : 'left',
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 0.2,
            width: isMobile ? 'auto' : 'auto',
            minWidth: 0,
            overflow: 'hidden',
            // Remove whiteSpace: 'nowrap' to allow wrapping
          }}
        >
          <span style={{ color: '#d32f2f' }}>Preferred</span>
          <span
            style={{
              marginLeft: 4,
              marginRight: 4,
              background: 'linear-gradient(90deg, #d32f2f 0%, #1976d2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 600,
            }}
          >
            Services
          </span>
          <span style={{ color: '#1976d2' }}>
            Heating&nbsp;&amp; Air
          </span>
        </Typography>
        {((!isMobile && temperature !== null) || (isMobile && isLandscape && temperature !== null)) && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: 16 }}>
            <Typography
              sx={{
                fontWeight: 500,
                color: temperature < 50 ? '#1976d2' : '#d32f2f',
                lineHeight: 1,
              }}
            >
              {temperature}°F
            </Typography>
            {city && (
              <Typography sx={{ fontSize: '0.8rem', color: '#555', fontWeight: 400, lineHeight: 1 }}>
                {city}
              </Typography>
            )}
          </div>
        )}
        {tempError && (
          <Typography sx={{ color: '#d32f2f', fontSize: '0.9rem' }}>
            {tempError}
          </Typography>
        )}
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 1 }}
            >
              <MenuIcon sx={{ color: '#000' }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
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
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Banner;
