import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { Button, FormField, Label } from "semantic-ui-react";
import EntranceService from "../service/entranceService";

export default function EntrancePage() {

  const [isUpdate, setIsUpdate] = useState(false);
  const service = useMemo(()=> new EntranceService(), [])

  const [entrance, setEntrance] = useState({
    title: '',
    description: '',
    fullName: ''
  });

  useEffect(() => {
    service.getEntrance().then(r => {
      if (r != null && r.id != null) {
        setEntrance(r);
        setIsUpdate(true);
      }
    });
  }, []);

  function submit(values) {
    if (isUpdate) {
      service.update(entrance.id, values)
    } else {
      service.add(values);
    }
  }

  return (
    <div>
      <p className="page-title">Girişi Düzenle</p>
      <Formik
        initialValues={entrance}
        onSubmit={(values) => { submit(values) }}
        enableReinitialize >
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

          {isUpdate
            ? <Button color="blue" type="submit">Güncelle</Button>
            : <Button color="green" type="submit">Ekle</Button>
          }
        </Form>
      </Formik>
    </div>
  )
}
