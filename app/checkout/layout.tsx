'use client';

import { Box } from '@mui/material';
import CheckoutStep from './components/CheckoutStep';

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box position={'relative'}>
      <Box height="60px">
        <CheckoutStep />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '66px',
          width: '100%',
          height: '320px',
          zIndex: '-1',
          backgroundImage: 'linear-gradient(0deg, #3A86FF 50.15%, #8EB9FF 111.36%)',
        }}
      />
      {children}
    </Box>
  );
}
