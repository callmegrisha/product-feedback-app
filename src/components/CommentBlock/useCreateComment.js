import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCurrentProfile,
  selectCurrentProfile,
} from '../../features/profile/profileSlice';
import { updateSuggestion } from '../../features/suggestions/suggestionsSlice';

export const useCreateComment = (currentSuggestion) => {
  const dispatch = useDispatch();
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
      setLimit(0);

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

  return [formik, handleTextarea, limit];
};
