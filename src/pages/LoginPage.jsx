
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, FormField, Label } from 'semantic-ui-react';
import * as Yup from 'yup';

export default function LoginPage() {

  let initialLoginValues = {
    email: '',
    password: ''
  }

  const schema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  return (
    <div className='login-dashboard'>

      <h1>Login Dashboard</h1>
      <div className="login-container">

        <Formik initialValues={initialLoginValues} validationSchema={schema} onSubmit={(values, { resetForm }) => { }}>
          <Form className="ui form">
            <FormField>
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" render={error => <Label pointing basic color="red" content={error} />} />
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
