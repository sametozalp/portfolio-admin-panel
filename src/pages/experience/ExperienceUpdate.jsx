import { ErrorMessage, Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, FormField, Label } from "semantic-ui-react";
import ExperienceService from "../../service/experienceService";

export default function ExperienceUpdate() {
  const { id } = useParams()
  const [experience, setExperience] = useState({
    id: 0,
    positionName: "",
    company: "",
    description: "",
    startDate: "",
    endDate: ""
  });

  useEffect(() => {
    const service = new ExperienceService()
    service.getById(id).then(r => {
      setExperience(r);
    });
  }, []);

  return (
    <div>
      <p className="page-title">Proje Güncelle</p>

      <Formik initialValues={experience} onSubmit={(values, { resetForm }) => { }} enableReinitialize>
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
