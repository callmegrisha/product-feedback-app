import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentProfile } from '../../features/profile/profileSlice';
import {
  selectCurrentSuggestion,
  updateSuggestion,
} from '../../features/suggestions/suggestionsSlice';

export const useDeleteComment = (currentComment) => {
  const dispatch = useDispatch();
  const currentProfile = useSelector(selectCurrentProfile);
  const currentSuggestion = useSelector(selectCurrentSuggestion);

  const handleDeleteComment = (commentId) => {
    // забираю айди и комментарии из текущего suggestion
    const { id, comments } = currentSuggestion;
    let filteredComments = [];

    // если нужно удалить реплай
    if (currentComment.replyingTo) {
      // прохожусь в цикле по массиву комментариев
      filteredComments = comments.map((el) => {
        // если в объекте комментария уже есть массив replies
        // и в нем есть необходимый нам комментарий, на который мы отвечаем
        if (el.replies && el.replies.includes(currentComment)) {
          return {
            ...el,
            replies: el.replies.filter(
              (reply) => reply.content !== currentComment.content
            ),
          };
        }

        return el;
      });
    }

    // если это не реплай
    if (!currentComment.replyingTo) {
      // фильтрую оставляя все комментарии, айди которых не равны текущему
      filteredComments = comments.filter((comment) => comment.id !== commentId);
    }

    // создаю объект для передачи в thunk
    const suggestionObj = {
      comments: filteredComments,
    };

    // если пользователь подтверждает, то комментарий удаляется
    if (window.confirm('Are you sure you want to delete the comment?')) {
      dispatch(updateSuggestion({ id, suggestionObj }));
    }
  };

  return [currentProfile, handleDeleteComment];
};
