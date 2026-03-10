import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, FormField, Label } from "semantic-ui-react";
import EducationService from "../../service/educationService";

export default function EducationUpdate() {

  const { id } = useParams()
  const [education, setEducation] = useState({
    major: "",
    school: "",
    description: "",
    startDate: "",
    endDate: ""
  });
  const service = useMemo(() => new EducationService(), [])

  useEffect(() => {
    service.getById(id).then(r => {
      setEducation(r);
    });
  }, []);

  function submit(values) {
    service.update(education.id, values)
  }

  return (
    <div>
      <p className="page-title">Eğitimi Güncelle</p>

      <Formik initialValues={education} onSubmit={(values) => { submit(values) }} enableReinitialize>
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

          <Button color="green" type="submit">Güncelle</Button>
        </Form>
      </Formik>
    </div>
  )
}
