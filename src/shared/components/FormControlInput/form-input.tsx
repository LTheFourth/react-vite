import { IFormControl } from 'src/shared/utils/interface/Iform';
import { ErrorMsg } from '../ErrorMsg';

export default function FormControlInput({
  control = null,
  displayError = false,
  type = 'text',
  label = '',
  placeholder = label,
}: FormControlInputProp) {
  if (!control) {
    return <></>;
  }
  return (
    <div className='form-control'>
      <label htmlFor=''>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={control.value}
        className={control.error() && displayError ? 'error' : ''}
        onChange={({ target }) => {
          control.setValue(target.value);
        }}
      />
      <ErrorMsg display={displayError} errorCode={control.error()} />
    </div>
  );
}

interface FormControlInputProp {
  control: IFormControl | null;
  label?: string;
  placeholder?: string;
  displayError?: boolean;
  type?: string;
}
