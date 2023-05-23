import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';

export const Comment = ({ comment }) => {
  return (
    <Flex justify='space-between'>
      <Box mr={8}>
        <Avatar name={comment.user.name} src={comment.user.image} />
      </Box>
      <Box w='100%'>
        <Flex align='flex-start' justify='space-between' mb={4}>
          <Flex direction='column'>
            <Text
              as='span'
              display='block'
              textStyle='h4'
              color='custom.eastBay'
            >
              {comment.user.name}
            </Text>
            <Text
              as='span'
              display='block'
              textStyle='h4'
              color='custom.lynch'
              fontWeight='400'
            >
              @{comment.user.username}
            </Text>
          </Flex>
          <Button
            __css={{}}
            type='button'
            textStyle='smBody'
            fontWeight='600'
            color='custom.royalBlue'
            _hover={{
              textDecoration: 'underline',
            }}
          >
            Reply
          </Button>
        </Flex>
        <Text textStyle='mdBody' color='custom.lynch'>
          {comment.content}
        </Text>
      </Box>
    </Flex>
  );
};
