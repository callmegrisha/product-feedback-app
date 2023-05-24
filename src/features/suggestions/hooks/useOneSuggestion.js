import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getOneSuggestion, selectCurrentSuggestion } from '../suggestionsSlice';

export const useOneSuggestion = () => {
  const dispatch = useDispatch();
  const currentSuggestion = useSelector(selectCurrentSuggestion);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneSuggestion(id));
  }, [dispatch, id]);

  return { currentSuggestion };
};
