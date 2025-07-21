import React from 'react';
import Box from '@mui/material/Box';
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

const Slider = () => (
  <Box
    sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      my: { xs: 2, md: 4 },
      pt: 0,
    }}
  >
    <Swiper
      style={{ width: '100%' }}
      spaceBetween={16}
      slidesPerView={1}
      loop
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: { xs: 180, sm: 220, md: 300 },
              bgcolor: '#f5f5f5',
              width: '100%',
            }}
          >
            <img
              src={src}
              alt={`HVAC ${idx + 1}`}
              style={{
                maxHeight: '100%',
                width: '100%',
                objectFit: 'cover',
                borderRadius: 8,
              }}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
);

export default Slider;
