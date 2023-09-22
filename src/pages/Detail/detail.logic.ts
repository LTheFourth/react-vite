import { useEffect } from 'react';
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';

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

  patchValue(value : any){
    Object.keys(value).forEach(key => {
      this.controls.find(c => c.field === key)?.setValue(value[key])
    })
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

const fb = new FormBuilder();

export default function useDetailPageLogic() {
  const formRef = useRef(
    fb.group({
      name: [''],
      thumbnail: [''],
      director: [''],
    })
  );
  const [formValueKey, setReRender] = useState<string>();

  useEffect(() => {
    formRef.current.patchValue({
      name : 'HEHE',
      thumbnail : 'hehe1',
      director : 'hehe2'
    })
    setReRender(JSON.stringify(formRef))
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
