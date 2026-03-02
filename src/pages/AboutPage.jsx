import { ErrorMessage, Field, Formik } from "formik";
import { Button, Form, FormField, Label } from "semantic-ui-react";

export default function AboutPage() {
   let initialValues = {
    title: '',
    description: '',
    profileImageUrl: '',
    skills: ''
  }

  return (
    <div>
      <p className="page-title">Hakkımda Düzenle</p>
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
            <Field name="profileImageUrl" placeholder="Profil Resmi URL"></Field>
            <ErrorMessage name="profileImageUrl" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          <FormField>
            <Field name="skills" placeholder="Yetenekler"></Field>
            <ErrorMessage name="skills" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          <Button color="green" type="submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  )
}
