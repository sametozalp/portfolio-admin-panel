import { ErrorMessage, Field, Formik } from "formik";
import { Button, Form, FormField, Label } from "semantic-ui-react";

export default function ContactPage() {
 let initialValues = {
    title: '',
    description: '',
    myEmail: ''
  }

  return (
    <div>
      <p className="page-title">İletişimi Düzenle</p>
      <Formik initialValues={initialValues} onSubmit={(values, { resetForm }) => { }} >
        <Form className="ui form">
          <FormField>
            <Field name="title" placeholder="Başlık"></Field>
            <ErrorMessage name="title" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          <FormField>
            <Field name="description" placeholder="Açıklama"></Field>
            <ErrorMessage name="description" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          <FormField>
            <Field name="myEmail" placeholder="E-mail"></Field>
            <ErrorMessage name="myEmail" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          <Button color="green" type="submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  )
}
