import './login.component.scss';
import useLoginLogic from './login.logic';

export default function LoginPage() {
  const logic = useLoginLogic();

  return (
    <div className='login-page'>
      <div className='card'>
        <div className='header'>
          <h1>Login</h1>
        </div>
        <div className='body flex flex-col'>
          <div className='form-control'>
            <input
              type='email'
              placeholder='Email'
              value={logic.loginForm.getValue('email')}
              onChange={({ target }) => {
                logic.loginForm.controls['email']?.setValue(target.value);
              }}
            />
          </div>
          <div className='form-control'>
            <input
              type='password'
              placeholder='Password'
              value={logic.loginForm.getValue('password')}
              onChange={({ target }) => {
                logic.loginForm.controls['password']?.setValue(target.value);
              }}
            />
          </div>
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
