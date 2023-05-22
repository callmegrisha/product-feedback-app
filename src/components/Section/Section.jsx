import { Box, Container } from '@chakra-ui/react';
import { stylesSectionContainer } from './styles';

export const Section = ({ children, ...props }) => {
  return (
    <Box as='section' {...props}>
      <Container maxW={1142} {...stylesSectionContainer}>
        {children}
      </Container>
    </Box>
  );
};
