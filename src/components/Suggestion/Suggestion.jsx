import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { IoIosArrowUp } from 'react-icons/io';
import { FaComment } from 'react-icons/fa';
import { BaseTag } from '../../UI/BaseTag';

import { suggestion } from './styles';

export const Suggestion = () => {
  return (
    <Box {...suggestion}>
      <Flex>
        <Button type='button' variant='up' mr={30}>
          <Icon as={IoIosArrowUp} />
          <Text as='span'>112</Text>
        </Button>
        <Box>
          <Text textStyle='h3' color='custom.eastBay' mb={1}>
            Add tags for solutions
          </Text>
          <Text custom='custom.lynch' mb={4}>
            Easier to search for solutions based on a specific stack.
          </Text>
          <BaseTag text='Enhancement' />
        </Box>
        <Flex alignSelf='center' align='center' ml='auto'>
          <Icon as={FaComment} mr={2} color='#cdd2ee' />
          <Text
            as='span'
            fontWeight='700'
            textStyle='lgBody'
            color='custom.eastBay'
          >
            2
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
