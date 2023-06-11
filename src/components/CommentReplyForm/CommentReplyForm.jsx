import { Button, Flex, Textarea } from '@chakra-ui/react';
import { useCreateReply } from './useCreateReply';

export const CommentReplyForm = ({ comment, setReplyForm }) => {
  const [formik] = useCreateReply(comment, setReplyForm);

  return (
    <Flex
      w='100%'
      maxW={586}
      justifySelf='flex-end'
      as='form'
      onSubmit={formik.handleSubmit}
    >
      <Textarea
        variant='purple'
        name='reply'
        onChange={formik.handleChange}
        value={formik.values.reply}
        maxLength={225}
        mr={4}
      />
      <Button type='submit' variant='purple' maxW={117}>
        Post Reply
      </Button>
    </Flex>
  );
};
