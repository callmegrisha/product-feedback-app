import { Box } from '@chakra-ui/react';
import { styles } from './styles';

export const Sidebar = ({ children }) => {
  return (
    <Box as='aside' {...styles}>
      {children}
    </Box>
  );
};
