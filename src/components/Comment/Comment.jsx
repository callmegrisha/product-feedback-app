import { useState } from 'react';
import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';

import { CommentReplyForm } from '../CommentReplyForm';
import { CommentForm } from '../CommentForm';
import { useEditComment } from './useEditComment';
import { useDeleteComment } from './useDeleteComment';

export const Comment = ({ comment, isReply }) => {
  const [currentProfile, handleDeleteComment] = useDeleteComment();
  const [limit, setOpenEditor, openEditor, formik, handleTextArea] =
    useEditComment(comment);
  const [replyFormVisibility, setReplyFormVisibility] = useState(false);

  const toggleEditComment = () => {
    if (openEditor) {
      return (
        <CommentForm
          isEdit
          limit={limit}
          formik={formik}
          handleTextarea={handleTextArea}
          submitBtnText='Save'
        />
      );
    } else {
      return (
        <Text textStyle='mdBody' color='custom.lynch'>
          {isReply ? (
            <>
              <Text as='span' fontWeight='700' color='custom.cornflowerBlue'>
                @{comment.replyingTo}
              </Text>
              &nbsp;
              {comment.content}
            </>
          ) : (
            comment.content
          )}
        </Text>
      );
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
              <Button
                __css={{}}
                className='reply-btn'
                type='button'
                onClick={() => setReplyFormVisibility(!replyFormVisibility)}
              >
                Reply
              </Button>
              {currentProfile.username === comment.user.username && (
                <>
                  <Button
                    __css={{}}
                    className='reply-btn'
                    type='button'
                    onClick={() => setOpenEditor(!openEditor)}
                  >
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
          {toggleEditComment()}
        </Box>
      </Flex>
      {replyFormVisibility && (
        <CommentReplyForm
          comment={comment}
          setReplyForm={setReplyFormVisibility}
        />
      )}
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
