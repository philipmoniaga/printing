'use client';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StepWrapper = styled(Box)({
  width: '50px',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '30px',
  color: '#ffffff',
  background: '#C27EE2',
  zIndex: 5,
});

export const StepLine = styled(Box)({
  position: 'absolute',
  borderBottom: '2px solid #C27EE2',
  width: '70%',
  left: '15%',
  top: '23px',
  zIndex: -1,
});

export const StepLineVertical = styled(Box)({
  position: 'absolute',
  borderLeft: '2px solid #C27EE2',
  height: '90%',
  top: 0,
  bottom: 0,
  left: '25px',
  zIndex: -1,
});
