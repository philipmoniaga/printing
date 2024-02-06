'use client';

import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { PRODUCT } from '@/app/constant';
import { TabPanelProps } from './types';
import ProductItem from './ProductItem';

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <>{children}</>}
    </div>
  );
}

export default function ProductList() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="body1" fontWeight="600" mb={5}>
        Pilih produk sesuai dengan kebutuhan anda.
      </Typography>
      <Box sx={{ width: '70%' }}>
        <Box marginBottom={4}>
          <Tabs value={value} onChange={handleChange} centered>
            {PRODUCT.map((item, index) => (
              <Tab label={item.tab} key={index} sx={{ borderBottom: 1, borderColor: 'divider', fontWeight: 600 }} />
            ))}
          </Tabs>
        </Box>
        <Box width="60%" margin="auto">
          {PRODUCT.map((item, index) => (
            <CustomTabPanel value={value} index={index} key={index}>
              <ProductItem plan={item.plan} />
            </CustomTabPanel>
          ))}
          <Box py={2} margin="auto">
            <Button variant="outlined" fullWidth>
              Lihat Semua Paket
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
