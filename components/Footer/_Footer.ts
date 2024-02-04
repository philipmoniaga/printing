'use client';
import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

export const FooterContainer = styled(Box)({
  background: '#ECEEF0',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: 40,
});

export const FooterWrapper = styled(Box)({
  width: '70%',
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid #CBCBCB',
  padding: 30,
  marginBottom: 30,
});

export const FooterTitle = styled(Typography)({
  fontWeight: '600',
});
