import { useFormik } from 'formik';
import {
  selectCurrentSuggestion,
  updateSuggestion,
} from '../../features/suggestions/suggestionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentProfile } from '../../features/profile/profileSlice';

export const useCreateReply = (comment, setReplyFormVisibility) => {
  const dispatch = useDispatch();
  const currentSuggestion = useSelector(selectCurrentSuggestion);
  const {
    id: currentCommentId,
    user: { username },
    replies,
  } = comment;
  const { id: suggestionId, comments } = currentSuggestion;
  const currentProfile = useSelector(selectCurrentProfile);

  const formik = useFormik({
    initialValues: {
      reply: '',
    },
    onSubmit: (values, { resetForm }) => {
      const { reply } = values;
      const replyObj = {
        content: reply,
        replyingTo: username,
        user: currentProfile,
      };

      let commentsArr = [...comments];
      let changedComments = [];

      if (replies) {
        // если объект комментария имеет поле replies
        changedComments = commentsArr.map((comment) => {
          if (comment.id === currentCommentId) {
            let updatedReplies = [...comment.replies, replyObj];
            return {
              ...comment,
              replies: updatedReplies,
            };
          }
          return { ...comment };
        });
      } else {
        // если объект комментария не имеет поля replies
        // проходим циклом по массиву комментариев
        // находим необходимый
        // и добавляем туда массив replies с новым reply
        changedComments = commentsArr.map((comment) => {
          if (comment.id === currentCommentId) {
            return {
              ...comment,
              replies: [replyObj],
            };
          }
          return { ...comment };
        });
      }

      // если мы отвечаем на реплай к комментарию
      if ('replyingTo' in comment) {
        // прохожусь циклом по массиву комментариев
        changedComments = comments.map((el) => {
          // если в объекте комментария уже есть массив replies
          // и в нем есть необходимый нам комментарий, на который мы отвечаем
          if (el.replies && el.replies.includes(comment)) {
            // возвращаем объект с обновленным массивом реплаев
            return {
              ...el,
              replies: [...el.replies, replyObj],
            };
          }
          return el;
        });
      }

      // создаем объект, который нужно передать на обновление suggestion
      const suggestionObj = {
        comments: changedComments,
      };

      resetForm({ values: '' });
      setReplyFormVisibility(false);

      dispatch(updateSuggestion({ id: suggestionId, suggestionObj }));
    },
  });

  return [formik];
};
