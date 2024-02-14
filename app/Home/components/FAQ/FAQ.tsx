import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { FaqContainer } from './_FAQ';
import { Add } from '@mui/icons-material';
import useBreakMediaQuery from '@/hooks/useBreakMediaQuery';

const FAQ = () => {
  const { isMobile } = useBreakMediaQuery();

  const FAQ_LIST = [
    {
      title: 'Bagaimana cara ordernya?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'Bisa desain khusus atau bantu edit desain?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'Apakah benar 3 jam sudah selesai?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'Apa yang dimaksud dengan file siap cetak?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'Apakah ada kebijakan pengembalian?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
  ];

  return (
    <FaqContainer>
      <Box width={isMobile ? '100%' : '70%'} margin="auto">
        <Box>
          <Box textAlign="center" paddingBottom="40px" borderBottom="2px solid white">
            <Typography color="white" variant="subtitle1" fontWeight="600">
              FAQ Buat Produk Promosi Bisnismu di Kami
            </Typography>
          </Box>

          {FAQ_LIST.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                boxShadow: 'unset',
                position: 'static',
                borderBottom: '1px solid rgba(255, 255, 255, 0.40)',
              }}>
              <AccordionSummary expandIcon={<Add sx={{ color: 'white' }} />} sx={{ fontWeight: '600' }}>
                {item.title}
              </AccordionSummary>
              <AccordionDetails sx={{ boxShadow: 'none' }}>{item.description}</AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </FaqContainer>
  );
};

export default FAQ;
