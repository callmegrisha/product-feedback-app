import { List, ListItem } from '@chakra-ui/react';
import { BaseTag } from '../../UI/BaseTag';
import { tagsList } from './styles';

const tags = [
  { id: 0, name: 'All' },
  { id: 1, name: 'UI' },
  { id: 2, name: 'UX' },
  { id: 3, name: 'Enhancement' },
  { id: 4, name: 'Bug' },
  { id: 5, name: 'Feature' },
];

export const TagsList = () => {
  return (
    <List {...tagsList}>
      {tags.map((tag) => (
        <ListItem key={tag.id}>
          <BaseTag text={tag.name} />
        </ListItem>
      ))}
    </List>
  );
};
