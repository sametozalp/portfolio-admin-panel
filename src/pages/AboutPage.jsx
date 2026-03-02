import { ErrorMessage, Field, Formik, Form as FormikForm } from "formik";
import { useEffect, useState } from "react";
import { Button, FormField, Label } from "semantic-ui-react";
import AboutService from "../service/aboutService";

export default function AboutPage() {
  const initialData = {
    title: '',
    description: '',
    profileImageUrl: '',
    skills: '' // Array yerine string tutmak input için daha sağlıklı
  };

  const [about, setAbout] = useState(initialData);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const service = new AboutService();
    service.getAbout().then(r => {
      // GELEN VERİ KONTROLÜ: Eğer r boşsa veya string ise state'i bozma
      if (r && typeof r === 'object' && r.id) {
        setAbout(r);
        setIsUpdate(true);
      }
    });
  }, []);

  function submit(values) {
    const service = new AboutService();
    // skills eğer array bekleniyorsa burada split edebilirsin
    const payload = { ...values, skills: typeof values.skills === 'string' ? values.skills.split(',') : values.skills };
    
    if (isUpdate) {
      service.update(about.id, values)
    } else {
      service.add(payload);
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
        <FormikForm className="ui form"> {/* Semantic UI'ın CSS class'ını Formik Form'a verdik */}
          <FormField>
            <Field name="title" placeholder="Başlık" />
            <ErrorMessage name="title" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          <FormField>
            <Field name="description" placeholder="Açıklama" />
            <ErrorMessage name="description" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          <FormField>
            <Field name="profileImageUrl" placeholder="Profil Resmi URL" />
            <ErrorMessage name="profileImageUrl" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          <FormField>
            <Field name="skills" placeholder="Yetenekler (Virgülle ayırın)" />
            <ErrorMessage name="skills" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          <Button color={isUpdate ? "blue" : "green"} type="submit">
            {isUpdate ? "Güncelle" : "Ekle"}
          </Button>
        </FormikForm>
      </Formik>
    </div>
  );
}