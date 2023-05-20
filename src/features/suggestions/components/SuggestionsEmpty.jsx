import { Flex, Image, Text } from '@chakra-ui/react';
import emptyIllustration from '../../../assets/suggestions/illustration-empty.svg';

export const SuggestionsEmpty = () => {
  return (
    <Flex
      justify='center'
      align='center'
      minH={600}
      backgroundColor='white'
      borderRadius='10px'
      padding='76px 25px'
    >
      <Flex direction='column' maxW={410} textAlign='center' align='center'>
        <Image
          src={emptyIllustration}
          alt='There is no feedback yet.'
          maxW='130px'
          mb={58}
        />
        <Text as='h1' textStyle='h1' mb={4} color='custom.eastBay'>
          There is no feedback yet.
        </Text>
        <Text textStyle='lgBody' color='#647196'>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </Text>
      </Flex>
    </Flex>
  );
};
