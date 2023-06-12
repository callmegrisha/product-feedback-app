import { useState } from 'react';
import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';
import { BsFillReplyFill } from 'react-icons/bs';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

import { CommentReplyForm } from '../CommentReplyForm';
import { CommentForm } from '../CommentForm';
import { useEditComment } from './useEditComment';
import { useDeleteComment } from './useDeleteComment';

export const Comment = ({ comment, isReply }) => {
  const [currentProfile, handleDeleteComment] = useDeleteComment(comment);
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
        <Box mr={8} display={['none', 'none', 'block', 'block']}>
          <Avatar name={comment.user.name} src={comment.user.image} />
        </Box>
        <Box w='100%'>
          <Flex
            align='flex-start'
            justify={[
              'flex-start',
              'flex-start',
              'space-between',
              'space-between',
            ]}
            mb={4}
          >
            <Box mr={4} display={['block', 'block', 'none', 'none']}>
              <Avatar name={comment.user.name} src={comment.user.image} />
            </Box>
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
            <Flex gap='10px' ml={['auto', 'auto', 0, 0]}>
              <Button
                __css={{}}
                className='reply-btn'
                type='button'
                onClick={() => setReplyFormVisibility(!replyFormVisibility)}
              >
                <BsFillReplyFill size={20} />
              </Button>
              {currentProfile.username === comment.user.username && (
                <>
                  <Button
                    __css={{}}
                    className='reply-btn'
                    type='button'
                    onClick={() => setOpenEditor(!openEditor)}
                  >
                    <AiFillEdit size={20} />
                  </Button>
                  <Button
                    __css={{}}
                    className='reply-btn'
                    type='button'
                    onClick={() => handleDeleteComment(comment.id)}
                  >
                    <AiFillDelete size={20} />
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
