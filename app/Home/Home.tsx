'use client';
import { Box, Button, Stack, Typography } from '@mui/material';
import FAQ from './components/FAQ';
import Image from 'next/image';
import ProductList from './components/ProductList';
import Step from './components/Step';
import Benefit from './components/Benefit';
import Testimony from './components/Testimony';
import useBreakMediaQuery from '@/hooks/useBreakMediaQuery';

export default function Home() {
  const { isTablet, isMobile } = useBreakMediaQuery();

  return (
    <>
      <Box bgcolor="#F9FBFD" padding={5}>
        <Box
          width={isMobile ? '100%' : '70%'}
          margin="auto"
          gap="90px"
          marginBottom={8}
          {...(isTablet
            ? {
                textAlign: 'center',
              }
            : {
                display: 'flex',
                justifyContent: 'space-between',
              })}>
          <Stack justifyContent="center" gap="10px">
            <Typography variant={isMobile ? 'h5' : 'h4'} fontWeight="700">
              Desain Elegan, Cetak Instan Kartu, Buku, Brosur
            </Typography>
            <Typography variant={isMobile ? 'body1' : 'h5'} fontWeight="500">
              Beli Secara Online, Bayar Tanpa Kesulitan.
            </Typography>

            <Box>
              <Button variant="contained">Order Sekarang</Button>
            </Box>
          </Stack>
          <Box mt={isTablet ? 4 : 0}>
            <Image
              src="/assets/home-banner.svg"
              alt="Home Banner"
              width={isMobile ? 300 : 380}
              height={isMobile ? 250 : 270}
            />
          </Box>
        </Box>
      </Box>
      <Box bgcolor="#EDF4F9" padding={3}>
        <Box
          margin="auto"
          {...(isMobile
            ? {
                textAlign: 'center',
              }
            : { display: 'flex', width: '70%', alignItems: 'center', justifyContent: 'center' })}>
          <Box>
            <Typography variant="body2" fontWeight="500" mr={isTablet ? 0 : 3}>
              Klien Kami
            </Typography>
          </Box>
          <Box position="relative" width={isTablet ? '100%' : '80%'} height="40px">
            <Image src="/assets/partner-group.svg" alt="Partner Group" fill />
          </Box>
        </Box>
      </Box>
      <Box p={3} width={'70%'} m={'auto'}>
        <Box
          height={'320px'}
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundImage: 'url("/assets/home-background-1.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
          <Box>
            <Typography variant="h5" fontWeight={600}>
              Cetak Cepat, Hasil Luar Biasa: Identitas Bisnis yang Menggoda!
            </Typography>
            <Typography variant="body2">Dari Kartu Nama Hingga Banner, Layanan Kami Tak Tertandingi.</Typography>
          </Box>
        </Box>
      </Box>

      <Box mb={8}>
        <ProductList />
      </Box>
      <Step />
      <Benefit />

      <Testimony />
      <FAQ />
    </>
  );
}
