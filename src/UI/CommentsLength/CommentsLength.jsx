import { Flex, Icon, Text } from '@chakra-ui/react';
import { FaComment } from 'react-icons/fa';

import { commentsLength } from './styles';

export const CommentsLength = ({ comments, additionalStyles }) => {
  return (
    <Flex
      {...commentsLength}
      {...additionalStyles}
    >
      <Icon
        as={FaComment}
        color='#cdd2ee'
        mr={2}
      />
      <Text
        as='span'
        fontWeight='700'
        textStyle='lgBody'
        color='custom.eastBay'
      >
        {comments ? comments.length : <Text opacity='0.5'>0</Text>}
      </Text>
    </Flex>
  )
}
