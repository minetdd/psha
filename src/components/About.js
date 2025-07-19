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

const About = () => {
  return (
    <Box py={8} bgcolor="#f9f9f9">
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          About Preferred Service Heating, Cooling & Air
        </Typography>

        <Typography variant="body1" paragraph align="left">
          Preferred Service Heating, Cooling & Air is a small, family-owned HVAC company
          based in South Jordan, Utah—operating since 2003. We specialize in providing dependable heating,
          cooling, and air purification services for both residential and commercial clients.
        </Typography>

        <Typography variant="body1" paragraph align="left">
          Preferred Service Heating, Cooling & Air Purity Inc. stands out in the South Jordan area as a trusted, 
          honest, and experienced local HVAC contractor. Their strong customer satisfaction stems from transparent 
          pricing, emergency services, and a no-pressure approach.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6" gutterBottom>
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
        <Divider sx={{ my: 4 }} />
        <Box sx={{ my: 4 }}>
          <Typography variant="h6" gutterBottom>
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
              p: 2,
              textAlign: 'center',
            }}
            >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
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
      </Container>
    </Box>
  );
};

export default About;