/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IForm {
  [key: string]: IFormControl;
}

export interface IValidator {
  validatorFn?: (value?: any) => string | null;
}

export interface IFormControl {
  value: any;
  error: () => string[] | null;
  setValue: (value?: any) => void;
  setValidator: (validator: IValidator[]) => void;
}

export interface IFormValue {
  [key: string]: any;
}
