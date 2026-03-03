import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, FormField, Label } from "semantic-ui-react";
import EducationService from "../../service/educationService";

export default function EducationAdd() {
  let initialValue = {
    major: "",
    school: "",
    description: "",
    startDate: "",
    endDate: ""
  }

  function submit(values) {
    const service = new EducationService()
    service.add(values)
  }

  return (
    <div>
      <p className="page-title">Eğitim Ekle</p>

      <Formik initialValues={initialValue} onSubmit={(values, { resetForm }) => { submit(values)}}>
        <Form className="ui form">
          <FormField>
            <Field name="major" placeholder="Bölüm adı"></Field>
            <ErrorMessage name="major" render={error =>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>

          <FormField>
            <Field name="description" placeholder="Açıklama"></Field>
            <ErrorMessage name="description" render={error =>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>

          <FormField>
            <Field name="school" placeholder="Okul adı"></Field>
            <ErrorMessage name="school" render={error =>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>

          <FormField>
            <Field name="startDate" placeholder="Başlangıç Tarihi"></Field>
            <ErrorMessage name="startDate" render={error =>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>

          <FormField>
            <Field name="endDate" placeholder="Bitiş Tarihi"></Field>
            <ErrorMessage name="endDate" render={error =>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>

          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
  )
}
