// filepath: /Users/tonyduncombe/Development/psha/src/components/Footer.js
import React from 'react';
import Typography from '@mui/material/Typography';

const Footer = ({ children }) => (
  <footer style={{ marginTop: 'auto', padding: '1rem 0', textAlign: 'center' }}>
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
      Developed by{' '}
      <a
        href="https://sumoninjacreative.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'inherit', textDecoration: 'underline' }}
        >
        Sumo Ninja Creative
      </a>{' '}
      · {new Date().getFullYear()}
    </Typography>
    {children}
  </footer>
);

export default Footer;