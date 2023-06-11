import { SimpleGrid, Text } from '@chakra-ui/react';
import { Comment } from '../Comment';

export const CommentsList = ({ comments }) => {
  if (!comments || comments.length === 0) return <Text>No comments...😐</Text>;

  return (
    <SimpleGrid columns={1} spacing={8}>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </SimpleGrid>
  );
};
