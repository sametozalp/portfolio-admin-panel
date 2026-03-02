import { ErrorMessage, Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { Button, Form, FormField, Label } from "semantic-ui-react";
import ContactService from "../service/contactService";

export default function ContactPage() {

  const [isUpdate, setIsUpdate] = useState(true);

  const [contact, setContact] = useState({
    title: '',
    description: '',
    myEmail: ''
  })

  useEffect(() => {
    const service = new ContactService();
    service.getContact().then(r => {
      setContact(r);

      if (r.id == null)
        setIsUpdate(false)
      else
        setIsUpdate(true)
    });
  }, []);

  return (
    <div>
      <p className="page-title">İletişimi Düzenle</p>
      <Formik initialValues={contact} onSubmit={(values, { resetForm }) => { }} enableReinitialize >
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
            <Field name="myEmail" placeholder="E-mail"></Field>
            <ErrorMessage name="myEmail" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          {isUpdate
            ? <Button color="blue" type="submit">Güncelle</Button>
            : <Button color="green" type="submit">Ekle</Button>
          }
        </Form>
      </Formik>
    </div>
  )
}
