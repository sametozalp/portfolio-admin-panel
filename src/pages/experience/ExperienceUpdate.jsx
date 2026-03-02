import { ErrorMessage, Field, Formik } from "formik";
import { Button, Form, FormField, Label } from "semantic-ui-react";

export default function ExperienceUpdate() {
  let initialValue = {
    id:0,
    positionName: "",
    company: "",
    description: "",
    startDate: "",
    endDate: ""
  }

  return (
    <div>
      <p className="page-title">Proje Ekle</p>

      <Formik initialValues={initialValue} onSubmit={(values, { resetForm }) => { }}>
        <Form className="ui form">
          <FormField>
            <Field name="positionName" placeholder="Pozisyon adı"></Field>
            <ErrorMessage name="positionName" render={error =>
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
            <Field name="company" placeholder="Şirket adı"></Field>
            <ErrorMessage name="company" render={error =>
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
