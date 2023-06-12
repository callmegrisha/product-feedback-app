import { BlockWrapper } from '../../UI/BlockWrapper/BlockWrapper';
import { CommentForm } from '../CommentForm';
import { useCreateComment } from './useCreateComment';

export const CommentBlock = ({ currentSuggestion }) => {
  const [formik, handleTextarea, limit] = useCreateComment(currentSuggestion);

  return (
    <BlockWrapper title='Add Comment'>
      <CommentForm
        formik={formik}
        handleTextarea={handleTextarea}
        limit={limit}
        submitBtnText='Post Comment'
      />
    </BlockWrapper>
  );
};
