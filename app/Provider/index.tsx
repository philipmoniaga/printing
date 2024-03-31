'use client';

import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { yupResolver } from '@hookform/resolvers/yup';

import theme from './theme';
import { FormProvider, useForm } from 'react-hook-form';

import { FieldValues } from './types';
import useValidation from './useValidation';

export default function ProviderComponent({ children }: { children: React.ReactNode }) {
  const { schema } = useValidation();
  const methods = useForm<FieldValues>({
    defaultValues: {
      activeStep: 0,
      productSelected: null,
      planSelected: null,
      packageSelected: null,
      printSide: '1',
      printCorner: 'standard',
      totalPrice: 0,
      countBox: 1,
      file: null,
      linkUrl: '',
      sendByEmail: false,
      email: '',
      recipient: {
        name: '',
        email: '',
        phoneNumber: '',
      },
      address: {
        city: '',
        zipCode: '',
        fullAddress: '',
        logisticOption: 'regular',
      },
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormProvider {...methods}>{children}</FormProvider>
    </ThemeProvider>
  );
}
