'use client';

import Image from 'next/image';
import { Box, Typography, RadioGroup, Radio, FormControlLabel, FormControl, Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useFormContext, Controller } from 'react-hook-form';

import Step from '@/app/Home/components/Step';
import { ButtonCount, CountWrapper, FavoriteWrapper, ProductItem, ProductWrapper, TabWrapper } from './_Step1';
import { formatCurrency } from '@/utils/string';
import { FieldValues } from '@/app/Provider/types';
import useBreakMediaQuery from '@/hooks/useBreakMediaQuery';

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
  const { isMobile, isTablet } = useBreakMediaQuery();
  const { setValue, watch, control } = useFormContext<FieldValues>();
  const { productSelected, planSelected, countBox, packageSelected, activeStep } = watch();

  return (
    <div>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={5} mb={8}>
        <Box width={isMobile ? '100%' : '60%'}>
          <Box textAlign="center" p={isMobile ? 2 : 0}>
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
          <ProductWrapper mt={6} mx={isMobile ? 2 : 0}>
            <Typography textAlign="center" variant="body1" color="white" fontWeight={600} mt={3} mb={2}>
              Pilih Tipe {productSelected?.tab}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={isMobile ? 0 : '10px'}
              p={isMobile ? '0 8px' : 0}>
              {productSelected?.plan.map((item, index) => (
                <TabWrapper
                  active={planSelected?.id === item.id}
                  key={index}
                  display="flex"
                  alignItems="center"
                  onClick={() => {
                    setValue('planSelected', item);
                    setValue('packageSelected', item.packageType[0]);
                  }}
                  sx={isMobile ? { width: '140px', fontSize: '14px', py: '12px', height: '66px' } : {}}>
                  {item.name}
                </TabWrapper>
              ))}
            </Box>
            <Box display={isTablet ? 'block' : 'flex'} padding={3} bgcolor={'white'} borderRadius="8px">
              <Box>
                {planSelected?.packageType.map((item, index) => (
                  <ProductItem
                    active={packageSelected?.id === item.id}
                    key={index}
                    onClick={() => setValue('packageSelected', item)}>
                    <Radio checked={packageSelected?.id === item.id} value={index} />
                    <Box display="flex" alignItems="center" padding={1} overflow={'auto'}>
                      <Box position="relative" width="180px" height="120px" mr={3}>
                        <Image src="/assets/splendorgel.svg" alt="splendor" fill />
                      </Box>
                      <Box>
                        <Box display="flex" alignItems="center" mb={isMobile ? 1 : 2}>
                          <Typography fontSize={isMobile ? '12px' : '14px'} fontWeight={600}>
                            {item.name}
                          </Typography>
                          {item.isFavorite && <FavoriteWrapper>FAVORIT</FavoriteWrapper>}
                        </Box>
                        <Typography variant={isMobile ? 'caption' : 'body2'}>{item.description}</Typography>
                      </Box>
                    </Box>
                  </ProductItem>
                ))}
              </Box>
              <Box marginLeft={isTablet ? 0 : 3} width={isTablet ? '100%' : '40%'}>
                <Box mb={4}>
                  <FormControl sx={isTablet ? { flexDirection: 'initial' } : {}}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        ...(isTablet && {
                          position: 'relative',
                          top: '8px',
                          minWidth: '120px',
                        }),
                      }}>
                      Sisi Cetak
                    </Typography>

                    <Controller
                      name="printSide"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value="1"
                            control={<Radio size={'small'} />}
                            label={<Typography variant="caption">1 Sisi (Rp70.000)</Typography>}
                          />
                          <FormControlLabel
                            sx={{ fontSize: '10px' }}
                            value="2"
                            control={<Radio size={'small'} />}
                            label={<Typography variant="caption">2 Sisi (Rp90.000)</Typography>}
                          />
                        </RadioGroup>
                      )}
                    />
                  </FormControl>
                </Box>
                <Box mb={4}>
                  <FormControl sx={isTablet ? { flexDirection: 'initial' } : {}}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        ...(isTablet && {
                          position: 'relative',
                          top: '8px',
                          minWidth: '120px',
                        }),
                      }}>
                      Sudut
                    </Typography>

                    <Controller
                      name="printCorner"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup {...field}>
                          <FormControlLabel
                            value="standard"
                            control={<Radio size={'small'} />}
                            label={<Typography variant="caption">Standar</Typography>}
                          />
                          <FormControlLabel
                            sx={{ fontSize: '10px' }}
                            value="round"
                            control={<Radio size={'small'} />}
                            label={<Typography variant="caption">Lengkung (Tambah Rp15.000)</Typography>}
                          />
                        </RadioGroup>
                      )}
                    />
                  </FormControl>
                </Box>
                <Box mb={5} sx={isTablet ? { display: 'flex' } : {}}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      ...(isTablet && {
                        position: 'relative',
                        top: '8px',
                        minWidth: '120px',
                      }),
                    }}
                    mb={1}>
                    Jumlah Kotak
                  </Typography>
                  <Controller
                    name="countBox"
                    control={control}
                    render={({ field }) => (
                      <CountWrapper>
                        <ButtonCount
                          variant="contained"
                          disabled={countBox === 1}
                          onClick={() => field.onChange(countBox - 1)}>
                          <Remove sx={{ fontSize: '16px' }} />
                        </ButtonCount>
                        <Typography variant="body2">{countBox}</Typography>
                        <ButtonCount variant="contained" onClick={() => field.onChange(countBox + 1)}>
                          <Add sx={{ fontSize: '16px' }} />
                        </ButtonCount>
                      </CountWrapper>
                    )}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600 }} mb={1}>
                    Harga Total
                  </Typography>
                  <Typography fontWeight={600} variant="h5">
                    {formatCurrency(packageSelected?.price || '0')}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box marginX={3} paddingY={3} borderTop={'1px solid #D4D4D4'}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={() => setValue('activeStep', activeStep + 1)}>
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
