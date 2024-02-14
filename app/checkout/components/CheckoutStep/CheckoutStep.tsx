'use client';

import { Box, Typography } from '@mui/material';

import { CHECKOUT_STEP } from './constant';
import { TabIndex, TabWrapper } from './_CheckoutStep';
import { FieldValues } from '@/app/Provider/types';
import { useFormContext } from 'react-hook-form';
import useBreakMediaQuery from '@/hooks/useBreakMediaQuery';

export default function ProductList() {
  const { isMobile } = useBreakMediaQuery();

  const { watch } = useFormContext<FieldValues>();
  const { activeStep } = watch();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" bgcolor="#EDF4F9">
      <Box width={isMobile ? '100%' : '70%'}>
        <Box display="flex" alignItems="center" justifyContent="center">
          {CHECKOUT_STEP.map((item, index) => (
            <TabWrapper
              active={activeStep === item.value}
              key={index}
              display="flex"
              alignItems="center"
              sx={isMobile ? { width: '25%', minHeight: '78px' } : {}}>
              <TabIndex
                sx={isMobile ? { height: '12px', width: '12px', mr: '4px', fontSize: '10px' } : {}}
                active={activeStep === item.value}>
                {index + 1}
              </TabIndex>
              <Typography
                {...(isMobile && {
                  fontSize: '12px',
                })}>
                {item.label}
              </Typography>
            </TabWrapper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
