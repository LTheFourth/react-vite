/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IForm {
  [key: string]: IFormControl | any;
  getFormValue: () => any;
}

export interface IFormControl {
  value: any;
  setValue: (value?: any) => void;
}

export interface IFormValue {
  [key: string]: any;
}
