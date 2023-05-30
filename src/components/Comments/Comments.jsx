import { useSelector } from 'react-redux';
import { Box, Text } from '@chakra-ui/react';

import { CommentsList } from '../CommentsList';
import { selectCurrentSuggestion } from '../../features/suggestions/suggestionsSlice';

import { commentsBlock } from './styles';

export const Comments = ({ ...props }) => {
  const { comments } = useSelector(selectCurrentSuggestion);

  return (
    <Box {...commentsBlock} {...props}>
      <Text
        as='span'
        textStyle='h3'
        color='custom.eastBay'
        display='block'
        mb={7}
      >
        {comments ? comments.length : '0'} Comments
      </Text>
      <CommentsList comments={comments} />
    </Box>
  );
};
