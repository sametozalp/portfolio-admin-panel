import { ErrorMessage, Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, FormField, Label } from "semantic-ui-react";
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

  useEffect(() => {
    const service = new EducationService()
    service.getById(id).then(r => {
      setEducation(r);
    });
  }, []);

  return (
    <div>
      <p className="page-title">Proje Güncelle</p>

      <Formik initialValues={education} onSubmit={(values, { resetForm }) => { }} enableReinitialize>
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
