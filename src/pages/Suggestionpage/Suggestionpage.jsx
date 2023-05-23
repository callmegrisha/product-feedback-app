import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
import {
  getOneSuggestion,
  selectCurrentSuggestion,
} from '../../features/suggestions/suggestionsSlice';

import { editFeedback } from './styles';
import { Comments } from '../../components/Comments';

const Suggestionpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentSuggestion = useSelector(selectCurrentSuggestion);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneSuggestion(id));
  }, [dispatch, id]);

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
        <Comments />
      </Container>
    </Box>
  );
};

export default Suggestionpage;
