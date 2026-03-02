import { Field, FieldArray, Form, Formik } from "formik";
import { Button, FormField, Input, TextArea } from "semantic-ui-react";

export default function EducationPage() {

  const initialValues = {
    educations: [
      {
        positionName: "",
        description: "",
        school: "",
        startDate: "",
        endDate: "",
      },
    ],
  };


  return (
    <div>
      <p className="page-title">Eğitimleri Düzenle</p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {

        }}
      >
        {({ values, handleChange }) => (
          <Form className="ui form">
            <FieldArray name="educations">
              {({ push, remove }) => (
                <div>
                  {values.educations.map((edu, index) => (
                    <div key={index} style={{ padding: "1rem", border: "1px solid #ccc", marginBottom: "1rem", borderRadius: "10px", backgroundColor: "#fefefe" }}>
                      <h4>Eğitim {index + 1}</h4>
                      <Button type="button" color="red" floated="right" size="tiny" onClick={() => remove(index)}>
                        Sil
                      </Button>

                      {/* Pozisyon / Bölüm */}
                      <FormField>
                        <Field
                          name={`educations.${index}.positionName`}
                          placeholder="Pozisyon / Bölüm"
                          as={Input}
                        />
                      </FormField>

                      {/* Açıklama */}
                      <FormField>
                        <Field
                          name={`educations.${index}.description`}
                          placeholder="Açıklama"
                          as={TextArea}
                          rows={3}
                        />
                      </FormField>

                      {/* Okul */}
                      <FormField>
                        <Field
                          name={`educations.${index}.school`}
                          placeholder="Okul"
                          as={Input}
                        />
                      </FormField>

                      {/* Başlangıç Tarihi */}
                      <FormField>
                        <Field
                          name={`educations.${index}.startDate`}
                          type="date"
                          as={Input}
                        />
                      </FormField>

                      {/* Bitiş Tarihi */}
                      <FormField>
                        <Field
                          name={`educations.${index}.endDate`}
                          type="date"
                          as={Input}
                        />
                      </FormField>
                    </div>
                  ))}

                  <Button type="button" color="blue" onClick={() => push(initialValues.educations[0])}>
                    Yeni Eğitim Ekle
                  </Button>
                </div>
              )}
            </FieldArray>

            <Button type="submit" color="green" style={{ marginTop: "1rem" }}>
              Kaydet
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}