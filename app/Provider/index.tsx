'use client';

import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { FormProvider, useForm } from 'react-hook-form';
import { FieldValues } from './types';

export default function ProviderComponent({ children }: { children: React.ReactNode }) {
  const methods = useForm<FieldValues>({
    defaultValues: {
      activeStep: 0,
      productSelected: null,
      planSelected: null,
      packageSelected: null,
      printSide: '1',
      printCorner: 'standard',
      countBox: 1,
      file: null,
      linkUrl: '',
      sendByEmail: false,
      email: '',
    },
    mode: 'onChange',
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormProvider {...methods}>{children}</FormProvider>
    </ThemeProvider>
  );
}
