import { useState } from 'react';
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Validator } from 'src/shared/utils/validators/validator';
import { useFormControl } from 'src/shared/utils/hooks/hooks';
import { Form } from 'src/shared/utils/model/form';
import MovieService from 'src/shared/api/movies/movies.api';

export default function useDetailPageLogic(isDetail: boolean) {
  const form: Form = new Form({
    name: useFormControl('', [Validator.Required]),
    thumbnail: useFormControl('', [Validator.Required]),
    director: useFormControl('', [Validator.Required]),
  });
  const navigate = useNavigate();

  const { id } = useParams();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isDetail && id) {
      MovieService.get(id).then((response) => {
        if (response.data) {
          form.setValue({
            name: response.data.name,
            thumbnail: response.data.thumbnail,
            director: response.data.director,
          });
        }
      });
    }
  }, []);

  const isFieldError = (control : string) => {
    return !!(form.controlError(control) && submitted);
  }

  const saveMovie = () => {
    setSubmitted(true);
    if(form.errors){
      return;
    }
    isDetail && id
      ? MovieService.update(id, form.value)
      : MovieService.save(form.value);
    navigate('/home');
  };

  const deleteMovie = () => {
    MovieService.delete(id!);
    navigate('/home');
  };

  return {
    form,
    isDetail,
    navigate,
    saveMovie,
    deleteMovie,
    submitted,
    isFieldError
  };
}
