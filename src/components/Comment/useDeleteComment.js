import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentProfile } from '../../features/profile/profileSlice';
import {
  selectCurrentSuggestion,
  updateSuggestion,
} from '../../features/suggestions/suggestionsSlice';

export const useDeleteComment = () => {
  const dispatch = useDispatch();
  const currentProfile = useSelector(selectCurrentProfile);
  const currentSuggestion = useSelector(selectCurrentSuggestion);

  const handleDeleteComment = (commentId) => {
    // забираю айди и комментарии из текущего suggestion
    const { id, comments } = currentSuggestion;

    // фильтрую оставляя все комментарии, айди которых не равны текущему
    const filteredComments = comments.filter(
      (comment) => comment.id !== commentId
    );

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
