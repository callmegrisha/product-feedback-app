import { Tag } from '@chakra-ui/react';
import { styles } from './styles';
import { useSuggestionsByCategory } from '../../features/suggestions/hooks/useSuggestionsByCategory';

export const BaseTag = ({ text, clickable }) => {
  const { handleCategory } = useSuggestionsByCategory();

  if (clickable) {
    return (
      <Tag textStyle='smBody' {...styles} onClick={() => handleCategory(text)}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag textStyle='smBody' {...styles}>
      {text}
    </Tag>
  );
};
