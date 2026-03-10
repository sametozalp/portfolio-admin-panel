import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { Button, FormField, Label } from "semantic-ui-react";
import ContactService from "../service/contactService";

export default function ContactPage() {

  const [isUpdate, setIsUpdate] = useState(false);
  const service = useMemo(()=> new ContactService(), [])

  const [contact, setContact] = useState({
    title: '',
    description: '',
    myEmail: ''
  })

  useEffect(() => {
    service.getContact().then(r => {
      if (r != null && r.id != null) {
        setContact(r);
        setIsUpdate(true);
      }
    });
  }, []);

  function submit(values) {
    if (isUpdate) {
      service.update(contact.id, values)
    } else {
      service.add(values);
    }
  }

  return (
    <div>
      <p className="page-title">İletişimi Düzenle</p>
      <Formik initialValues={contact} onSubmit={(values, { resetForm }) => { submit(values) }} enableReinitialize >
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
