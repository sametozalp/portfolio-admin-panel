import { ErrorMessage, Field, Formik, Form as FormikForm } from "formik";
import { useEffect, useRef, useState } from "react";
import { Button, FormField, Image, Label } from "semantic-ui-react";
import AboutService from "../service/aboutService";

export default function AboutPage() {

  const newPhoto = useRef(null);

  const initialData = {
    title: '',
    description: '',
    profileImageUrl: '',
    skills: ''
  };

  const [about, setAbout] = useState(initialData);
  const [isUpdate, setIsUpdate] = useState(false);
  const service = new AboutService();

  useEffect(() => {
    service.getAbout().then(r => {
      if (r != null && r.id != null) {
        setAbout(r);
        setIsUpdate(true);
      }
    });
  }, []);

  function submit(values) {

    const formData = new FormData();
    formData.append("request", {
      title: about.title,
      description: about.description,
      skills: about.skills
    });

    if (newPhoto.current != null && newPhoto.current !== "")
      formData.append("newProfilePhoto", newPhoto.current);

    if (isUpdate) {
      service.update(about.id, formData)
    } else {
      service.add(formData);
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

          {/* <FormField>
            <Field name="profileImageUrl" placeholder="Profil Resmi URL" />
            <ErrorMessage name="profileImageUrl" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField> */}

          <FormField>
            <Field name="skills" placeholder="Yetenekler (Virgülle ayırın)" />
            <ErrorMessage name="skills" render={error => <Label pointing basic color="red" content={error} />} />
          </FormField>

          <Image src={about.profileImageUrl == null ? '/images/image.png' : about.profileImageUrl} size='medium' style={{ margin: 'auto' }} />

          <FormField style={{ marginTop: "20px" }}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.currentTarget.files && e.currentTarget.files[0]) {
                  newPhoto.current = e.currentTarget.files[0];
                }
              }}
            />
          </FormField>

          <Button color={isUpdate ? "blue" : "green"} type="submit" style={{ marginTop: "20px" }}>
            {isUpdate ? "Güncelle" : "Ekle"}
          </Button>
        </FormikForm>
      </Formik>
    </div>
  );
}