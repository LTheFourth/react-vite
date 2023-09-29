/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { MoviesAPI } from 'src/shared/api/movies/movies.api';
import { useNavigate, useParams } from 'react-router-dom';
import { IForm } from 'src/shared/utils/interface/Iform';
import { useFormControl, useFormUpdater } from 'src/shared/utils/util';

export default function useDetailPageLogic(isDetail: boolean) {
  const form: IForm = {
    name: useFormControl(''),
    thumbnail: useFormControl(''),
    director: useFormControl(''),

    getFormValue: () => {
      const value: any = {};
      Object.keys(form).every((key) => {
        if (typeof form[key] === 'function') {
          return false;
        }
        value[key] = form[key].value;
        return true;
      });
      return value;
    },
  };
  const navigate = useNavigate();
  const formUpdater = useFormUpdater(form);
  const { id } = useParams();

  useEffect(() => {
    if (isDetail && id) {
      MoviesAPI.get(id).then((response) => {
        if (response.data) {
          formUpdater.setValue({
            name: response.data.name,
            thumbnail: response.data.thumbnail,
            director: response.data.director,
          });
        }
      });
    }
  }, []);

  const saveMovie = () => {
    isDetail && id
      ? MoviesAPI.update(id, form.getFormValue())
      : MoviesAPI.save(form.getFormValue());
    navigate('/home');
  };

  const deleteMovie = () => {
    MoviesAPI.delete(id!);
    navigate('/home');
  };

  return {
    form,
    isDetail,
    navigate,
    saveMovie,
    deleteMovie,
  };
}
