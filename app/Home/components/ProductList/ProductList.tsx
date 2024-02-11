'use client';

import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import { PRODUCT, Paths } from '@/app/constant';
import { TabPanelProps } from './types';
import ProductItem from './ProductItem';
import { FieldValues } from '@/app/Provider/types';

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
  const { watch, setValue, resetField } = useFormContext<FieldValues>();

  const [valueTab, setValueTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="body1" fontWeight="600" mb={5}>
        Pilih produk sesuai dengan kebutuhan anda.
      </Typography>
      <Box sx={{ width: '70%' }}>
        <Box marginBottom={4}>
          <Tabs value={valueTab} onChange={handleChange} centered>
            {PRODUCT.map((item, index) => (
              <Tab label={item.tab} key={index} sx={{ borderBottom: 1, borderColor: 'divider', fontWeight: 600 }} />
            ))}
          </Tabs>
        </Box>
        <Box width="60%" margin="auto">
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
                resetField();
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
