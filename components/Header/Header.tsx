'use client';
import { Box, Stack, Button } from '@mui/material';
import { Logo } from '@/icons';
import { MenuHeader } from './_Header';
import { useRouter } from 'next/navigation';
import { Paths } from '@/app/constant';

const Header = () => {
  const router = useRouter();
  return (
    <Box bgcolor="white" display="flex" justifyContent="center">
      <Box width={'70%'} display="flex" justifyContent="space-between" padding={4}>
        <Box onClick={() => router.push(Paths.HOME)} sx={{ cursor: 'pointer' }}>
          <Logo />
        </Box>
        <Box>
          <Stack direction="row" alignItems="center" spacing={6}>
            <MenuHeader>Produk</MenuHeader>
            <MenuHeader>Tentang</MenuHeader>
            <MenuHeader>FAQ</MenuHeader>
            <MenuHeader>Blog</MenuHeader>
            <Button variant="outlined">Login/Register</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
