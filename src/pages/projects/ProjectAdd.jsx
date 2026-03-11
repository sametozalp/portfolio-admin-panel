import { ErrorMessage, Field, Form, Formik } from "formik";
import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormField, Icon, Input, Label } from "semantic-ui-react";
import ProjectService from "../../service/projectService";

export default function ProjectAdd() {

  const [photoInputs, setPhotoInputs] = useState([0]);
  const photosRef = useRef([]);
  const navigate = useNavigate();

  const addPhotoInput = () => {
    setPhotoInputs([...photoInputs, photoInputs.length]);
  };

  let initialValue = {
    "title": "",
    "summary": "",
    "description": "",
    "features": "",
    "projectDate": "",
    "techStack": "",
    "liveDemoUrl": "",
    "sourceCodeUrl": ""
  }

  const service = useMemo(() => new ProjectService(), [])

  function submit(values) {
    service.add(values, photosRef.current).then(r=> {
      navigate("/admin/projects");
    })
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

          {photoInputs.map((i) => (
            <FormField key={i} style={{ marginTop: "20px" }}>
              <Input>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.currentTarget.files && e.currentTarget.files[0]) {
                      photosRef.current[i] = e.currentTarget.files[0];
                    }
                  }}
                />
                <Button type="button" icon onClick={addPhotoInput}>
                  <Icon name="plus" />
                </Button>
              </Input>
            </FormField>
          ))}
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
  )
}
