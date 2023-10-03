/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';
import { IValidator } from '../interface/Iform';

export function useFormControl(
  initValue: any,
  initValidator: IValidator[] = []
) {
  const [value, setValue] = useState(initValue);
  const [validator, setValidator] = useState<IValidator[]>(initValidator);

  const error = () => {
    let error: string[] | null = null;
    validator?.forEach((v) => {
      const er = v.validatorFn?.(value);
      if (er) {
        error = error ? [...error, er] : [er];
      }
    });
    return error;
  };

  return { value, setValue, error, setValidator };
}

export function useDebounce(value: string, delay: number = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function useGlobalState<T>(initialValue?: any) {
  const [value, setValue] = useState<T>(initialValue);
  return { value, setValue };
}
