import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, FormField, Label } from "semantic-ui-react";
import ProjectService from "../../service/projectService";

export default function ProjectUpdate() {

  const { id } = useParams()
  const [project, setProject] = useState({
    showable: "",
    title: "",
    summary: "",
    description: "",
    features: "",
    coverImage: "",
    images: "",
    projectDate: "",
    techStack: "",
    liveDemoUrl: "",
    sourceCodeUrl: ""
  });
  const service = useMemo(()=> new ProjectService(), [])

  useEffect(() => {
    service.getById(id).then(r => {
      setProject(r);
    });
  }, []);

  function submit(values) {
    service.update(project.id, values)
  }

  return (
    <div>
      <p className="page-title">Projeyi Güncelle</p>

      <Formik initialValues={project} onSubmit={(values) => { submit(values) }} enableReinitialize>
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

          <Button color="green" type="submit">Güncelle</Button>
        </Form>
      </Formik>
    </div>
  )
}
