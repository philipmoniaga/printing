import { Box, Typography } from '@mui/material';
import { StepLine, StepWrapper } from './_Step';

const Steps = [
  {
    title: 'Pesan & Bayar Online',
    description:
      'Pilih tipe kartu nama sesuai kebutuhan, upload file dan bayar online (Transfer, Kartu Kredit hingga GoPay / OVO / Shopee)',
  },
  {
    title: 'Cek Desainmu',
    description:
      'Kami akan mengirim draft desain kepada Anda melalui email. Setelah disetujui dan lunas, kartu nama akan dicetak.',
  },
  {
    title: 'Terima Produkmu',
    description: 'Terima kartu nama anda besok harinya. Siap digunakan untuk networking dan berbisnis.',
  },
];

export default function Step() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="body1" fontWeight="600" mb={5}>
        Cara Kerja Kami
      </Typography>
      <Box display="flex" justifyContent="space-between" width="60%" position="relative" gap={'10px'}>
        {Steps.map((item, index) => (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            maxWidth={'300px'}
            key={index}>
            <StepWrapper>{index + 1}</StepWrapper>
            <Box marginTop={3} marginBottom={7} height={'140px'}>
              <Typography variant="body2" fontWeight="600" mt={2} height={'40px'}>
                {item.title}
              </Typography>
              <Typography variant="caption">{item.description}</Typography>
            </Box>
          </Box>
        ))}
        <StepLine />
      </Box>
    </Box>
  );
}
