'use client';

import { Box, Typography, Button, FormControlLabel, RadioGroup, Radio } from '@mui/material';

import {
  CustomerTextArea,
  CustomerTextField,
  CustomerTypography,
  InputWrapper,
  PaymentBox,
  ProductWrapper,
} from './_Step3';
import { useState } from 'react';
import { formatCurrency } from '@/utils/string';

const Payment = [
  {
    label: 'Bayar Pakai QR Code',
    description: 'QR BCA, GoPay, OVO, Shopeepay dll',
  },
  {
    label: 'Kartu Kredit',
    description: 'VISA & Mastercard',
  },
  {
    label: 'Transfer Bank (Otomatis)',
    description: 'BCA, Mandiri, Permata, BNI, BRI, dll',
  },
  {
    label: 'Alfamart',
    description: 'Bayar di counter Alfamart terdekat',
  },
];

export default function Step3() {
  const [activePayment, setActivePayment] = useState<number>(0);

  return (
    <div>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={5} mb={8}>
        <Box width="60%">
          <ProductWrapper mt={6}>
            <Typography textAlign="center" variant="body1" color="white" fontWeight={600} mt={3} mb={2}>
              Ringkasan Pesanan
            </Typography>
            <Box padding={3} bgcolor={'white'} borderRadius="8px">
              <Box display="flex" borderBottom={'2px solid #D4D4D4'} mb={4} pb={2}>
                <Box width="50%">
                  <InputWrapper>
                    <CustomerTypography variant="body2">Tipe Kartu Nama</CustomerTypography>
                    <Typography variant="body2">: Splendorgel</Typography>
                  </InputWrapper>
                  <InputWrapper>
                    <CustomerTypography variant="body2">Sisi Cetak</CustomerTypography>
                    <Typography variant="body2">: 1 Sisi</Typography>
                  </InputWrapper>
                  <InputWrapper>
                    <CustomerTypography variant="body2">Laminating</CustomerTypography>
                    <Typography variant="body2">: Tidak</Typography>
                  </InputWrapper>
                  <InputWrapper>
                    <CustomerTypography variant="body2">Finishing</CustomerTypography>
                    <Typography variant="body2">: Tidak</Typography>
                  </InputWrapper>
                  <InputWrapper>
                    <CustomerTypography variant="body2">Jumlah Kotak</CustomerTypography>
                    <Typography variant="body2">: 1</Typography>
                  </InputWrapper>
                  <InputWrapper>
                    <CustomerTypography variant="body2">File Desain</CustomerTypography>
                    <Typography variant="body2">
                      :{' '}
                      <Typography component="span" color="primary">
                        kartu.pdf
                      </Typography>
                    </Typography>
                  </InputWrapper>
                </Box>
                <Box width="50%">
                  <InputWrapper>
                    <CustomerTypography variant="body2">Sub Total</CustomerTypography>
                    <Typography variant="body2">: {formatCurrency(70000)}</Typography>
                  </InputWrapper>
                  <InputWrapper>
                    <CustomerTypography variant="body2">Biaya Kirim</CustomerTypography>
                    <Typography variant="body2">: {formatCurrency(0)}</Typography>
                  </InputWrapper>
                  <InputWrapper>
                    <CustomerTypography variant="body2">Diskon</CustomerTypography>
                    <Typography variant="body2">: {formatCurrency(0)}</Typography>
                  </InputWrapper>
                  <InputWrapper sx={{ marginBottom: '10px' }}>
                    <CustomerTypography variant="body2">Diskon</CustomerTypography>
                    <CustomerTextField size="small" placeholder="Input Kode Promo" sx={{ width: '160px' }} />
                  </InputWrapper>
                  <Box width={'100%'} borderBottom={'1px solid #D4D4D4'} mb={1} pb={1} />
                  <InputWrapper>
                    <CustomerTypography variant="body2">Grand Total</CustomerTypography>
                    <Typography variant="h6">{formatCurrency(70000)}</Typography>
                  </InputWrapper>
                </Box>
              </Box>
              <Box borderBottom={'2px solid #D4D4D4'} mb={4} pb={2}>
                <Typography variant="body1" fontWeight="600" mb={2}>
                  Informasi Penerima
                </Typography>
                <InputWrapper>
                  <CustomerTypography variant="body2">Nama</CustomerTypography>
                  <CustomerTextField size="small" />
                </InputWrapper>
                <InputWrapper>
                  <CustomerTypography variant="body2">Email</CustomerTypography>
                  <CustomerTextField size="small" />
                </InputWrapper>
                <InputWrapper>
                  <CustomerTypography variant="body2">Nomor Handphone</CustomerTypography>
                  <CustomerTextField size="small" />
                </InputWrapper>
              </Box>
              <Box borderBottom={'2px solid #D4D4D4'} mb={4} pb={2}>
                <Typography variant="body1" fontWeight="600" mb={2}>
                  Alamat Pengiriman
                </Typography>
                <InputWrapper>
                  <CustomerTypography variant="body2">Kota / Kecamatan*</CustomerTypography>
                  <CustomerTextField size="small" />
                </InputWrapper>
                <InputWrapper>
                  <CustomerTypography variant="body2">Kode Pos*</CustomerTypography>
                  <CustomerTextField size="small" />
                </InputWrapper>
                <Box display="flex" mb={2}>
                  <CustomerTypography variant="body2">Alamat Lengkap*</CustomerTypography>
                  <CustomerTextArea />
                </Box>
                <Box display="flex" mb={2}>
                  <CustomerTypography variant="body2" mt="10px">
                    Opsi Pengiriman
                  </CustomerTypography>
                  <RadioGroup value={'standar'} onChange={() => {}}>
                    <FormControlLabel
                      value="standar"
                      control={<Radio size={'small'} />}
                      label={<Typography variant="caption">Regular (2-3 Hari)</Typography>}
                    />
                    <FormControlLabel
                      sx={{ fontSize: '10px' }}
                      value="lengkung"
                      control={<Radio size={'small'} />}
                      label={<Typography variant="caption">Express (1-2 Hari)</Typography>}
                    />
                  </RadioGroup>
                </Box>
              </Box>
              <Box mb={4}>
                <Typography variant="body1" fontWeight="600" mb={2}>
                  Pilih Metode Pembayaran (Tanpa Biaya Transaksi)
                </Typography>
                <Box display="flex" gap="16px">
                  {Payment.map((item, index) => (
                    <PaymentBox key={index} onClick={() => setActivePayment(index)}>
                      <Radio checked={activePayment === index} size={'small'} />
                      <Typography variant="body2" fontWeight="600">
                        {item.label}
                      </Typography>
                      <Typography variant="caption">{item.description}</Typography>
                    </PaymentBox>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box>
              <Box marginX={3} pb={3}>
                <Button variant="contained" fullWidth size="large">
                  Bayar Sekarang
                </Button>
              </Box>
            </Box>
          </ProductWrapper>
        </Box>
      </Box>
    </div>
  );
}