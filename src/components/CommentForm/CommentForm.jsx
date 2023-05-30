import { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Flex, Text, Textarea } from '@chakra-ui/react';

import {
  getCurrentProfile,
  selectCurrentProfile,
} from '../../features/profile/profileSlice';
import { updateSuggestion } from '../../features/suggestions/suggestionsSlice';
import { formWrap } from './styles';

export const CommentForm = ({ currentSuggestion }) => {
  const dispatch = useDispatch();
  const textarea = useRef();
  const [limit, setLimit] = useState(0);
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

  const handleTextarea = (e) => {
    const comment = e.target.value;
    const length = comment.length;

    formik.setFieldValue('comment', comment);
    setLimit(length);
  };

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
          ref={textarea}
          variant='purple'
          name='comment'
          onChange={(e) => handleTextarea(e)}
          value={formik.values.comment}
          maxLength={225}
          mb={4}
        />
        <Flex justify='space-between' align='center'>
          <Text as='span' textStyle='mdBody' color='custom.lynch'>
            {225 - limit} characters left
          </Text>
          <Button type='submit' variant='purple'>
            Post Comment
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
