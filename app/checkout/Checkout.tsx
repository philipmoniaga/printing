import { Box, Typography } from '@mui/material';
import Step from '../Home/components/Step';

export default function Checkout() {
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
  return (
    <div>
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
