import { LayoutProps } from './types';
import { Box } from '@mui/material';
import { Header, Footer } from '@/components';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
