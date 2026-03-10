import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, FormField, Label } from "semantic-ui-react";
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
  const service = useMemo(() => new ExperienceService(), []);

  useEffect(() => {
    service.getById(id).then(r => {
      setExperience(r);
    });
  }, []);

  function submit(values) {
    service.update(experience.id, values)
  }

  return (
    <div>
      <p className="page-title">Deneyimi Güncelle</p>

      <Formik initialValues={experience} onSubmit={(values) => { submit(values) }} enableReinitialize>
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

          <Button color="green" type="submit">Güncelle</Button>
        </Form>
      </Formik>
    </div>
  )
}
