/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { IForm, IFormValue } from './interface/Iform';

export function useFormControl(initValue: any) {
  const [value, setValue] = useState(initValue);
  const getError = () => {
    return false;
  };
  return { value, setValue, getError };
}

export function useFormUpdater(form: IForm) {
  const setValue = (formValue: IFormValue) => {
    Object.keys(formValue).forEach((key) => {
      form[key].setValue(formValue[key]);
    });
  };
  return { setValue };
}
