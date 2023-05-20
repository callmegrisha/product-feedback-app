import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSuggestions } from '../suggestionsSlice';
import { selectSuggestionsInfo } from '../suggestionsSlice';

export const useSuggestions = () => {
  const dispatch = useDispatch();
  const { status, entities, error } = useSelector(selectSuggestionsInfo);

  useEffect(() => {
    dispatch(getAllSuggestions());
  }, [dispatch]);

  return { status, entities, error };
};
