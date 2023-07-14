import { Grid } from '@chakra-ui/react';

import { RoadmapColumn } from '../RoadmapColumn';
import { useSuggestionsByStatus } from '../../features/suggestions/hooks/useSuggestionsByStatus';

export const RoadmapBoard = () => {
  const [planned, inProgress, live] = useSuggestionsByStatus();

  return (
    <Grid templateColumns='repeat(3, 1fr)' gap='30px'>
      <RoadmapColumn title='Planned' description='Ideas prioritized for research' suggestions={planned}/>
      <RoadmapColumn title='In-Progress' description='Currently being developed' suggestions={inProgress}/>
      <RoadmapColumn title='Live' description='Released features' suggestions={live}/>
    </Grid>
  )
}
