'use client';

import { Box, Typography } from '@mui/material';

import { CHECKOUT_STEP } from './constant';
import { TabIndex, TabWrapper } from './_CheckoutStep';
import { FieldValues } from '@/app/Provider/types';
import { useFormContext } from 'react-hook-form';

export default function ProductList() {
  const { watch } = useFormContext<FieldValues>();
  const { activeStep } = watch();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" bgcolor="#EDF4F9">
      <Box sx={{ width: '70%' }}>
        <Box display="flex" alignItems="center" justifyContent="center">
          {CHECKOUT_STEP.map((item, index) => (
            <TabWrapper active={activeStep === item.value} key={index} display="flex" alignItems="center">
              <TabIndex active={activeStep === item.value}>{index + 1}</TabIndex>
              <Typography>{item.label}</Typography>
            </TabWrapper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
