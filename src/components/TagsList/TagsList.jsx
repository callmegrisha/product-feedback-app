import { List, ListItem } from '@chakra-ui/react';
import { BaseTag } from '../../UI/BaseTag';
import { tagsList } from './styles';

const tags = [
  { id: 0, name: 'All', clickable: true },
  { id: 1, name: 'UI', clickable: true },
  { id: 2, name: 'UX', clickable: true },
  { id: 3, name: 'Enhancement', clickable: true },
  { id: 4, name: 'Bug', clickable: true },
  { id: 5, name: 'Feature', clickable: true },
];

export const TagsList = () => {
  return (
    <List {...tagsList}>
      {tags.map((tag) => (
        <ListItem key={tag.id}>
          <BaseTag text={tag.name} clickable={tag.clickable} />
        </ListItem>
      ))}
    </List>
  );
};
