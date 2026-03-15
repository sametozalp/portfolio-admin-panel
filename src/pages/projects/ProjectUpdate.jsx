import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Checkbox, FormField, Icon, Image, Label } from "semantic-ui-react";
import ProjectService from "../../service/projectService";

export default function ProjectUpdate() {

  const { id } = useParams()
  const [project, setProject] = useState({
    "title": "",
    "summary": "",
    "description": "",
    "features": "",
    "projectDate": "",
    "techStack": "",
    "liveDemoUrl": "",
    "sourceCodeUrl": ""
  });
  const service = useMemo(() => new ProjectService(), [])

  useEffect(() => {
    service.getById(id).then(r => {
      setProject(r);
    });
  }, [service, id]);

  function submit(values) {
    service.update(project.id, values);
  }

  return (
    <div>
      <p className="page-title">Projeyi Güncelle</p>

      <Formik initialValues={project} onSubmit={(values, { resetForm }) => { submit(values) }} enableReinitialize>
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
            <Field as="textarea" name="description" placeholder="Açıklama"></Field>
            <ErrorMessage name="description" render={error =>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>

          <FormField>
            <Field as="textarea" name="features" placeholder="Proje Özellikleri"></Field>
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
          <Button color="green" type="submit">Güncelle</Button>
        </Form>
      </Formik>

      <Formik
        enableReinitialize
      >
        <Form className="ui form">
          {
            project.images?.map((img, index) => (
              <FormField key={index} className="update-image-row">
                <Label>Sıra Numarası: {img.orderNumber}</Label>
                <Button><Icon name="chevron down" /></Button>
                <Button><Icon name="chevron up" /></Button>
                <Image
                  src={img.url || '/images/image.png'}
                  size='medium'
                  style={{ width: '150px', height: '100px', objectFit: 'cover' }}
                />
                <Checkbox label={{ children: 'Make cover image' }} checked={true}  /*onChange={(e, data) => setIsCover(data.checked)}*/ />
                <Button content="Sil" icon="trash" labelPosition="left" size="mini" color="red" /*onClick={() => handleDeleteProject(e.id)}*/ />
              </FormField>
            ))
          }

          {/* <FormField style={{ marginTop: "20px" }}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.currentTarget.files && e.currentTarget.files[0]) {
                  //newPhoto.current = e.currentTarget.files[0];
                }
              }}
            />
          </FormField> */}
        </Form>
      </Formik>
    </div>
  )
}
