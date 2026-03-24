
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, FormField, Label } from 'semantic-ui-react';
import * as Yup from 'yup';
import LoginService from '../service/loginService';
import { addToken, removeToken } from '../store/actions/tokenActions';

export default function LoginPage() {

  const navigate = useNavigate();

  const token = useSelector(state => state?.token)
  const dispatch = useDispatch();

  let initialLoginValues = {
    username: '',
    password: ''
  }

  const service = useMemo(() => new LoginService(), []);

  useEffect(() => {
    if (token) {
      service.validateToken(token).then((res) => {
        if (res.status === 200)
          navigate("/admin");
        else
          dispatch(removeToken());
      });
    }
  }, [token, service, navigate, dispatch])

  function handleLoginButton(values) {
    service.login(values).then((res) => {
      if (res.status === 200) {
        dispatch(addToken(res.data))
        navigate("/admin");
      }
    });
  }

  const schema = Yup.object({
    username: Yup.string().min(3, 'Invalid username address').required('Username is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  return (
    <div className='login-dashboard'>

      <h1>Login Dashboard</h1>
      <div className="login-container">

        <Formik initialValues={initialLoginValues} validationSchema={schema} onSubmit={(values, { resetForm }) => {
          handleLoginButton(values);
        }}>
          <Form className="ui form">
            <FormField>
              <Field name="username" type="text" placeholder="Username" />
              <ErrorMessage name="username" render={error => <Label pointing basic color="red" content={error} />} />
            </FormField>
            <FormField>
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" render={error => <Label pointing basic color="red" content={error} />} />
            </FormField>
            <Button color="green" type="submit">Login</Button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
