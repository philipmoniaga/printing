'use client';
import Image from 'next/image';

import { Box, Button, Typography } from '@mui/material';

import { Visibility } from '@mui/icons-material';
import useBreakMediaQuery from '@/hooks/useBreakMediaQuery';
import { ProductWrapper } from './_orderDetail';
import dayjs from 'dayjs';
import { formatCurrency } from '@/utils/string';

export default function OrderDetail() {
  const { isMobile } = useBreakMediaQuery();

  return (
    <div>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mb={8}>
        <Box width={isMobile ? '90%' : '80%'}>
          <ProductWrapper mt={6}>
            <Typography variant="body1" color="white" fontWeight={600} mt={3} mb={2} mx={3}>
              Pesanan Saya
            </Typography>
            <Box p={3} bgcolor={'white'} flexDirection="column">
              {[0, 1].map((item, index) => (
                <Box
                  key={index}
                  display={isMobile ? 'block' : 'flex'}
                  pb={3}
                  {...(isMobile && index < 1 ? { mb: 3, borderBottom: '2px solid #E6E6E6' } : { mb: 0 })}>
                  <Box>
                    <Box position="relative" width={isMobile ? '100%' : '180px'} height="120px">
                      <Image src={'/assets/splendorgel.svg'} alt={'order 1'} fill />
                    </Box>
                  </Box>
                  <Box width="100%" mx={isMobile ? 0 : 2} mt={1.5}>
                    <Box display={isMobile ? 'block' : 'flex'} justifyContent="space-between">
                      <Box>
                        <Box display="flex">
                          <Box borderRight="1px solid #5D5A68" pr={1} mr={1}>
                            <Typography variant="body2" color="#3A86FF">
                              INV/002/003/ADM/2023
                            </Typography>
                          </Box>
                          <Typography variant="body2">{dayjs().format('DD MMM YYYY')}</Typography>
                        </Box>
                        <Box display="flex" mt={2}>
                          <Box mr={2} width={'170px'}>
                            <Typography variant="body2" fontWeight={600}>
                              Jenis Pesanan
                            </Typography>
                            <Typography variant="body2" color="#ABA9B1">
                              Kartu Nama Splendorgel, 2 sisi, sudut standard
                            </Typography>
                          </Box>
                          <Box mr={2}>
                            <Typography variant="body2" fontWeight={600}>
                              Quantity
                            </Typography>
                            <Typography variant="body2" color="#ABA9B1">
                              10 Box
                            </Typography>
                          </Box>
                          <Box>
                            <Typography variant="body2" fontWeight={600}>
                              Total Pesanan
                            </Typography>
                            <Typography variant={isMobile ? 'body1' : 'h6'} color="#3A86FF">
                              IDR {formatCurrency(900000)}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        mt={isMobile ? 2 : 0}
                        gap={isMobile ? 2 : 0}
                        display="flex"
                        flexDirection={isMobile ? 'column-reverse' : 'column'}
                        justifyContent="space-between"
                        alignItems="end">
                        {true ? (
                          <Button color="secondary" variant="outlined" fullWidth={isMobile} startIcon={<Visibility />}>
                            Lihat bukti pembayaran
                          </Button>
                        ) : (
                          <div />
                        )}
                        <Button variant="contained" sx={{ width: isMobile ? '100%' : '150px' }}>
                          Lacak Pesanan
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </ProductWrapper>
        </Box>
      </Box>
    </div>
  );
}
