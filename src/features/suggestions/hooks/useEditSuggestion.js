import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useOneSuggestion } from './useOneSuggestion';
import { useEffect } from 'react';
import { updateSuggestion } from '../suggestionsSlice';

export const useEditSuggestion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentSuggestion } = useOneSuggestion();

  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      description: '',
      status: '',
    },
    onSubmit: (values, { resetForm }) => {
      const { title, category, description, status } = values;
      const { id } = currentSuggestion;

      const suggestionObj = {
        title,
        category,
        description,
        status,
      };

      dispatch(updateSuggestion({ id, suggestionObj }));
      navigate(`/suggestion/${id}`);
    },
  });

  useEffect(() => {
    if (currentSuggestion) {
      formik.setValues({
        title: currentSuggestion.title,
        category: currentSuggestion.category,
        description: currentSuggestion.description,
        status: currentSuggestion.status,
      });
    }
  }, [currentSuggestion]);

  return { formik };
};
