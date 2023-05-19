import { Box, Container } from '@chakra-ui/react';
import { stylesSection, stylesSectionContainer } from './styles';

export const Section = ({ children }) => {
  return (
    <Box as='section' {...stylesSection}>
      <Container maxW={1142} {...stylesSectionContainer}>
        {children}
      </Container>
    </Box>
  );
};
