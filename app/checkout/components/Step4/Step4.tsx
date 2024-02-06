'use client';

import { Box, Typography } from '@mui/material';

import { ProductWrapper } from './_Step4';
import { DoneIcon } from '@/icons';

export default function Step4() {
  return (
    <div>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={5} mb={8}>
        <Box width="60%">
          <ProductWrapper mt={6}>
            <Typography textAlign="center" variant="body1" color="white" fontWeight={600} mt={3} mb={2}>
              Pembayaran Selesai
            </Typography>
            <Box
              px={3}
              py={5}
              bgcolor={'white'}
              borderRadius="8px"
              display="flex"
              alignItems="center"
              flexDirection="column">
              <DoneIcon />
              <Typography variant="h6" fontWeight="600" mb={2} mt={4}>
                Pembayaran Berhasil
              </Typography>
              <Typography variant="body2">Terima kasih, pembayaranmu telah kami terima.</Typography>
              <Typography variant="body2">Silahkan cek email yang didaftarkan untuk melacak pesanan anda.</Typography>
            </Box>
          </ProductWrapper>
        </Box>
      </Box>
    </div>
  );
}
