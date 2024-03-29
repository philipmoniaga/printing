import { Box, Grid, Stack, Typography } from '@mui/material';
import { BENEFIT } from './constant';
import Image from 'next/image';
import useBreakMediaQuery from '@/hooks/useBreakMediaQuery';

const Benefit = () => {
  const { isMobile } = useBreakMediaQuery();

  return (
    <Box>
      <Box width={isMobile ? '100%' : '70%'} margin="auto">
        <Box>
          <Box textAlign="center" paddingBottom="40px" borderBottom="2px solid white">
            <Typography variant="subtitle1" fontWeight="600">
              Keunggulan Cetak Produk Promosi Bisnis di Kami
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {BENEFIT.map((item, index) => (
              <Grid item xs={isMobile ? 12 : 4} key={index} textAlign="center">
                <Box position="relative" width="40px" height="30px" margin="auto">
                  <Image src={item.image} alt={item.title} fill />
                </Box>
                <Stack maxWidth="300px" margin="auto">
                  <Typography variant="subtitle2" fontWeight={600} my={2}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Benefit;
