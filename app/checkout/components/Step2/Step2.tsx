'use client';

import { Box, Typography, FormControl, Button, TextField, FormControlLabel, Checkbox } from '@mui/material';

import { ProductWrapper, VisuallyHiddenInput } from './_Step2';
import { UploadIcon } from '@/icons';

export default function Step2() {
  return (
    <div>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={5} mb={8}>
        <Box width="60%">
          <ProductWrapper mt={6}>
            <Typography textAlign="center" variant="body1" color="white" fontWeight={600} mt={3} mb={2}>
              Upload Desainmu
            </Typography>
            <Box padding={3} bgcolor={'white'} borderRadius="8px">
              <Box position="relative" border="1px dashed #3A86FF" borderRadius="8px" bgcolor="#E8EEF8" py={4} mb={4}>
                <Box margin="auto" display="flex" flexDirection="column" alignItems="center">
                  <UploadIcon />
                  <Box my={2} textAlign="center">
                    <Typography color="#7B92B8" variant="body1" mb={1}>
                      Upload File Desain
                    </Typography>
                    <Typography color="#7B92B8" variant="caption">
                      File yang diterima: ong,jpg,pdf. Ukuran max 10mb
                    </Typography>
                  </Box>
                  <Button variant="contained" sx={{ minWidth: '190px' }}>
                    Pilih File
                  </Button>
                </Box>

                <VisuallyHiddenInput type="file" />
              </Box>
              <Box mb={4}>
                <FormControl fullWidth>
                  <Typography variant="body2" sx={{ fontWeight: 600 }} mb={1}>
                    Atau, copy paste link dari Dropbox, Google Drive, dan lainnya
                  </Typography>
                  <TextField
                    size="small"
                    sx={{
                      '& div': {
                        borderRadius: '8px',
                      },
                    }}
                    placeholder="www.dropbox.com/..."
                  />
                </FormControl>
              </Box>
              <Box mb={4} width={'100%'}>
                <FormControl fullWidth>
                  <FormControlLabel
                    control={<Checkbox defaultChecked size="small" />}
                    label={
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Atau kirim gambar melalui email
                      </Typography>
                    }
                  />

                  <TextField variant="standard" />
                </FormControl>
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
    </div>
  );
}
