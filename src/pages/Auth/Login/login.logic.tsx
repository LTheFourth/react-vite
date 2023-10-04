// import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from 'src/App';
import authSession from 'src/core/auth/auth-session.service';
import authService from 'src/shared/api/auth/auth.api';
import { useFormControl } from 'src/shared/utils/hooks/hooks';
import { Form } from 'src/shared/utils/model/form';
import { Validator } from 'src/shared/utils/validators/validator';

export default function useLoginLogic() {
  const globalState = useContext(GlobalContext);
  const isAuth = globalState.isAuth

  const loginForm: Form = new Form({
    email: useFormControl('', [Validator.Required]),
    password: useFormControl('', [Validator.Required]),
  });
  // const navigator = useNavigate();

  const login = () => {
    authService.login(loginForm.value).then((res) => {
      if (res) {
        authSession.setCurrentUser(res.data);
        // globalState.isAuth.setValue(true);
        isAuth.setValue(authSession.isLoggedIn)
        // setValue(authSession);
      }
    });
  };

  return { loginForm, login };
}
