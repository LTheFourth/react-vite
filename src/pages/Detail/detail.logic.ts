/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { MoviesAPI } from 'src/shared/api/movies/movies.api';
import { useParams } from 'react-router-dom';
import { FormBuilder } from 'src/shared/utils/util';


const fb = new FormBuilder();
export default function useDetailPageLogic(isDetail: boolean) {
  const [formValueKey, setReRender] = useState<string>();
  const { id } = useParams();
  const formRef = useRef(
    fb.group({
      name: [''],
      thumbnail: [''],
      director: [''],
    })
  );

  useEffect(() => {
    if (isDetail && id) {
      MoviesAPI.get(id).then((response) => {
        if(response.data)

        formRef.current.patchValue({
          name: response.data.name,
          thumbnail: response.data.thumbnail,
          director: response.data.director,
        });
        setReRender(JSON.stringify(formRef));
      });
    }
  }, []);

  const setFormValue = (control: string, value: any) => {
    formRef.current.get(control)?.setValue(value);
    setReRender(JSON.stringify(formRef.current));
  };

  const setControlValue = (control: string, value: any) => {
    formRef.current.get(control)?.setValue(value);
  };

  return {
    prop: { form: formRef.current },
    state: { formValueKey },
    fn: { setFormValue, setControlValue },
  };
}
