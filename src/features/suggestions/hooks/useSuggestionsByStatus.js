import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSuggestions, selectSuggestionsInfo } from '../suggestionsSlice';

export const useSuggestionsByStatus = () => {
  const dispatch = useDispatch();
  const { entities } = useSelector(selectSuggestionsInfo);

  const planned = entities.filter(entity => entity.status === 'planned');
  const inProgress = entities.filter(entity => entity.status === 'in-progress');
  const live = entities.filter(entity => entity.status === 'live');

  useEffect(() => {
    dispatch(getAllSuggestions());
  }, [])

  return [planned, inProgress, live];
};