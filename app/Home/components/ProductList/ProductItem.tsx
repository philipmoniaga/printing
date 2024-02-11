'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import { FieldValues } from '@/app/Provider/types';
import { Paths } from '@/app/constant';
import { ProductPlan } from '@/app/constant/Product/types';
import { Box, Button, Stack, Typography } from '@mui/material';

type Props = {
  id: number;
  plan: ProductPlan[];
};

export default function ProductItem({ id, plan }: Props) {
  const { watch, setValue } = useFormContext<FieldValues>();

  const router = useRouter();
  return (
    <>
      <Box display="flex" justifyContent="center" gap="24px">
        {plan.map((item: ProductPlan, index: number) => (
          <Stack key={index} justifyContent="space-between" bgcolor="#F8FBFF" width="240px">
            <Box textAlign="center" width="100%">
              <Box position="relative" width="100%" height="110px" margin="auto">
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
