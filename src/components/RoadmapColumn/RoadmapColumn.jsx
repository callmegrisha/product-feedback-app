import { Box, Flex, GridItem, Text } from '@chakra-ui/react';

import { RoadmapCard } from '../RoadmapCard';
import { columnDescription, columnTitle } from './styles';

export const RoadmapColumn = ({ title, description, suggestions = [] }) => {
  return (
    <GridItem>
      <Box mb={8}>
        <Text as='span' {...columnTitle}>{title}</Text>
        <Text as='p' {...columnDescription}>{description}</Text>
      </Box>
      <Flex direction='column' gap={6}>
        {suggestions.map(suggestion => <RoadmapCard key={suggestion.id} {...suggestion} />)}
      </Flex>
    </GridItem>
  )
}
