import { useNavigate } from 'react-router-dom';
import { Box, Button, Icon, Text } from '@chakra-ui/react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { FeedbackForm } from '../../features/suggestions/components/FeedbackForm';
import { useCreateSuggestion } from '../../features/suggestions/hooks/useCreateSuggestion';
import { useEditSuggestion } from '../../features/suggestions/hooks/useEditSuggestion';

const FeedbackPage = ({ isEdit }) => {
  const navigate = useNavigate();
  const { formik: formikCreate } = useCreateSuggestion();
  const { formik: formikEdit } = useEditSuggestion();

  return (
    <Box as='section' padding='92px 0' maxW={540} m='0 auto'>
      <Button
        __css={{}}
        type='button'
        display='flex'
        alignItems='center'
        mb={68}
        onClick={() => navigate(-1)}
      >
        <Icon as={MdKeyboardArrowLeft} mr={3} />
        <Text as='span' textStyle='h4' color='custom.lynch'>
          Go Back
        </Text>
      </Button>
      {isEdit ? (
        <FeedbackForm
          isEdit
          title='Edit Feedback'
          submitText='Save Feedback'
          formik={formikEdit}
        />
      ) : (
        <FeedbackForm
          title='Create New Feedback'
          submitText='Add Feedback'
          formik={formikCreate}
        />
      )}
    </Box>
  );
};

export default FeedbackPage;
