import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ComingSoon = ({ title }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: isMobile ? 4 : 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: isMobile ? 1 : 3,
      }}
    >
      <Typography
        variant={isMobile ? 'h5' : 'h3'}
        gutterBottom
        sx={{ textAlign: 'center', fontWeight: 600 }}
      >
        {title}
      </Typography>
      <Typography
        variant={isMobile ? 'body1' : 'h5'}
        color="text.secondary"
        sx={{ textAlign: 'center' }}
      >
        Coming Soon!
      </Typography>
    </Container>
  );
};

export default ComingSoon;
