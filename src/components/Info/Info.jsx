import { Box, Button, Icon, Text } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { infoBlock, burger } from './styles';

export const Info = ({ ...props }) => {
  return (
    <Box {...infoBlock} {...props}>
      <Box>
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
      <Button type='button' {...burger}>
        <Icon as={GiHamburgerMenu} />
      </Button>
    </Box>
  );
};
