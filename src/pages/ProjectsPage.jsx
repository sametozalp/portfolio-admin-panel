import { Field, FieldArray, Form, Formik } from "formik";
import { Button, FormField, Input, TextArea } from "semantic-ui-react";

export default function ProjectsPage() {
  const initialValues = {
    projects: [
      {
        title: "",
        summary: "",
        description: "",
        features: [],
        projectDate: "",
        techStack: [],
        liveDemoUrl: "",
        sourceCodeUrl: "",
        coverImage: "",
      },
    ],
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
      }}
    >
      {({ values, handleChange }) => (
        <Form className="ui form">

          <FieldArray name="projects">
            {({ push, remove }) => (
              <div>
                {values.projects.map((project, index) => (
                  <div key={index} style={{ padding: "1rem", border: "1px solid #ccc", marginBottom: "1rem", borderRadius: "10px", backgroundColor: "#fefefe" }}>
                    <h4>Proje {index + 1}</h4>
                    <Button type="button" color="red" floated="right" size="tiny" onClick={() => remove(index)}>
                      Sil
                    </Button>

                    {/* Title */}
                    <FormField>
                      <Field name={`projects.${index}.title`} placeholder="Proje Başlığı" as={Input} />
                    </FormField>

                    {/* Summary */}
                    <FormField>
                      <Field name={`projects.${index}.summary`} placeholder="Proje Özeti" as={TextArea} />
                    </FormField>

                    {/* Description */}
                    <FormField>
                      <Field name={`projects.${index}.description`} placeholder="Proje Açıklaması" as={TextArea} rows={3} />
                    </FormField>

                    {/* Features */}
                    <FieldArray name={`projects.${index}.features`}>
                      {({ push: pushFeature, remove: removeFeature }) => (
                        <div>
                          <label>Özellikler</label>
                          {project.features.map((feat, fIndex) => (
                            <FormField key={fIndex}>
                              <Input
                                placeholder="Özellik"
                                name={`projects.${index}.features.${fIndex}`}
                                value={feat}
                                onChange={handleChange}
                                action={{ icon: "trash", color: "red", onClick: () => removeFeature(fIndex) }}
                              />
                            </FormField>
                          ))}
                          <Button type="button" size="tiny" onClick={() => pushFeature("")}>Yeni Özellik</Button>
                        </div>
                      )}
                    </FieldArray>

                    {/* Tech Stack */}
                    <FieldArray name={`projects.${index}.techStack`}>
                      {({ push: pushTech, remove: removeTech }) => (
                        <div>
                          <label>Tech Stack</label>
                          {project.techStack.map((tech, tIndex) => (
                            <FormField key={tIndex}>
                              <Input
                                placeholder="Teknoloji"
                                name={`projects.${index}.techStack.${tIndex}`}
                                value={tech}
                                onChange={handleChange}
                                action={{ icon: "trash", color: "red", onClick: () => removeTech(tIndex) }}
                              />
                            </FormField>
                          ))}
                          <Button type="button" size="tiny" onClick={() => pushTech("")}>Yeni Teknoloji</Button>
                        </div>
                      )}
                    </FieldArray>

                    {/* Diğer Alanlar */}
                    <FormField>
                      <Field name={`projects.${index}.projectDate`} type="date" as={Input} />
                    </FormField>
                    <FormField>
                      <Field name={`projects.${index}.liveDemoUrl`} placeholder="Canlı Demo URL" as={Input} />
                    </FormField>
                    <FormField>
                      <Field name={`projects.${index}.sourceCodeUrl`} placeholder="Kaynak Kod URL" as={Input} />
                    </FormField>
                    <FormField>
                      <Field name={`projects.${index}.coverImage`} placeholder="Kapak Görseli URL" as={Input} />
                    </FormField>

                  </div>
                ))}

                <Button type="button" color="blue" onClick={() => push(initialValues.projects[0])}>
                  Yeni Proje Ekle
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
  );
}