import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { IoIosArrowUp } from 'react-icons/io';
import { FaComment } from 'react-icons/fa';
import { BaseTag } from '../../UI/BaseTag';

import { suggestion } from './styles';

export const Suggestion = ({
  title,
  category,
  upvotes,
  description,
  comments,
}) => {
  return (
    <Box {...suggestion}>
      <Flex>
        <Button type='button' variant='up' mr={30}>
          <Icon as={IoIosArrowUp} />
          <Text as='span'>{upvotes}</Text>
        </Button>
        <Box>
          <Text textStyle='h3' color='custom.eastBay' mb={1}>
            {title}
          </Text>
          <Text custom='custom.lynch' mb={4}>
            {description}
          </Text>
          <BaseTag text={category[0].toUpperCase() + category.substring(1)} />
        </Box>
        <Flex alignSelf='center' align='center' ml='auto'>
          <Icon as={FaComment} mr={2} color='#cdd2ee' />
          <Text
            as='span'
            fontWeight='700'
            textStyle='lgBody'
            color='custom.eastBay'
          >
            {comments ? comments.length : <Text opacity='0.5'>0</Text>}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
