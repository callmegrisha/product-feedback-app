import { List, ListItem } from '@chakra-ui/react';
import { Suggestion } from '../../../components/Suggestion/Suggestion';
import { useSuggestions } from '../hooks/useSuggestions';
import { SuggestionsSkeleton } from './SuggestionsSkeleton';
import { SuggestionsEmpty } from './SuggestionsEmpty';

export const SuggestionsList = () => {
  const { status, sortedEntities = [], error } = useSuggestions();

  return (
    <List spacing={5}>
      {sortedEntities.map((suggestion) => (
        <ListItem key={suggestion.id}>
          <Suggestion {...suggestion} link />
        </ListItem>
      ))}
      {status &&
        status === 'loading' &&
        [...Array(12)].map((_, index) => (
          <ListItem key={index}>
            <SuggestionsSkeleton />
          </ListItem>
        ))}
      {(sortedEntities.length === 0 || error) && <SuggestionsEmpty />}
    </List>
  );
};
