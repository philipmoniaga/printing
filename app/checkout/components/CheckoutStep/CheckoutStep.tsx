'use client';

import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { CHECKOUT_STEP } from './constant';
import { TabIndex, TabWrapper } from './_CheckoutStep';

export default function ProductList() {
  const [value, setValue] = useState<number>(1);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" bgcolor="#EDF4F9">
      <Box sx={{ width: '70%' }}>
        <Box display="flex" alignItems="center" justifyContent="center">
          {CHECKOUT_STEP.map((item, index) => (
            <TabWrapper
              active={value === item.value}
              key={index}
              display="flex"
              alignItems="center"
              onClick={() => setValue(item.value)}>
              <TabIndex active={value === item.value}>{index + 1}</TabIndex>
              <Typography>{item.label}</Typography>
            </TabWrapper>
          ))}
          {/* </Tabs> */}
        </Box>
      </Box>
    </Box>
  );
}
