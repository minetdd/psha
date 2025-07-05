import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import centralAir1 from '../assets/CentralAir.jpeg';
import centralAir2 from '../assets/CentralAir2.jpeg';
import centralAir3 from '../assets/CentralAir3.jpeg';
import filter from '../assets/filter.jpeg';
import mechanic from '../assets/mechanic-holding-manometers-close-up.jpg';

const images = [
  centralAir1,
  centralAir2,
  centralAir3,
  filter,
  mechanic,
];

const Home = () => (
  <Container maxWidth="md" sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography variant="h3" gutterBottom>
      Welcome to Preferred Services Heating & Air
    </Typography>
    <Typography variant="h6" color="text.secondary" gutterBottom>
      Your comfort is our priority. Professional heating and air services for your home or business.
    </Typography>
    <Box sx={{ width: '100%', maxWidth: 600, mt: 4 }}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300, bgcolor: '#f5f5f5' }}>
              <img src={src} alt={`HVAC ${idx + 1}`} style={{ maxHeight: 280, maxWidth: '100%', objectFit: 'cover', borderRadius: 8 }} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  </Container>
);

export default Home;
