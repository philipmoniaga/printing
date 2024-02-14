'use client';

import { Box } from '@mui/material';
import CheckoutStep from './components/CheckoutStep';
import useBreakMediaQuery from '@/hooks/useBreakMediaQuery';

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  const { isMobile } = useBreakMediaQuery();

  return (
    <Box position={'relative'}>
      <Box height="60px">
        <CheckoutStep />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: isMobile ? 0 : '66px',
          width: '100%',
          height: isMobile ? '470px' : '340px',
          zIndex: '-1',
          backgroundImage: 'linear-gradient(0deg, #3A86FF 50.15%, #8EB9FF 111.36%)',
        }}
      />
      {children}
    </Box>
  );
}
