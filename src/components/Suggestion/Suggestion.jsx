import { Link } from 'react-router-dom';
import { Box, Button, Flex, Icon, Tag, Text } from '@chakra-ui/react';
import { IoIosArrowUp } from 'react-icons/io';
import { FaComment } from 'react-icons/fa';

import {
  suggestion,
  suggestionCat,
  suggestionComments,
  suggestionText,
  suggestionWrap,
  upvote,
  upvoteBtn,
} from './styles';

export const Suggestion = ({
  id,
  title,
  category,
  upvotes,
  description,
  comments,
}) => {
  return (
    <Box {...suggestion}>
      <Flex {...suggestionWrap}>
        <Box {...upvote}>
          <Button type='button' variant='up' {...upvoteBtn}>
            <Icon as={IoIosArrowUp} />
            <Text as='span'>{upvotes}</Text>
          </Button>
        </Box>
        <Box {...suggestionText}>
          <Link to={`/suggestion/${id}`} aria-label={title}>
            <Text textStyle='h3' color='custom.eastBay' mb={1}>
              {title}
            </Text>
          </Link>
          <Text custom='custom.lynch' mb={4}>
            {description}
          </Text>
          <Tag {...suggestionCat}>
            {category[0].toUpperCase() + category.substring(1)}
          </Tag>
        </Box>
        <Flex {...suggestionComments}>
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
