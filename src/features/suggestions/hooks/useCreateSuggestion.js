import { useFormik } from 'formik';
import { createSuggestion } from '../suggestionsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useCreateSuggestion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      description: '',
    },
    onSubmit: (values, { resetForm }) => {
      // формируем объект для передачи его в thunk
      const feedbackObj = {
        id: Date.now(),
        upvotes: 0,
        status: 'suggestion',
        ...values,
      };

      resetForm({ values: '' });
      dispatch(createSuggestion(feedbackObj));
      navigate(`/suggestion/${feedbackObj.id}`);
    },
  });

  return { formik };
};
