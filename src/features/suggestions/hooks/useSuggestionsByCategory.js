import { useDispatch } from 'react-redux';
import {
  getAllSuggestions,
  getSuggestionByCategory,
} from '../suggestionsSlice';

export const useSuggestionsByCategory = () => {
  const dispatch = useDispatch();

  const handleCategory = async (category) => {
    if (category.toLowerCase() === 'all') {
      await dispatch(getAllSuggestions());
    } else {
      await dispatch(getSuggestionByCategory(category));
    }
  };

  return { handleCategory };
};
