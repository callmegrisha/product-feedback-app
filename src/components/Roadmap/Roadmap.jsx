import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

import { RoadmapList } from '../RoadmapList/RoadmapList';
import { roadmap, viewAll } from './styles';

export const Roadmap = () => {
  return (
    <Box {...roadmap}>
      <Flex justify='space-between' align='center' mb={6}>
        <Text textStyle='h3' color='custom.eastBay'>
          Roadmap
        </Text>
        <Link as={RouterLink} to='/roadmap' className='view-all' {...viewAll}>
          View
        </Link>
      </Flex>
      <RoadmapList />
    </Box>
  );
};
