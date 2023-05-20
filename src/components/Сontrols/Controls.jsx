import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { styles } from './styles';

import bulb from '../../assets/suggestions/icon-suggestions.svg';
import { useSelector } from 'react-redux';
import { selectSuggestionsInfo } from '../../features/suggestions/suggestionsSlice';
import { ControlsFilter } from '../ControlsFilter/ControlsFilter';

export const Controls = () => {
  const { entities } = useSelector(selectSuggestionsInfo);

  return (
    <Flex {...styles}>
      <Flex align='center' mr={38}>
        <Image src={bulb} alt='bulb icon' mr={4} />
        <Text as='span' textStyle='h3' color='white'>
          {entities.length || 0} Suggestions
        </Text>
      </Flex>
      <ControlsFilter />
      <Button variant='purple' ml='auto'>
        + Add FeedBack
      </Button>
    </Flex>
  );
};
