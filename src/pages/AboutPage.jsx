import { ErrorMessage, Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { Button, Form, FormField, Label } from "semantic-ui-react";
import * as Yup from "yup";
import AboutService from "../service/aboutService";

export default function AboutPage() {

  const [isUpdate, setIsUpdate] = useState(true);

  const [about, setAbout] = useState({
    title: '',
    description: '',
    profileImageUrl: '',
    skills: ''
  })

  const schema = Yup.object({
    title: Yup.string().required('Başlık gereklidir'),
    description: Yup.string().required('Açıklama gereklidir'),
    profileImageUrl: Yup.string().url('Geçerli bir URL girin'),
    skills: Yup.string().transform(value => {
      return value ? value.split(',').map(skill => skill.trim()).filter(skill => skill) : [];
    })
  });

  useEffect(() => {
    const service = new AboutService();
    service.getAbout().then(r => {
      setAbout(r);

      if (r.id == null)
        setIsUpdate(false)
      else
        setIsUpdate(true)
    });
  }, []);

  function submit(values) {
    const service = new AboutService();
    if (isUpdate) {
      service.update(about.id, values);
    } else {
      service.add(values);
    }
  }

  return (
    <div>
      <p className="page-title">Hakkımda Düzenle</p>
      <Formik
        initialValues={{about}}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          submit(values);
        }}
        enableReinitialize
      >
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
            <Field name="profileImageUrl" placeholder="Profil Resmi URL"></Field>
            <ErrorMessage name="profileImageUrl" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          <FormField>
            <Field name="skills" placeholder="Yetenekler"></Field>
            <ErrorMessage name="skills" render={error => <Label pointing basic color="red" content={error} />} />
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
