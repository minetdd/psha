import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const ComingSoon = ({ title }) => (
  <Container maxWidth="md" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography variant="h3" gutterBottom>
      {title}
    </Typography>
    <Typography variant="h5" color="text.secondary">
      Coming Soon!
    </Typography>
  </Container>
);

export default ComingSoon;
