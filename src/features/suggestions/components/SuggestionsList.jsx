import { List, ListItem } from '@chakra-ui/react';
import { Suggestion } from '../../../components/Suggestion/Suggestion';
import { useSuggestions } from '../hooks/useSuggestions';
import { SuggestionsSkeleton } from './SuggestionsSkeleton';
import { SuggestionsEmpty } from './SuggestionsEmpty';

export const SuggestionsList = () => {
  const { status, entities, error } = useSuggestions();

  return (
    <List spacing={5}>
      {entities.map((suggestion) => (
        <ListItem key={suggestion.id}>
          <Suggestion {...suggestion} />
        </ListItem>
      ))}
      {status === 'loading' &&
        [...Array(12)].map((_, index) => (
          <ListItem key={index}>
            <SuggestionsSkeleton />
          </ListItem>
        ))}
      {(entities.length === 0 || error) && <SuggestionsEmpty />}
    </List>
  );
};
