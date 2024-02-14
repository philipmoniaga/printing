'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import { FieldValues } from '@/app/Provider/types';
import { Paths } from '@/constant';
import { ProductPlan } from '@/constant/Product/types';
import { Box, Button, Stack, Typography } from '@mui/material';
import useBreakMediaQuery from '@/hooks/useBreakMediaQuery';

type Props = {
  id: number;
  plan: ProductPlan[];
};

export default function ProductItem({ id, plan }: Props) {
  const { setValue } = useFormContext<FieldValues>();
  const { isTablet } = useBreakMediaQuery();

  const router = useRouter();
  return (
    <>
      <Box
        {...(isTablet
          ? {
              textAlign: 'center',
              width: '100%',
            }
          : { display: 'flex', justifyContent: 'center', gap: '24px' })}>
        {plan.map((item: ProductPlan, index: number) => (
          <Stack
            key={index}
            justifyContent="space-between"
            bgcolor="#F8FBFF"
            mb={isTablet ? 4 : 0}
            width={isTablet ? '100%' : '240px'}>
            <Box textAlign="center" width="100%">
              <Box position="relative" width="100%" height={isTablet ? '200px' : '110px'} margin="auto">
                <Image src={item.image} alt={item.name} fill />
              </Box>
              <Box mt={2}>
                <Typography variant="body1" fontWeight={600} mb={1}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="#C27EE2" mb={2}>
                  Mulai dari Rp. {item.price} / Halaman
                </Typography>

                <Box>
                  {item.benefit.map((benefit, index) => (
                    <Box
                      key={index}
                      borderBottom={index !== item.benefit.length - 1 ? '1px solid rgba(0, 0, 0, 0.08)' : 'none'}
                      padding="10px">
                      <Typography variant="caption" fontSize={'10px'} paddingBottom="10px">
                        {benefit.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box px={2} pb={2}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  setValue('planSelected', item);
                  setValue('packageSelected', item?.packageType[0]);
                  router.push(`${Paths.CHECKOUT}/${id}`);
                }}>
                Order {item.value}
              </Button>
            </Box>
          </Stack>
        ))}
      </Box>
    </>
  );
}
