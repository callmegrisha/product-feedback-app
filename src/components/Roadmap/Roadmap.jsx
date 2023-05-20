import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { roadmap, viewAll } from './styles';
import { RoadmapList } from '../RoadmapList/RoadmapList';

export const Roadmap = () => {
  return (
    <Box {...roadmap}>
      <Flex justify='space-between' align='center' mb={6}>
        <Text textStyle='h3' color='custom.eastBay'>
          Roadmap
        </Text>
        <Link href='/' className='view-all' {...viewAll}>
          View
        </Link>
      </Flex>
      <RoadmapList />
    </Box>
  );
};
