import { Link } from 'react-router-dom';
import { Box, Button, Flex, Icon, Tag, Text } from '@chakra-ui/react';
import { IoIosArrowUp } from 'react-icons/io';

import { BlockWrapper } from '../../UI/BlockWrapper/BlockWrapper';
import {
  suggestionCat,
  suggestionCommentsLength,
  suggestionText,
  suggestionWrap,
  upvote,
  upvoteBtn,
} from './styles';
import { CommentsLength } from '../../UI/CommentsLength/CommentsLength';

export const Suggestion = ({
  id,
  title,
  category,
  upvotes,
  description,
  comments,
  link,
  ...props
}) => {
  return (
    <BlockWrapper {...props}>
      <Flex {...suggestionWrap}>
        <Box {...upvote}>
          <Button type='button' variant='up' {...upvoteBtn}>
            <Icon as={IoIosArrowUp} />
            <Text as='span'>{upvotes}</Text>
          </Button>
        </Box>
        <Box {...suggestionText}>
          {link ? (
            <Link to={`/suggestion/${id}`} aria-label={title}>
              <Text textStyle='h3' color='custom.eastBay' mb={1}>
                {title}
              </Text>
            </Link>
          ) : (
            <Text textStyle='h3' color='custom.eastBay' mb={1}>
              {title}
            </Text>
          )}
          <Text custom='custom.lynch' mb={4}>
            {description}
          </Text>
          <Tag {...suggestionCat}>
            {category[0].toUpperCase() + category.substring(1)}
          </Tag>
        </Box>
        <CommentsLength
          comments={comments}
          additionalStyles={suggestionCommentsLength}
        />
      </Flex>
    </BlockWrapper>
  );
};
