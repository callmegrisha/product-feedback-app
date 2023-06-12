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
      const { id, comments } = currentSuggestion;
      const { commentContent } = values;

      const commentsArr = [...comments];
      let updatedComments = [];

      // если редактируем реплай
      if (comment.replyingTo) {
        // то исходя из структуры проходимся по массиву комментариев и ищем тот,
        // в котором есть нужный реплай
        updatedComments = comments.map((el) => {
          // если в объекте комментария уже есть массив replies
          // и в нем есть необходимый нам комментарий, на который мы отвечаем
          if (el.replies && el.replies.includes(comment)) {
            // проходим по массиву реплаев, находим нужный и заменяем содержание
            const updatedReplies = el.replies.map((reply) => {
              if (reply.content === comment.content) {
                return {
                  ...reply,
                  content: commentContent,
                };
              }
              return reply;
            });

            // возвращаем обновленный
            return {
              ...el,
              replies: updatedReplies,
            };
          }

          return el;
        });
      }

      if (!comment.replyingTo) {
        updatedComments = commentsArr.map((arrComment) =>
          arrComment.id === comment.id
            ? { ...arrComment, content: commentContent }
            : arrComment
        );
      }

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
