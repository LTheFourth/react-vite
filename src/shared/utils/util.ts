/* eslint-disable @typescript-eslint/no-explicit-any */

export class FormBuilder {
    group(controls: IFormControl): FormGroup {
      const formGroup = new FormGroup();
      Object.keys(controls).forEach((key) => {
        const control = new FormControl({ key: key, value: controls[key][0] });
        formGroup.addControl(control);
      });
      return formGroup;
    }
  }

  export interface IFormControl {
    [key: string]: any | [any, any[]];
  }

  export class FormGroup {
    controls: FormControl[] = [];

    patchValue(value: any) {
      Object.keys(value).forEach((key) => {
        this.controls.find((c) => c.field === key)?.setValue(value[key]);
      });
    }

    addControl(control: FormControl) {
      this.controls.push(control);
    }

    get(control: string): FormControl | undefined {
      return this.controls.find((c) => c.field === control);
    }
  }

  export class FormControl {
    field!: string;
    value?: any;
    isError: boolean = false;
    isPristine: boolean = false;

    constructor(control: { key: string; value: any }) {
      this.field = control.key;
      this.value = control.value;
    }

    setValue(value: unknown) {
      this.value = value;
    }

    changePristine(status: boolean = false) {
      this.isPristine = status;
    }
  }