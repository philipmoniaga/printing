import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const useBreakMediaQuery = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return {
    isMobile,
    isTablet,
  };
};

export default useBreakMediaQuery;
