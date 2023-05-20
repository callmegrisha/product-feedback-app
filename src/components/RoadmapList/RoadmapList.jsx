import { Flex, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { BsFillCircleFill } from 'react-icons/bs';

import { listItem, quantity } from './styles';

export const RoadmapList = () => {
  return (
    <List spacing={2}>
      <ListItem {...listItem}>
        <Flex align='center'>
          <ListIcon as={BsFillCircleFill} mr={4} w={2} color='custom.tacao' />
          <Text as='span'>Planned</Text>
          <Text as='span' {...quantity}>
            2
          </Text>
        </Flex>
      </ListItem>
      <ListItem {...listItem}>
        <Flex align='center'>
          <ListIcon
            as={BsFillCircleFill}
            mr={4}
            w={2}
            color='custom.cornflowerBlue'
          />
          <Text as='span'>In-Progress</Text>
          <Text as='span' {...quantity}>
            3
          </Text>
        </Flex>
      </ListItem>
      <ListItem {...listItem}>
        <Flex align='center'>
          <ListIcon as={BsFillCircleFill} mr={4} w={2} color='custom.malibu' />
          <Text as='span'>Live</Text>
          <Text as='span' {...quantity}>
            1
          </Text>
        </Flex>
      </ListItem>
    </List>
  );
};
