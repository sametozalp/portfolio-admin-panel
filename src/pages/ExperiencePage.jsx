import { Field, FieldArray, Form, Formik } from "formik";
import { Button, FormField, Input, TextArea } from "semantic-ui-react";

export default function ExperiencePage() {
    const initialValues = {
        experiences: [
            {
                positionName: "",
                description: "",
                company: "",
                startDate: "",
                endDate: "",
            },
        ],
    };
    return (
        <div>
            <p className="page-title">Deneyimleri Düzenle</p>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {

                }}
            >
                {({ values, handleChange }) => (
                    <Form className="ui form">
                        <FieldArray name="experiences">
                            {({ push, remove }) => (
                                <div>
                                    {values.experiences.map((exp, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                padding: "1rem",
                                                border: "1px solid #ccc",
                                                marginBottom: "1rem",
                                                borderRadius: "10px",
                                                backgroundColor: "#fefefe",
                                            }}
                                        >
                                            <h4>Deneyim {index + 1}</h4>
                                            <Button
                                                type="button"
                                                color="red"
                                                floated="right"
                                                size="tiny"
                                                onClick={() => remove(index)}
                                            >
                                                Sil
                                            </Button>

                                            {/* Pozisyon */}
                                            <FormField>
                                                <Field
                                                    name={`experiences.${index}.positionName`}
                                                    placeholder="Pozisyon"
                                                    as={Input}
                                                />
                                            </FormField>

                                            {/* Şirket */}
                                            <FormField>
                                                <Field
                                                    name={`experiences.${index}.company`}
                                                    placeholder="Şirket"
                                                    as={Input}
                                                />
                                            </FormField>

                                            {/* Açıklama */}
                                            <FormField>
                                                <Field
                                                    name={`experiences.${index}.description`}
                                                    placeholder="Açıklama"
                                                    as={TextArea}
                                                    rows={3}
                                                />
                                            </FormField>

                                            {/* Başlangıç Tarihi */}
                                            <FormField>
                                                <Field
                                                    name={`experiences.${index}.startDate`}
                                                    type="date"
                                                    as={Input}
                                                />
                                            </FormField>

                                            {/* Bitiş Tarihi */}
                                            <FormField>
                                                <Field
                                                    name={`experiences.${index}.endDate`}
                                                    type="date"
                                                    as={Input}
                                                />
                                            </FormField>
                                        </div>
                                    ))}

                                    <Button
                                        type="button"
                                        color="blue"
                                        onClick={() => push(initialValues.experiences[0])}
                                    >
                                        Yeni Deneyim Ekle
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