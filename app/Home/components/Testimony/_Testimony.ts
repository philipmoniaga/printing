'use client';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const SliderButton = styled(Button)((props) => ({
  background: 'rgba(0, 0, 0, 0.18)',
  position: 'absolute',
  top: '50%',
  minWidth: '40px',
  minHeight: '40px',
  borderRadius: '30px',
  padding: 0,
  '&:hover': {
    background: 'rgba(0, 0, 0, 0.18)',
    opacity: '0.8',
  },
  '& span': {
    marginLeft: 0,
    marginRight: 0,
  },
}));
