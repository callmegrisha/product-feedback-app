import { Tag } from '@chakra-ui/react';
import { styles } from './styles';

export const BaseTag = ({ text }) => {
  return (
    <Tag textStyle='smBody' {...styles}>
      {text}
    </Tag>
  );
};
