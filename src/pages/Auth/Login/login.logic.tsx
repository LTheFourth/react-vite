import { useContext, useState } from 'react';
import { GlobalContext } from 'src/App';
import authSession from 'src/core/auth/auth-session.service';
import authService from 'src/shared/api/auth/auth.api';
import { useFormControl } from 'src/shared/utils/hooks/hooks';
import { Form } from 'src/shared/utils/model/form';
import { Validator } from 'src/shared/utils/validators/validator';

export default function useLoginLogic() {
  const { isAuth } = useContext(GlobalContext);
  const [submitted, setSubmitted] = useState(false);

  const loginForm: Form = new Form({
    email: useFormControl('', [Validator.Required]),
    password: useFormControl('', [Validator.Required]),
  });

  const login = () => {
    setSubmitted(true);
    if (loginForm.errors) {
      return;
    }
    authService.login(loginForm.value).then((res) => {
      if (res) {
        authSession.setCurrentUser(res.data);
        isAuth.setValue(authSession.isLoggedIn);
      }
    });
  };

  return { loginForm, login, submitted };
}
