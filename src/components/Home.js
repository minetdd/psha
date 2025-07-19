import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import 'swiper/css';

const PHONE_NUMBER = '(801) 577-2442';

const Home = () => (
  <Container maxWidth="md" sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography variant="h3" gutterBottom>
      Welcome to Preferred Services Heating & Air
    </Typography>
    <Typography variant="h6" color="text.secondary" gutterBottom>
      Your comfort is our priority. Professional heating and air services for your home or business.
    </Typography>
    <Box sx={{ mt: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 2, boxShadow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="subtitle1" color="text.primary">
        Call Us Today:
      </Typography>
      <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', mt: 1 }}>
        {PHONE_NUMBER}
      </Typography>
    </Box>
  </Container>
);

export default Home;
