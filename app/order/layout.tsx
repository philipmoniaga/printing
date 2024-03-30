'use client';

import { Box } from '@mui/material';

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '340px',
          zIndex: '-1',
          background: '#3A86FF',
        }}
      />
      {children}
    </div>
  );
}
