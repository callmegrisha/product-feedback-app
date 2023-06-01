import { Button, Flex, Text, Textarea } from '@chakra-ui/react';

export const CommentForm = ({
  isEdit,
  limit,
  formik,
  handleTextarea,
  submitBtnText,
}) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <Textarea
        variant='purple'
        name={isEdit ? 'commentContent' : 'comment'}
        onChange={(e) => handleTextarea(e)}
        value={isEdit ? formik.values.commentContent : formik.values.comment}
        maxLength={225}
        mb={4}
      />
      <Flex justify='space-between' align='center'>
        <Text as='span' textStyle='mdBody' color='custom.lynch'>
          {225 - limit} characters left
        </Text>
        <Button type='submit' variant='purple'>
          {submitBtnText}
        </Button>
      </Flex>
    </form>
  );
};
