'use client';
import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

interface TabIndexProps {
  active: boolean;
}

export const TabWrapper = styled(Box)((props: TabIndexProps) => ({
  borderBottom: props.active ? '2px solid #3A86FF' : 'none',
  padding: '20px 8px',
}));

export const TabIndex = styled(Typography)((props: TabIndexProps) => ({
  height: '24px',
  width: '24px',
  background: props.active ? '#3A86FF' : 'transparent',
  color: props.active ? '#ffffff' : 'primary',
  borderRadius: '20px',
  fontSize: '12px',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '8px',
}));
