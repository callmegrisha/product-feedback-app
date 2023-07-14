import { useSelector } from 'react-redux';
import { Flex, List, ListItem, Text } from '@chakra-ui/react';

import { 
  selectInProgressSuggestions,
  selectLiveSuggestions,
  selectPlannedSuggestions
} from '../../features/suggestions/suggestionsSlice';
import { ColoredDotPhrase } from '../../UI/ColoredDotPhrase';
import { listItem, quantity } from './styles';

export const RoadmapList = () => {
  const planned = useSelector(selectPlannedSuggestions);
  const inProgress = useSelector(selectInProgressSuggestions);
  const live = useSelector(selectLiveSuggestions);

  return (
    <List spacing={2}>
      <ListItem {...listItem}>
        <Flex align='center'>
          <ColoredDotPhrase
            color='custom.tacao'
            text='Planned'
          />
          <Text as='span' {...quantity}>
            {planned.length}
          </Text>
        </Flex>
      </ListItem>
      <ListItem {...listItem}>
        <Flex align='center'>
          <ColoredDotPhrase
            color='custom.cornflowerBlue'
            text='In-Progress'
          />
          <Text as='span' {...quantity}>
            {inProgress.length}
          </Text>
        </Flex>
      </ListItem>
      <ListItem {...listItem}>
        <Flex align='center'>
          <ColoredDotPhrase
            color='custom.malibu'
            text='Live'
          />
          <Text as='span' {...quantity}>
            {live.length}
          </Text>
        </Flex>
      </ListItem>
    </List>
  );
};
