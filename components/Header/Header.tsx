import { Box, Stack, Typography, Button } from '@mui/material';
import { Logo } from '@/icons';
import { MenuHeader } from './_Header';

const Header = () => {
  return (
    <Box bgcolor="white" display="flex" justifyContent="center">
      <Box width={'70%'} display="flex" justifyContent="space-between" padding={4}>
        <Logo />
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
