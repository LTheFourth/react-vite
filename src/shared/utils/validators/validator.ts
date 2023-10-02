/* eslint-disable @typescript-eslint/no-explicit-any */
import { IValidator } from '../interface/Iform';

export enum CommonError {
  REQUIRED = 'required',
}

export class Validator {
  static get Required(): IValidator {
    const validatorFn = (value: any): string | null => {
      if (!value.length || !value) {
        return CommonError.REQUIRED;
      }
      return null;
    };
    return { validatorFn };
  }
}
