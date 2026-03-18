import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Dropdown, FormField, Label } from "semantic-ui-react";
import SocialService from "../../service/socialService";
import { socialOptions } from "../../util/constants";

export default function SocialUpdate() {

  const { id } = useParams()

  const [social, setSocial] = useState({ "platform": "", "url": "" })

  const service = useMemo(() => new SocialService(), []);

  useEffect(() => {
    service.getSocial(id).then(r => setSocial(r));
  }, [])

  function submit(values) {
    service.update(id, values);
  }
  return (
    <div>
      <div className="page-title">Sosyal Medya Güncelle</div>

      <Formik
        initialValues={social}
        onSubmit={(values) => submit(values)}
        enableReinitialize
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

            <Button color="green" type="submit">Güncelle</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
