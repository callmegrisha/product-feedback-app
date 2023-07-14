import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { roadmapBack, roadmapHeader } from './styles';
import { RoadmapBoard } from '../../components/RoadmapBoard';

const RoadmapPage = () => {
  const navigate = useNavigate();

  return (
    <Box as='section' p='92px 0 187px'>
      <Container maxW={1142}>
        <Flex {...roadmapHeader}>
          <Box color='white'>
            <Button
              __css={{}}
              type="button"
              onClick={() => navigate(-1)}
              {...roadmapBack}
            >
              <Icon as={MdKeyboardArrowLeft} mr={3} />
              <Text as="span" textStyle="h4">Go Back</Text>
            </Button>
            <Text as='h1' textStyle='h1'>Roadmap</Text>
          </Box>
          <Button as={RouterLink} to="/suggestion/new" variant="purple" ml="auto">+ Add FeedBack</Button>
        </Flex>
        <RoadmapBoard />
      </Container>
    </Box>
  )
}

export default RoadmapPage;