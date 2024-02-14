'use client';

import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import { PRODUCT, Paths } from '@/app/constant';
import { TabPanelProps } from './types';
import ProductItem from './ProductItem';
import { FieldValues } from '@/app/Provider/types';
import useBreakMediaQuery from '@/hooks/useBreakMediaQuery';

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <>{children}</>}
    </div>
  );
}

export default function ProductList() {
  const router = useRouter();
  const { setValue } = useFormContext<FieldValues>();
  const { isMobile } = useBreakMediaQuery();

  const [valueTab, setValueTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="body1" fontWeight="600" mb={5}>
        Pilih produk sesuai dengan kebutuhan anda.
      </Typography>
      <Box width={isMobile ? '100%' : '70%'}>
        <Box marginBottom={4}>
          <Tabs value={valueTab} onChange={handleChange} centered>
            {PRODUCT.map((item, index) => (
              <Tab label={item.tab} key={index} sx={{ borderBottom: 1, borderColor: 'divider', fontWeight: 600 }} />
            ))}
          </Tabs>
        </Box>
        <Box width={isMobile ? '90%' : '60%'} margin="auto">
          {PRODUCT.map((item, index) => (
            <CustomTabPanel value={valueTab} index={index} key={index}>
              <ProductItem id={item.id} plan={item.plan} />
            </CustomTabPanel>
          ))}
          <Box py={2} margin="auto">
            <Button
              variant="outlined"
              fullWidth
              onClick={() => {
                setValue('planSelected', null);
                router.push(Paths.CHECKOUT);
              }}>
              Lihat Semua Paket
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
