'use client';
import { Box, Typography, Grid, Stack } from '@mui/material';
import { FooterContainer, FooterWrapper, FooterTitle } from './_Footer';
import useBreakMediaQuery from '@/hooks/useBreakMediaQuery';

const Footer = () => {
  const { isTablet } = useBreakMediaQuery();

  return (
    <FooterContainer>
      <FooterWrapper
        {...(isTablet && {
          sx: { width: '100%', padding: 0 },
        })}>
        <Grid container spacing={2}>
          <Grid item xs={isTablet ? 12 : 8}>
            <Box width={isTablet ? '100%' : '400px'}>
              <FooterTitle variant="body1" color="#3A86FF" marginBottom="14px">
                PercetakanKami.net
              </FooterTitle>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Pellentesque pulvinar pellentesque habitant morbi. Augue ut lectus arcu bibendum.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={isTablet ? 6 : 2} mb={isTablet ? 2 : 0}>
            <Stack gap="10px">
              <FooterTitle variant="body1" color="#929FAC">
                Media Sosial
              </FooterTitle>
              <Typography>Instagram</Typography>
              <Typography>Twitter</Typography>
              <Typography>Youtube</Typography>
              <Typography>Facebook</Typography>
            </Stack>
          </Grid>
          <Grid item xs={isTablet ? 6 : 2}>
            <Stack gap="10px">
              <FooterTitle variant="body1" color="#929FAC">
                Menu
              </FooterTitle>
              <Typography>Tentang</Typography>
              <Typography>Produk</Typography>
              <Typography>FAQ</Typography>
              <Typography>Pesan Sekarang</Typography>
            </Stack>
          </Grid>
        </Grid>
      </FooterWrapper>
      <Box>
        <Typography variant="body2">
          © Percetakankami.net 2023. All rights reserved. Unauthorized use and/or duplication of this material is
          strictly prohibited.
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
