import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentProfile } from '../../features/profile/profileSlice';
import {
  selectCurrentSuggestion,
  updateSuggestion,
} from '../../features/suggestions/suggestionsSlice';

export const Comment = ({ comment, isReply }) => {
  const dispatch = useDispatch();
  const currentProfile = useSelector(selectCurrentProfile);
  const currentSuggestion = useSelector(selectCurrentSuggestion);

  const handleDeleteComment = (commentId) => {
    const { id, comments } = currentSuggestion;
    const filteredComments = comments.filter(
      (comment) => comment.id !== commentId
    );

    const suggestionObj = {
      comments: filteredComments,
    };

    if (window.confirm('Are you sure you want to delete the comment?')) {
      dispatch(updateSuggestion({ id, suggestionObj }));
    }
  };

  return (
    <>
      <Flex justify='space-between' w='100%'>
        <Box mr={8}>
          <Avatar name={comment.user.name} src={comment.user.image} />
        </Box>
        <Box w='100%'>
          <Flex align='flex-start' justify='space-between' mb={4}>
            <Flex direction='column'>
              <Text
                as='span'
                display='block'
                textStyle='h4'
                color='custom.eastBay'
              >
                {comment.user.name}
              </Text>
              <Text
                as='span'
                display='block'
                textStyle='h4'
                color='custom.lynch'
                fontWeight='400'
              >
                @{comment.user.username}
              </Text>
            </Flex>
            <Flex gap='10px'>
              <Button __css={{}} className='reply-btn' type='button'>
                Reply
              </Button>
              {currentProfile.username === comment.user.username && (
                <>
                  <Button __css={{}} className='reply-btn' type='button'>
                    Edit
                  </Button>
                  <Button
                    __css={{}}
                    className='reply-btn'
                    type='button'
                    onClick={() => handleDeleteComment(comment.id)}
                  >
                    Delete
                  </Button>
                </>
              )}
            </Flex>
          </Flex>
          <Text textStyle='mdBody' color='custom.lynch'>
            {comment.content}
          </Text>
        </Box>
      </Flex>
      {comment.replies && (
        <Box className='replies'>
          {comment.replies.map((reply, index) => (
            <Comment comment={reply} key={index} isReply />
          ))}
        </Box>
      )}
    </>
  );
};
