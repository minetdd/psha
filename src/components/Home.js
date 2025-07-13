import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import 'swiper/css';

const Home = () => (
  <Container maxWidth="md" sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography variant="h3" gutterBottom>
      Welcome to Preferred Services Heating & Air
    </Typography>
    <Typography variant="h6" color="text.secondary" gutterBottom>
      Your comfort is our priority. Professional heating and air services for your home or business.
    </Typography>
  </Container>
);

export default Home;
