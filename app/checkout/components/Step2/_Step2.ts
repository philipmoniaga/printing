'use client';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const ProductWrapper = styled(Box)(() => ({
  borderRadius: '8px',
  border: '1px solid #E2E2E2',
}));

export const VisuallyHiddenInput = styled('input')({
  opacity: 0,
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100%',
  height: '100%',
  cursor: 'pointer',
});
