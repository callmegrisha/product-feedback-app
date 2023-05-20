import { Tag } from '@chakra-ui/react';
import { styles } from './styles';
import { useSuggestionsByCategory } from '../../features/suggestions/hooks/useSuggestionsByCategory';

export const BaseTag = ({ text }) => {
  const { handleCategory } = useSuggestionsByCategory();

  return (
    <Tag textStyle='smBody' {...styles} onClick={() => handleCategory(text)}>
      {text}
    </Tag>
  );
};
