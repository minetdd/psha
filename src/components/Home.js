import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import 'swiper/css';
import Link from '@mui/material/Link';

const PHONE_NUMBER = process.env.REACT_APP_PHONE_NUMBER;
const PHONE_NUMBER_LINK = process.env.REACT_APP_PHONE_NUMBER_LINK;

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: isMobile ? 2 : 4,
        mb: isMobile ? 2 : 4,
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
        Welcome to Preferred Services Heating & Air
      </Typography>
      <Typography
        variant={isMobile ? 'body1' : 'h6'}
        color="text.secondary"
        gutterBottom
        sx={{ textAlign: 'center' }}
        >
        Your comfort is our priority. Professional heating and air services for your home or business.
      </Typography>
      <Box
        sx={{
          mt: 3,
          p: isMobile ? 1 : 2,
          bgcolor: '#f5f5f5',
          borderRadius: 2,
          boxShadow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: isMobile ? '100%' : 'auto',
        }}
        >
        <Typography variant="subtitle1" color="text.primary">
          Call Us Today:
        </Typography>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          color="primary"
          sx={{ fontWeight: 'bold', mt: 1 }}
          component={Link}
          href={PHONE_NUMBER_LINK}
          underline="hover"
        >
          {PHONE_NUMBER}
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
