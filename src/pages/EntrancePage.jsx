import { ErrorMessage, Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { Button, Form, FormField, Label } from "semantic-ui-react";
import EntranceService from "../service/entranceService";

export default function EntrancePage() {

  const [about, setAbout] = useState({
    title: '',
    description: '',
    fullName: ''
  });

  useEffect(() => {
    const service = new EntranceService();
    service.getEntrance().then(r => {
      setAbout(r);
      console.log(r)
    });
  }, []);

  return (
    <div>
      <p className="page-title">Girişi Düzenle</p>
      <Formik initialValues={about} onSubmit={(values, { resetForm }) => { }} enableReinitialize >
        <Form className="ui form">
          <FormField>
            <Field name="title" placeholder="Başlık"></Field>
            <ErrorMessage name="title" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          <FormField>
            <Field name="description" placeholder="Açıklama"></Field>
            <ErrorMessage name="description" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          <FormField>
            <Field name="fullName" placeholder="Tam Ad"></Field>
            <ErrorMessage name="fullName" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          <Button color="green" type="submit">Ekle</Button>
          <Button color="gray" type="submit">Güncelle</Button>
        </Form>
      </Formik>
    </div>
  )
}
