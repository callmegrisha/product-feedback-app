import { Box, Text } from '@chakra-ui/react';

export const BlockWrapper = ({ title, children, ...props }) => {
  return (
    <Box className='block-wrapper' {...props}>
      {title && (
        <Text as='h2' textStyle='h2' color='custom.eastBay' mb={6}>
          {title}
        </Text>
      )}
      {children}
    </Box>
  );
};
