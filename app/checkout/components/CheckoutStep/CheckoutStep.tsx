'use client';

import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { CHECKOUT_STEP } from './constant';
import { TabIndex, TabWrapper } from './_CheckoutStep';
import { CheckoutState } from '@/redux/reducers/checkout/type';
import { CheckoutAction } from '@/redux/reducers/checkout';

export default function ProductList() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: { checkout: CheckoutState }) => state.checkout.activeTab);

  const handleChangeTab = (value: number) => {
    dispatch(CheckoutAction.setCheckoutActiveTab(value));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" bgcolor="#EDF4F9">
      <Box sx={{ width: '70%' }}>
        <Box display="flex" alignItems="center" justifyContent="center">
          {CHECKOUT_STEP.map((item, index) => (
            <TabWrapper
              active={activeTab === item.value}
              key={index}
              display="flex"
              alignItems="center"
              onClick={() => handleChangeTab(item.value)}>
              <TabIndex active={activeTab === item.value}>{index + 1}</TabIndex>
              <Typography>{item.label}</Typography>
            </TabWrapper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
