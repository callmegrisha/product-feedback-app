import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

export const useEditSuggestion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      description: '',
    },
    onSubmit: (values, { resetForm }) => {},
  });

  return { formik };
};
