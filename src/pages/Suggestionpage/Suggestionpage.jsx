import { Link, useNavigate } from 'react-router-dom';
import {
  Flex,
  Icon,
  Link as ChakraLink,
  Text,
  Box,
  Container,
  Button,
} from '@chakra-ui/react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { Suggestion } from '../../components/Suggestion';
import { Comments } from '../../components/Comments';
import { useOneSuggestion } from '../../features/suggestions/hooks/useOneSuggestion';

import { editFeedback } from './styles';
import { CommentBlock } from '../../components/CommentBlock';

const Suggestionpage = () => {
  const navigate = useNavigate();
  const { currentSuggestion } = useOneSuggestion();

  if (!currentSuggestion) return <h1>Loading...</h1>;

  return (
    <Box as='section' p='80px 0 129px'>
      <Container maxW={762}>
        <Flex as='header' align='center' justify='space-between' mb={6}>
          <Button
            __css={{}}
            type='button'
            display='flex'
            alignItems='center'
            onClick={() => navigate(-1)}
          >
            <Icon as={MdKeyboardArrowLeft} mr={3} />
            <Text as='span' textStyle='h4' color='custom.lynch'>
              Go Back
            </Text>
          </Button>
          <ChakraLink as={Link} textStyle='h4' to='/' {...editFeedback}>
            Edit Feedback
          </ChakraLink>
        </Flex>
        <Suggestion {...currentSuggestion} mb={6} />
        <Comments mb={6} />
        <CommentBlock currentSuggestion={currentSuggestion} />
      </Container>
    </Box>
  );
};

export default Suggestionpage;
