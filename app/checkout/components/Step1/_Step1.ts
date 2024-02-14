'use client';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

interface TabIndexProps {
  active: boolean;
}

export const FavoriteWrapper = styled(Box)(() => ({
  borderRadius: '2px',
  background: 'rgba(233, 153, 34, 0.15)',
  color: '#F6A300',
  fontSize: '10px',
  fontWeight: 600,
  padding: '0 4px',
  marginLeft: '4px',
}));

export const ProductWrapper = styled(Box)(() => ({
  borderRadius: '8px',
  border: '1px solid #E2E2E2',
}));

export const ProductItem = styled(Box)((props: TabIndexProps) => ({
  display: 'flex',
  alignItems: 'center',
  border: props.active ? '1px solid rgba(103, 218, 190, 1)' : '1px solid #D4D4D4',
  background: props.active ? 'rgba(103, 218, 190, 0.06)' : 'white',
  borderRadius: '4px',
  marginBottom: '10px',
  cursor: 'pointer',
}));

export const TabWrapper = styled(Box)((props: TabIndexProps) => ({
  background: props.active ? '#ffffff' : '#3D88FF',
  color: props.active ? '#495057' : '#ffffff',
  opacity: props.active ? 1 : 0.8,
  cursor: 'pointer',
  padding: '20px 8px',
  width: '200px',
  textAlign: 'center',
  borderTopRightRadius: '8px',
  borderTopLeftRadius: '8px',
  justifyContent: 'center',
  fontWeight: 600,
}));

export const CountWrapper = styled(Box)(() => ({
  background: '#EDF4F9',
  padding: '8px 10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '120px',
}));

export const ButtonCount = styled(Button)(() => ({
  background: '#ffffff',
  color: '#495057',
  borderColor: 'none',
  minWidth: '24px',
  height: '24px',
  padding: 0,
  boxShadow: 'none',
  borderRadius: '4px',
  '&:hover': {
    background: '#ffffff',
    opacity: '0.8',
    boxShadow: 'none',
  },
}));
