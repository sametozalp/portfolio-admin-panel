import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, FormField, Label } from "semantic-ui-react";
import ProjectService from "../../service/projectService";

export default function ProjectAdd() {

  let initialValue = {
    "title": "",
    "summary": "",
    "description": "",
    "features": "",
    "projectDate": "",
    "techStack": "",
    "liveDemoUrl": "",
    "sourceCodeUrl": "",
    "coverImage": ""
  }

  function submit(values) {
    const service = new ProjectService()
    service.add(values)
  }

  return (
    <div>
      <p className="page-title">Proje Ekle</p>

      <Formik initialValues={initialValue} onSubmit={(values, { resetForm }) => { submit(values) }}>
        <Form className="ui form">
          <FormField>
            <Field name="title" placeholder="Proje başlığı"></Field>
            <ErrorMessage name="title" render={error =>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>

          <FormField>
            <Field name="summary" placeholder="Proje özeti"></Field>
            <ErrorMessage name="summary" render={error =>
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
            <Field name="features" placeholder="Proje Özellikleri"></Field>
            <ErrorMessage name="features" render={error =>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>

          <FormField>
            <Field name="projectDate" placeholder="Proje Tarihi"></Field>
            <ErrorMessage name="projectDate" render={error =>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>

          <FormField>
            <Field name="techStack" placeholder="Tech Stack"></Field>
            <ErrorMessage name="techStack" render={error =>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>

          <FormField>
            <Field name="liveDemoUrl" placeholder="Canlı Demo"></Field>
            <ErrorMessage name="liveDemoUrl" render={error =>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>

          <FormField>
            <Field name="sourceCodeUrl" placeholder="Kaynak Kodu"></Field>
            <ErrorMessage name="sourceCodeUrl" render={error =>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>

          <FormField>
            <Field name="coverImage" placeholder="Kapak Resmi"></Field>
            <ErrorMessage name="coverImage" render={error =>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>

          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
  )
}
