import { ErrorMessage, Field, Form, Formik } from "formik";
import { useMemo } from "react";
import { Button, Dropdown, FormField, Label } from "semantic-ui-react";
import SocialService from "../../service/socialService";
import { socialOptions } from "../../util/constants";

export default function SocialAdd() {
  let initialValue = {
    platform: "",
    url: ""
  }

  const service = useMemo(() => new SocialService(), []);

  function submit(values) {
    service.add(values);
  }
  return (
    <div>
      <div className="page-title">Sosyal Medya Ekle</div>

      <Formik
        initialValues={initialValue}
        onSubmit={(values) => submit(values)}
      >
        {({ setFieldValue, values }) => (
          <Form className="ui form">

            <Dropdown
              placeholder="Platform seç"
              fluid
              selection
              options={socialOptions}
              value={values.platform}
              onChange={(e, { value }) =>
                setFieldValue("platform", value)
              }
            />

            <FormField>
              <Field name="url" placeholder="Url" />
              <ErrorMessage
                name="url"
                render={error => (
                  <Label pointing basic color="red" content={error} />
                )}
              />
            </FormField>

            <Button color="green" type="submit">Ekle</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
