import { Flex, Icon, Text } from '@chakra-ui/react';
import { BsFillCircleFill } from 'react-icons/bs';

export const ColoredDotPhrase = ({ color, text }) => {
  return (
    <Flex align='center'>
      <Icon
        as={BsFillCircleFill}
        mr={4}
        w={2}
        color={color}
      />
      <Text as='span' color='custom.lynch'>{text}</Text>
    </Flex>
  )
}
