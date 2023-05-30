import { useFormik } from 'formik';
import { Box, Button, Flex, Text, Textarea } from '@chakra-ui/react';

import { formWrap } from './styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentProfile,
  selectCurrentProfile,
} from '../../features/profile/profileSlice';
import { updateSuggestion } from '../../features/suggestions/suggestionsSlice';

export const CommentForm = ({ currentSuggestion }) => {
  const dispatch = useDispatch();
  const currentProfile = useSelector(selectCurrentProfile);

  const formik = useFormik({
    initialValues: {
      comment: '',
    },
    onSubmit: (values, { resetForm }) => {
      // id для patch, comments для обновления массива комментариев новым
      const { id, comments } = currentSuggestion;
      // содержание комментария
      const { comment } = values;
      let commentsArr = [];
      if (comments) {
        // обновленный массив с комментариями
        commentsArr = [
          ...comments,
          {
            content: comment,
            id: Date.now(),
            user: currentProfile,
          },
        ];
      } else {
        commentsArr = [
          {
            content: comment,
            id: Date.now(),
            user: currentProfile,
          },
        ];
      }

      // объект для передачи в запрос
      const suggestionObj = {
        comments: commentsArr,
      };

      dispatch(updateSuggestion({ id, suggestionObj }));
      resetForm({ values: '' });

      return null;
    },
  });

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  return (
    <Box {...formWrap}>
      <Text as='h2' textStyle='h2' color='custom.eastBay' mb={6}>
        Add Comment
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <Textarea
          variant='purple'
          name='comment'
          onChange={formik.handleChange}
          value={formik.values.comment}
          maxLength={225}
          mb={4}
        />
        <Flex justify='space-between' align='center'>
          <Text as='span' textStyle='mdBody' color='custom.lynch'>
            225 characters left
          </Text>
          <Button type='submit' variant='purple'>
            Post Comment
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
