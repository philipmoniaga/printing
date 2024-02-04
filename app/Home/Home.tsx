import { Box, Button, Stack, Typography } from '@mui/material';
import FAQ from './components/FAQ';
import Image from 'next/image';
import ProductList from './components/ProductList';
import Step from './components/Step';
import Benefit from './components/Benefit';
import Testimony from './components/Testimony';

export default function Home() {
  return (
    <>
      <Box bgcolor="#F9FBFD" padding={5}>
        <Box display="flex" justifyContent="space-between" width="70%" margin="auto" gap="90px" marginBottom={8}>
          <Stack justifyContent="center" gap="10px">
            <Typography variant="h4" fontWeight="700">
              Desain Elegan, Cetak Instan Kartu, Buku, Brosur
            </Typography>
            <Typography variant="h5" fontWeight="500">
              Beli Secara Online, Bayar Tanpa Kesulitan.
            </Typography>

            <Box>
              <Button variant="contained">Order Sekarang</Button>
            </Box>
          </Stack>
          <Box>
            <Image src="/assets/home-banner.svg" alt="Home Banner" width={380} height={270} />
          </Box>
        </Box>
      </Box>
      <Box bgcolor="#EDF4F9" padding={3}>
        <Box display="flex" width="70%" margin="auto" alignItems="center" justifyContent="center">
          <Box>
            <Typography variant="body2" fontWeight="500">
              Klien Kami
            </Typography>
          </Box>
          <Box position="relative" width="80%" height="40px">
            <Image src="/assets/partner-group.svg" alt="Partner Group" fill />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box position="relative" width="100%" height="400px">
          <Image src="/assets/home-section-identity.svg" alt="Identity" fill />
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
