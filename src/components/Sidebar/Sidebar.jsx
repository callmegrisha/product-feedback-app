import { Box } from '@chakra-ui/react';
import { styles } from './styles';

export const Sidebar = ({ children }) => {
  return (
    <Box as='sidebar' {...styles}>
      {children}
    </Box>
  );
};
