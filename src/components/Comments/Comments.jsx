import { useSelector } from 'react-redux';

import { CommentsList } from '../CommentsList';
import { BlockWrapper } from '../../UI/BlockWrapper/BlockWrapper';
import { selectCurrentSuggestion } from '../../features/suggestions/suggestionsSlice';

export const Comments = ({ ...props }) => {
  const { comments } = useSelector(selectCurrentSuggestion);
  const title = `${comments ? comments.length : 0} Comments`;
  return (
    <BlockWrapper title={title} {...props}>
      <CommentsList comments={comments} />
    </BlockWrapper>
  );
};
