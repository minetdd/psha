import React from 'react';
import {
  Typography,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Rating
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box py={isMobile ? 3 : 8} bgcolor="#f9f9f9">
      <Container maxWidth="md" sx={{ px: isMobile ? 1 : 3 }}>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          component="h1"
          gutterBottom
          sx={{ textAlign: isMobile ? 'center' : 'left', fontWeight: 600 }}
        >
          About Preferred Service Heating, Cooling & Air
        </Typography>

        <Typography
          variant="body1"
          paragraph
          align={isMobile ? 'center' : 'left'}
          sx={{ fontSize: isMobile ? '1rem' : '1.1rem' }}
        >
          Preferred Service Heating, Cooling & Air is a small, family-owned HVAC company
          based in South Jordan, Utah—operating since 2003. We specialize in providing dependable heating,
          cooling, and air purification services for both residential and commercial clients.
        </Typography>

        <Typography
          variant="body1"
          paragraph
          align={isMobile ? 'center' : 'left'}
          sx={{ fontSize: isMobile ? '1rem' : '1.1rem' }}
        >
          Preferred Service Heating, Cooling & Air Purity Inc. stands out in the South Jordan area as a trusted, 
          honest, and experienced local HVAC contractor. Their strong customer satisfaction stems from transparent 
          pricing, emergency services, and a no-pressure approach.
        </Typography>

        <Divider sx={{ my: isMobile ? 2 : 4 }} />
        <Box display="flex" flexDirection="column" alignItems="center" sx={{ mb: isMobile ? 2 : 4 }}>
          <Typography variant={isMobile ? 'subtitle1' : 'h6'} gutterBottom>
            🕒 Hours of Operation
          </Typography>
          <List sx={{ width: '100%', maxWidth: 800 }}>
            <ListItem>
              <ListItemText
                primary={<span><strong>Monday – Friday:</strong> 8:00 AM – 5:00 PM</span>}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<span><strong>Emergency Service:</strong> Available 24 hours a day</span>}
              />
            </ListItem>
          </List>
        </Box>
        <Divider sx={{ my: isMobile ? 2 : 4 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant={isMobile ? 'subtitle1' : 'h6'} gutterBottom>
            📍 Location & Credentials
          </Typography>
          <List sx={{ width: '100%', maxWidth: 800 }}>
            <ListItem>
              <ListItemText
                primary={<span><strong>Address:</strong> 11664 S Jordan Farms Rd, South Jordan, UT 84095</span>}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<span><strong>Founder/Owner:</strong> Steve Peterson</span>}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<span><strong>Experience:</strong> Over 21 years serving both residential and commercial clients</span>}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<span><strong>Licensing:</strong> Holds Utah HVAC Qualifier license (#5378066‑5501)</span>}
              />
            </ListItem>
          </List>
        </Box>
        <Divider sx={{ my: isMobile ? 2 : 4 }} />
        <Box sx={{ my: isMobile ? 2 : 4 }}>
          <Typography variant={isMobile ? 'subtitle1' : 'h6'} gutterBottom>
            Read our customer reviews on:
          </Typography>
          <Box
            sx={{
              width: '100%',
              maxWidth: 600,
              mx: 'auto',
              borderRadius: 2,
              boxShadow: 2,
              background: '#fff',
              p: isMobile ? 1 : 2,
              textAlign: 'center',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <a
                href="https://share.google/nVSXrytTMLnavENPo"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#4285F4', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8 }}
              >
                Google Reviews
                <Rating value={5.0} precision={0.1} readOnly size="small" sx={{ ml: 1 }} />
                <span style={{ fontSize: 12, color: '#888' }}>(5/5)</span>
              </a>
              <a
                href="https://www.homeadvisor.com/rated.PreferredServiceHeating.14625265.html?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#F6830F', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8 }}
              >
                Home Advisor
                <Rating value={4.8} precision={0.1} readOnly size="small" sx={{ ml: 1 }} />
                <span style={{ fontSize: 12, color: '#888' }}>(~4.8/5)</span>
              </a>
              <a
                href="https://www.yellowpages.com/south-jordan-ut/mip/preferred-service-heating-cooling-19376943"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#FFD400', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8 }}
              >
                Yellow Pages
              </a>
              <a
                href="https://www.angi.com/companylist/us/ut/south-jordan/preferred-service-inc-reviews-3646170.htm"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#1A7B60', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8 }}
              >
                Angi
                <Rating value={4.8} precision={0.1} readOnly size="small" sx={{ ml: 1 }} />
                <span style={{ fontSize: 12, color: '#888' }}>(4.8/5)</span>
              </a>
              <a
                href="https://www.facebook.com/p/Preferred-Service-Heating-cooling-and-caring-100066845790428/?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#1877F3', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8 }}
              >
                Facebook
              </a>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: isMobile ? 2 : 4 }} />
      </Container>
    </Box>
  );
};

export default About;