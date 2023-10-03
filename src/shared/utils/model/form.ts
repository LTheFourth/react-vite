import { IForm, IFormValue } from '../interface/Iform';

/* eslint-disable @typescript-eslint/no-explicit-any */

export class Form {
  controls: IForm = {};
  constructor(iform?: IForm) {
    if (iform) {
      this.controls = iform;
    }
  }

  get value(): any {
    return Object.keys(this.controls).reduce((value: any, key) => {
      value[key] = this.controls[key].value;
      return value;
    }, {});
  }

  setValue(value: IFormValue) {
    Object.keys(value).forEach((key) => {
      this.controls[key].setValue(value[key]);
    });
  }

  getValue(control: string) {
    return this.controls[control]?.value;
  }

  get errors() {
    const errs: any = Object.keys(this.controls).reduce((value: any, key) => {
      const error = this.controls[key].error();
      if (error) {
        value[key] = error;
      }
      return value;
    }, {});
    return Object.keys(errs).length ? errs : null;
  }
}
