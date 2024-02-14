import { Logo } from '@/icons';
import { Close } from '@mui/icons-material';
import { Button, Box, Drawer, Typography, Divider, IconButton } from '@mui/material';

interface Props {
  isOpen: boolean;
  handleOpen: (val: boolean) => void;
  handleOpenModal: (val: boolean) => void;
}

export default function MobileMenu({ isOpen, handleOpen, handleOpenModal }: Props) {
  const handleDrawerClose = () => {
    handleOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: '100%',
          '& .MuiDrawer-paper': {
            width: '100%',
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}>
        <Box p={3}>
          <Box display="flex" justifyContent="space-between" width={'100%'}>
            <Logo />

            <IconButton onClick={handleDrawerClose}>
              <Close />
            </IconButton>
          </Box>
          <Box mt={4}>
            {['Produk', 'Tentang', 'FAQ', 'Blog'].map((text, index) => (
              <Box textAlign="center" pb={1} key={index} sx={{ cursor: 'pointer' }}>
                <Typography fontWeight={600} mb={1}>
                  {text}
                </Typography>
                {index !== 3 && <Divider />}
              </Box>
            ))}
          </Box>
          <Box textAlign="center" mt={3}>
            <Button
              variant="outlined"
              onClick={() => {
                handleDrawerClose();
                handleOpenModal(true);
              }}>
              Login/Register
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
