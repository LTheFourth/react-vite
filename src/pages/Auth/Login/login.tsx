import './login.component.scss';
import useLoginLogic from './login.logic';
import { FormInput } from 'src/shared/components/FormControlInput';

export default function LoginPage() {
  const logic = useLoginLogic();

  return (
    <div className='login-page'>
      <div className='card'>
        <div className='header'>
          <h1>Login</h1>
        </div>
        <div className='body flex flex-col'>
          <FormInput
            label='Email'
            type='email'
            displayError={logic.submitted}
            control={logic.loginForm.control('email')}
          />
          <FormInput
            label='Password'
            type='password'
            displayError={logic.submitted}
            control={logic.loginForm.control('password')}
          />
        </div>
        <div className='action'>
          <button
            className='btn'
            onClick={() => {
              logic.login();
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
