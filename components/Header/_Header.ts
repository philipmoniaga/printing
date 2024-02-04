'use client';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const MenuHeader = styled(Typography)({
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
});
