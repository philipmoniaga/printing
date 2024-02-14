'use client';
import { Box, Stack, Button, IconButton } from '@mui/material';
import { Logo } from '@/icons';
import { MenuHeader } from './_Header';
import { useRouter } from 'next/navigation';
import { Paths } from '@/constant';
import { useState } from 'react';
import LoginModal from './LoginModal';
import useBreakMediaQuery from '@/hooks/useBreakMediaQuery';
import MobileMenu from './MobileMenu';
import { Menu } from '@mui/icons-material';

const Header = () => {
  const router = useRouter();
  const { isTablet } = useBreakMediaQuery();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <Box bgcolor="white" display="flex" justifyContent="center">
      <Box width={isTablet ? '100%' : '70%'} display="flex" justifyContent="space-between" padding={isTablet ? 2 : 4}>
        <Box onClick={() => router.push(Paths.HOME)} sx={{ cursor: 'pointer' }} display="flex" alignItems="center">
          <Logo />
        </Box>
        {!isTablet ? (
          <Box>
            <Stack direction="row" alignItems="center" spacing={6}>
              <MenuHeader>Produk</MenuHeader>
              <MenuHeader>Tentang</MenuHeader>
              <MenuHeader>FAQ</MenuHeader>
              <MenuHeader>Blog</MenuHeader>
              <Button variant="outlined" onClick={() => setOpenModal(true)}>
                Login/Register
              </Button>
            </Stack>
          </Box>
        ) : (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => setOpenMenu(true)}
            sx={{ ...(openMenu && { display: 'none' }) }}>
            <Menu />
          </IconButton>
        )}
      </Box>
      <LoginModal isOpen={openModal} handleOpen={setOpenModal} />
      <MobileMenu isOpen={openMenu} handleOpen={setOpenMenu} handleOpenModal={setOpenModal} />
    </Box>
  );
};

export default Header;
