import { ErrorMessage, Field, Formik, Form as FormikForm } from "formik";
import { useEffect, useMemo, useState } from "react";
import { Button, FormField, Label } from "semantic-ui-react";
import AboutService from "../service/aboutService";

export default function AboutPage() {

  const service = useMemo(() => new AboutService(), [])

  const initialData = {
    title: '',
    description: '',
    profileImageUrl: '',
    skills: ''
  };

  const [about, setAbout] = useState(initialData);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    service.getAbout().then(r => {
      if (r != null && r.id != null) {
        setAbout(r);
        setIsUpdate(true);
      }
    });
  }, [service]);

  function submit(values) {

    if (isUpdate) {
      service.update(about.id, values)
    } else {
      service.add(values);
    }
  }

  return (
    <div>
      <p className="page-title">Hakkımda Düzenle</p>
      <Formik
        initialValues={about}
        enableReinitialize
        onSubmit={(values) => submit(values)}
      >
        <FormikForm className="ui form">
          <FormField>
            <Field name="title" placeholder="Başlık" />
            <ErrorMessage name="title" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          <FormField>
            <Field name="description" placeholder="Açıklama" />
            <ErrorMessage name="description" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          <FormField>
            <Field name="skills" placeholder="Yetenekler (Virgülle ayırın)" />
            <ErrorMessage name="skills" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>        

          <Button color={isUpdate ? "blue" : "green"} type="submit" style={{ marginTop: "20px" }}>
            {isUpdate ? "Güncelle" : "Ekle"}
          </Button>
        </FormikForm>
      </Formik>
    </div>
  );
}