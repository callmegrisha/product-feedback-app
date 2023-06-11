import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCurrentSuggestion,
  updateSuggestion,
} from '../../features/suggestions/suggestionsSlice';

export const useEditComment = (comment) => {
  const dispatch = useDispatch();
  const [openEditor, setOpenEditor] = useState(false);
  const [limit, setLimit] = useState(comment.content.length);
  const currentSuggestion = useSelector(selectCurrentSuggestion);

  const formik = useFormik({
    initialValues: {
      commentContent: comment.content,
    },
    onSubmit: (values, { resetForm }) => {
      console.log('edit form', values);
      const { id, comments } = currentSuggestion;
      const { commentContent } = values;

      const commentsArr = [...comments];

      const updatedComments = commentsArr.map((arrComment) =>
        arrComment.id === comment.id
          ? { ...arrComment, content: commentContent }
          : arrComment
      );

      const suggestionObj = {
        comments: updatedComments,
      };

      dispatch(updateSuggestion({ id, suggestionObj }));

      resetForm({ values: '' });
      setOpenEditor(false);
      return null;
    },
  });

  const handleTextArea = (e) => {
    const comment = e.target.value;
    const length = comment.length;

    formik.setFieldValue('commentContent', comment);
    setLimit(length);
  };

  return [limit, setOpenEditor, openEditor, formik, handleTextArea];
};
