import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Checkbox, FormField, Icon, Image, Label } from "semantic-ui-react";
import ProjectImageService from "../../service/projectImageService";
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
  const projectImageservice = useMemo(() => new ProjectImageService(), [])

  useEffect(() => {
    getProjectData();
  }, []);

  function getProjectData() {
    service.getById(id).then(r => {
      setProject(r);
    });
  }

  function handleUpdateProject(values) {
    service.update(project.id, values);
  }

  function handleDeleteProjectImage(id) {
    const isConfirmed = window.confirm("Emin misin ?");
    if (isConfirmed)
      projectImageservice.delete(id).then(() => getProjectData())
  }

  function handleUpOrderNumber(id) {
    projectImageservice.upOrderNumber(id).then(() => getProjectData());
  }

  function handleDownOrderNumber(id) {
    projectImageservice.downOrderNumber(id).then(() => getProjectData());
  }

  function handleSetCoverImage(id) {
    projectImageservice.setCoverImage(id).then(() => getProjectData());
  }

  function handleSetShowableImage(id, value) {
    projectImageservice.setShowableImage(id, value).then(() => getProjectData());
  }

  return (
    <div>
      <p className="page-title">Projeyi Güncelle</p>

      <Formik initialValues={project} onSubmit={(values, { resetForm }) => { handleUpdateProject(values) }} enableReinitialize>
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
        initialValues={{ images: project.images || [] }}
        enableReinitialize
      >
        <Form className="ui form" >
          {
            project.images?.map((img, index) => (
              <FormField key={index} className="update-image-row">
                <Label>Sıra Numarası: {img.orderNumber}</Label>
                <Button onClick={() => handleDownOrderNumber(img.id)}><Icon name="chevron down" /></Button>
                <Button onClick={() => handleUpOrderNumber(img.id)}><Icon name="chevron up" /></Button>
                <Image
                  src={img.url || '/images/image.png'}
                  size='medium'
                  style={{ width: '150px', height: '100px', objectFit: 'cover' }}
                />
                <Checkbox label={{ children: 'Kapak resmi yap' }} checked={img.isCoverImage} onChange={(e, data) => handleSetCoverImage(img.id)} />
                <Button content="Sil" icon="trash" labelPosition="left" size="mini" color="red" onClick={() => handleDeleteProjectImage(img.id)} />
                <Checkbox label={{ children: 'Gizle' }} checked={!img.showable} onChange={(e, data) => handleSetShowableImage(img.id, !img.showable)} />
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
