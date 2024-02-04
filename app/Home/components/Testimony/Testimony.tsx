'use client';
import { TestimonyIcon } from '@/icons';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { TESTIMONY } from './constant';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { SliderButton } from './_Testimony';

const Testimony = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: <SamplePrevArrow prev />,
    nextArrow: <SamplePrevArrow prev={false} />,
  };

  function SamplePrevArrow({ onClick, prev }: any) {
    return (
      <SliderButton
        onClick={onClick}
        sx={prev ? { left: '-10%' } : { right: '-10%' }}
        {...(prev
          ? { endIcon: <ArrowBackIos sx={{ width: '16px', color: 'white' }} /> }
          : { startIcon: <ArrowForwardIos sx={{ width: '16px', color: 'white' }} /> })}
      />
    );
  }

  return (
    <Box margin="auto" my={8} width="70%">
      <Box>
        <Box textAlign="center" mb={6}>
          <Typography variant="subtitle1" fontWeight="600">
            Apa Kata Customer Kami
          </Typography>
        </Box>
        <Box>
          {/* <Grid container spacing={2}> */}
          <Slider {...settings}>
            {TESTIMONY.map((item, index) => (
              <Box key={index}>
                <Box bgcolor="#F8FBFF" padding={3} mr={2}>
                  <Box mb={2}>
                    <TestimonyIcon />
                  </Box>
                  <Typography variant="body1">{item.description}</Typography>
                  <Box display="flex" gap={2} mt={2}>
                    <Avatar />
                    <Box>
                      <Typography fontWeight={600}>{item.name}</Typography>
                      <Typography>{item.company}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
          {/* </Grid> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimony;
