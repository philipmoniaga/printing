'use client';
import { styled } from '@mui/material/styles';
import { Box, TextField, TextareaAutosize, Typography } from '@mui/material';

export const ProductWrapper = styled(Box)(() => ({
  borderRadius: '8px',
  border: '1px solid #E2E2E2',
}));

export const InputWrapper = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
}));

export const CustomerTypography = styled(Typography)(() => ({
  width: '150px',
  fontWeight: '600',
}));

export const CustomerTextField = styled(TextField)(() => ({
  width: '500px',
  '& div': {
    borderRadius: '8px',
  },
  '& input': {
    padding: '7px 14px',
    '&::-webkit-outer-spin-button , &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
      '-moz-appearance': 'textfield',
    },
  },
}));

export const CustomerTextArea = styled(TextareaAutosize)(() => ({
  width: '500px',
  height: '80px !important',
  borderRadius: '8px',
  border: '1px solid #C7D0DD',
  resize: 'none',
  padding: '7px 14px',
  fontSize: '1rem',
}));

export const PaymentBox = styled(Box)(() => ({
  borderRadius: '8px',
  border: '1px solid #D8D8D8',
  width: '25%',
  textAlign: 'center',
  padding: '16px',
  cursor: 'pointer',
}));
