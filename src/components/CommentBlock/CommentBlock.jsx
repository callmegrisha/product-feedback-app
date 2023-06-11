import { BlockWrapper } from '../../UI/BlockWrapper/BlockWrapper';
import { useCreateComment } from './useCreateComment';
import { CommentForm } from '../CommentForm';

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
