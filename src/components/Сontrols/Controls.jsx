import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Flex, Image, Text } from '@chakra-ui/react';

import { ControlsSort } from '../ControlsSort';
import { selectSuggestionsInfo } from '../../features/suggestions/suggestionsSlice';
import bulb from '../../assets/suggestions/icon-suggestions.svg';
import { styles, quantity } from './styles';

export const Controls = ({ ...props }) => {
  const { entities } = useSelector(selectSuggestionsInfo);

  return (
    <Flex {...styles} {...props}>
      <Flex align="center" mr={38} {...quantity}>
        <Image src={bulb} alt="bulb icon" mr={4} />
        <Text as="span" textStyle="h3" color="white">
          {entities.length || 0} Suggestions
        </Text>
      </Flex>
      <ControlsSort />
      <Button as={Link} to="/suggestion/new" variant="purple" ml="auto">
        + Add FeedBack
      </Button>
    </Flex>
  );
};
