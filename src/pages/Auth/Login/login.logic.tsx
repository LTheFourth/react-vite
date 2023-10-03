// import { useNavigate } from 'react-router-dom';
import authService from 'src/shared/api/auth/auth.api';
import { useFormControl } from 'src/shared/utils/hooks/hooks';
import { Form } from 'src/shared/utils/model/form';
import { Validator } from 'src/shared/utils/validators/validator';

export default function useLoginLogic() {
  const loginForm: Form = new Form({
    email: useFormControl('', [Validator.Required]),
    password: useFormControl('', [Validator.Required]),
  });
//   const navigator = useNavigate();

  const login = () => {
    authService.login(loginForm.value).then((res) => {
      if (res) {
        // navigator('/home')
      }
    })
  };

  return { loginForm, login };
}
