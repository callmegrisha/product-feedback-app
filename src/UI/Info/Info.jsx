import { Box, Text } from '@chakra-ui/react';

import { infoBlock } from './styles';

export const Info = () => {
  return (
    <Box {...infoBlock}>
      <Text textStyle='h2' color='white'>
        Frontend Mentor
      </Text>
      <Text
        textStyle='mdBody'
        color='rgba(255, 255, 255, 0.75)'
        fontWeight='500'
      >
        Feedback Board
      </Text>
    </Box>
  );
};
