'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Box, Typography, RadioGroup, Radio, FormControlLabel, FormControl, Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

import Step from '@/app/Home/components/Step';
import { PRODUCT } from '@/app/constant';
import { ButtonCount, CountWrapper, FavoriteWrapper, ProductItem, ProductWrapper, TabWrapper } from './_Step1';
import { formatCurrency } from '@/utils/string';

const List = [
  {
    title: 'Vendor spesialis cetak identitas perusahaan sejak tahun 2006',
    description:
      'Kami hanya mencetak identitas perusahaan dengan kualitas terbaik dan profesional sehingga anda akan mendapatkan pengalaman memesan identitas perusahaan yang mengesankan. Selain itu anda bisa mencetak identitas perusahaan anda sendiri, dengan desain yang disesuai dengan keinginan anda. Kami juga menyediakan fitur gratis desain identitas perusahaan, dan gratis edit desain identitas perusahaan, sehingga anda memiliki kebebasan untuk menentukan desain terbaik anda.',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam. Faucibus et molestie ac feugiat sed. A diam sollicitudin tempor id eu. Est velit egestas dui id ornare arcu odio ut. Sagittis eu volutpat odio facilisis mauris sit. Nec dui nunc mattis enim ut tellus elementum sagittis.',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam. Faucibus et molestie ac feugiat sed. A diam sollicitudin tempor id eu. Est velit egestas dui id ornare arcu odio ut. Sagittis eu volutpat odio facilisis mauris sit. Nec dui nunc mattis enim ut tellus elementum sagittis.',
  },
];

export default function Step1() {
  const [activeType, setActiveType] = useState<number>(0);
  const [selectedType, setSelectedType] = useState<number>(0);

  return (
    <div>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={5} mb={8}>
        <Box width="60%">
          <Box textAlign="center">
            <Typography variant="h5" color="white" fontWeight="600" mb={2}>
              Impresi Tak Terlupakan untuk Klien Potensial Anda.
            </Typography>
            <Box>
              <Typography variant="body1" color="white">
                Cetak Kartu Nama Berkualitas Tinggi:
              </Typography>
              <Typography variant="body1" color="white">
                Pilih Kertas Sesuai Keinginan dan Anggaran Anda.
              </Typography>
            </Box>
          </Box>
          <ProductWrapper mt={6}>
            <Typography textAlign="center" variant="body1" color="white" fontWeight={600} mt={3} mb={2}>
              Pilih Tipe Kartu Nama
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center" gap="10px">
              {PRODUCT[0].plan.map((item, index) => (
                <TabWrapper
                  active={activeType === index}
                  key={index}
                  display="flex"
                  alignItems="center"
                  onClick={() => setActiveType(index)}>
                  {item.name}
                </TabWrapper>
              ))}
            </Box>
            <Box display="flex" padding={3} bgcolor={'white'} borderRadius="8px">
              <Box>
                {PRODUCT[0].plan[activeType].packageType.map((item, index) => (
                  <ProductItem active={selectedType === index} key={index} onClick={() => setSelectedType(index)}>
                    <Radio checked={selectedType === index} value={index} />
                    <Box display="flex" alignItems="center" padding={1}>
                      <Box position="relative" width="180px" height="120px" mr={3}>
                        <Image src="/assets/splendorgel.svg" alt="splendor" fill />
                      </Box>
                      <Box>
                        <Box display="flex" alignItems="center" mb={2}>
                          <Typography fontWeight={600}>{item.name}</Typography>
                          {item.isFavorite && <FavoriteWrapper>FAVORIT</FavoriteWrapper>}
                        </Box>
                        <Typography variant="body2">{item.description}</Typography>
                      </Box>
                    </Box>
                  </ProductItem>
                ))}
              </Box>
              <Box marginLeft={3} width={'40%'}>
                <Box mb={4}>
                  <FormControl>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Sisi Cetak
                    </Typography>
                    <RadioGroup value={'70000'} onChange={() => {}}>
                      <FormControlLabel
                        value="70000"
                        control={<Radio size={'small'} />}
                        label={<Typography variant="caption">1 Sisi (Rp70.000)</Typography>}
                      />
                      <FormControlLabel
                        sx={{ fontSize: '10px' }}
                        value="90000"
                        control={<Radio size={'small'} />}
                        label={<Typography variant="caption">2 Sisi (Rp90.000)</Typography>}
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box mb={4}>
                  <FormControl>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Sudut
                    </Typography>
                    <RadioGroup value={'standar'} onChange={() => {}}>
                      <FormControlLabel
                        value="standar"
                        control={<Radio size={'small'} />}
                        label={<Typography variant="caption">Standar</Typography>}
                      />
                      <FormControlLabel
                        sx={{ fontSize: '10px' }}
                        value="lengkung"
                        control={<Radio size={'small'} />}
                        label={<Typography variant="caption">Lengkung (Tambah Rp15.000)</Typography>}
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box mb={5}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }} mb={1}>
                    Jumlah Kotak
                  </Typography>
                  <CountWrapper>
                    <ButtonCount variant="contained">
                      <Remove sx={{ fontSize: '16px' }} />
                    </ButtonCount>
                    <Typography variant="body2">1</Typography>
                    <ButtonCount variant="contained">
                      <Add sx={{ fontSize: '16px' }} />
                    </ButtonCount>
                  </CountWrapper>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600 }} mb={1}>
                    Harga Total
                  </Typography>
                  <Typography fontWeight={600} variant="h5">
                    {formatCurrency(PRODUCT[0].plan[activeType].packageType[selectedType].price)}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box marginX={3} paddingY={3} borderTop={'1px solid #D4D4D4'}>
                <Button variant="contained" fullWidth size="large">
                  Selanjutnya
                </Button>
              </Box>
            </Box>
          </ProductWrapper>
        </Box>
      </Box>
      <Step />
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={5} mb={1}>
        <Box width="70%">
          {List.map((item, index) => (
            <Box key={index} mb={4}>
              <Typography variant="subtitle1" fontWeight={600} mb={2}>
                {item.title}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
}
