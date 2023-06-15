import { useDispatch } from 'react-redux';
import { deleteSuggestion } from '../suggestionsSlice';
import { useNavigate } from 'react-router-dom';

export const useDeleteSuggestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteSuggestion = (suggestionId) => {
    if (window.confirm('Are you sure you want to delete the suggestion?')) {
      dispatch(deleteSuggestion(suggestionId));
    }
    navigate('/');
  };

  return [handleDeleteSuggestion];
};
