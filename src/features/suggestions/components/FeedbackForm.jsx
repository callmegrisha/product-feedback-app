import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react';
import { BlockWrapper } from '../../../UI/BlockWrapper/BlockWrapper';

const categories = [
  { value: 'All', name: 'All' },
  { value: 'UI', name: 'UI' },
  { value: 'UX', name: 'UX' },
  { value: 'Enhancement', name: 'Enhancement' },
  { value: 'Bug', name: 'Bug' },
  { value: 'Feature', name: 'Feature' },
];

export const FeedbackForm = ({ formik, isEdit, title }) => {
  return (
    <BlockWrapper
      title={title}
      position='relative'
      padding='52px 42px 40px'
      _before={{
        content: '""',
        position: 'absolute',
        top: '-28px',
        left: '42px',
        width: '56px',
        height: '56px',
        backgroundImage: `url("/assets/${
          !isEdit ? 'icon-new-feedback' : 'icon-edit-feedback'
        }.svg")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <FormControl mb={6}>
          <FormLabel className='label'>Feedback Title</FormLabel>
          <FormHelperText className='label-description'>
            Add a short, descriptive headline
          </FormHelperText>
          <Input
            variant='purple'
            type='text'
            name='title'
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </FormControl>
        <FormControl mb={6}>
          <FormLabel className='label'>Category</FormLabel>
          <FormHelperText className='label-description'>
            Choose a category for your feedback
          </FormHelperText>
          <Select
            variant='purple'
            name='category'
            onChange={formik.handleChange}
            value={formik.values.category}
          >
            <option>Choose category</option>
            {categories.map((category) => (
              <option value={category.value} key={category.value}>
                {category.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl mb={8}>
          <FormLabel className='label'>Feedback Detail</FormLabel>
          <FormHelperText className='label-description'>
            Include any specific comments on what should be improved, added,
            etc.
          </FormHelperText>
          <Textarea
            variant='purple'
            name='description'
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </FormControl>
        <Flex alignItems='center' justifyContent='flex-end'>
          <Button variant='grey' mr={4} maxWidth={93}>
            Cancel
          </Button>
          <Button type='submit' variant='purple' maxWidth={144}>
            Add Feedback
          </Button>
        </Flex>
      </form>
    </BlockWrapper>
  );
};
