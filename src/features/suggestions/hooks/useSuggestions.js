import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSuggestions } from '../suggestionsSlice';
import { selectSuggestionsInfo } from '../suggestionsSlice';

export const useSuggestions = () => {
  const dispatch = useDispatch();
  const { status, entities, sort, error } = useSelector(selectSuggestionsInfo);

  const sortObject = {
    mostUpvotes: (arr) => {
      const result = [...arr];
      return result.sort((a, b) => b.upvotes - a.upvotes);
    },
    leastUpvotes: (arr) => {
      const result = [...arr];
      return result.sort((a, b) => a.upvotes - b.upvotes);
    },
    mostComments: (arr) => {
      const result = [...arr];
      return result.sort((a, b) => {
        const aCommentsCount = a.comments?.length || 0;
        const bCommentsCount = b.comments?.length || 0;

        return bCommentsCount - aCommentsCount;
      });
    },
    leastComments: (arr) => {
      const result = [...arr];
      return result.sort((a, b) => {
        const aCommentsCount = a.comments?.length || 0;
        const bCommentsCount = b.comments?.length || 0;

        return aCommentsCount - bCommentsCount;
      });
    },
  };

  useEffect(() => {
    dispatch(getAllSuggestions());
  }, [dispatch]);

  const sortFunction = sortObject[sort];
  const sortedEntities = sortFunction(entities);

  return { status, sortedEntities, error };
};
