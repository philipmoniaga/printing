'use client';
import Image from 'next/image';

import { Box, Button, Skeleton, Typography } from '@mui/material';

import { Visibility } from '@mui/icons-material';
import useBreakMediaQuery from '@/hooks/useBreakMediaQuery';
import { ProductWrapper } from './_orderDetail';
import dayjs from 'dayjs';
import { formatCurrency } from '@/utils/string';
import { useCallback, useEffect, useState } from 'react';
import { axiosClientHandler } from '@/utils/axios';
import { useParams } from 'next/navigation';
import { OrderDetailType } from '@/pages/api/order/types';

export default function OrderDetail() {
  const { isMobile } = useBreakMediaQuery();
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [order, setOrder] = useState<OrderDetailType | null>(null);

  const getOrder = useCallback(async () => {
    setLoading(true);
    try {
      if (!params?.id) return;
      const getOrderDetail = await axiosClientHandler.get(`/api/order/${params.id}`);
      const {
        data: { data },
      } = getOrderDetail;

      setOrder(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, [params?.id]);

  useEffect(() => {
    getOrder();
  }, [getOrder]);

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <Skeleton width={'100%'} height={100} />
          <Skeleton width={'100%'} height={100} />
        </>
      );
    } else if (!order) {
      return (
        <Box textAlign="center">
          <Typography variant="h5" fontWeight={600} mb={1}>
            Pesanan Tidak Ditemukan
          </Typography>
          <Typography variant="caption" fontWeight={600}>
            Silahkan Hubungi Admin Jika Pesanan Anda Tidak Ditemukan
          </Typography>
        </Box>
      );
    } else {
      return (
        <Box display={isMobile ? 'block' : 'flex'} pb={3}>
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
                      {order?.id}
                    </Typography>
                  </Box>
                  <Typography variant="body2">{dayjs(order?.createdAt).format('DD MMM YYYY')}</Typography>
                </Box>
                <Box display="flex" mt={2}>
                  <Box mr={2} width={'170px'}>
                    <Typography variant="body2" fontWeight={600}>
                      Jenis Pesanan
                    </Typography>
                    <Typography variant="body2" color="#ABA9B1">
                      {order?.product} {order?.package}, {order?.print_side} sisi, sudut{' '}
                      {order?.print_corner === 'round' ? 'lengkung' : 'standar'}
                    </Typography>
                  </Box>
                  <Box mr={2}>
                    <Typography variant="body2" fontWeight={600}>
                      Quantity
                    </Typography>
                    <Typography variant="body2" color="#ABA9B1">
                      {order?.amount} Box
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" fontWeight={600}>
                      Total Pesanan
                    </Typography>
                    <Typography variant={isMobile ? 'body1' : 'h6'} color="#3A86FF">
                      IDR {formatCurrency(`${order?.price}`)}
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
      );
    }
  };

  return (
    <div>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mb={8}>
        <Box width={isMobile ? '90%' : '80%'}>
          <ProductWrapper mt={6}>
            <Typography variant="body1" color="white" fontWeight={600} mt={3} mb={2} mx={3}>
              Pesanan Saya
            </Typography>
            <Box p={3} bgcolor={'white'} flexDirection="column">
              {renderContent()}
            </Box>
          </ProductWrapper>
        </Box>
      </Box>
    </div>
  );
}
