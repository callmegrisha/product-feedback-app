import { List, ListItem } from '@chakra-ui/react';
import { Suggestion } from '../Suggestion/Suggestion';

export const SuggestionsList = () => {
  return (
    <List spacing={5}>
      <ListItem>
        <Suggestion />
      </ListItem>
    </List>
  );
};
