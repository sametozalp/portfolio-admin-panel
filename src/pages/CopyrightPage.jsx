import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Button, FormField, Label } from "semantic-ui-react";
import CopyrightService from "../service/copyrightService";

export default function CopyrightPage() {
    const [copyright, setCopyright] = useState({
        description: ''
    })

    useEffect(() => {
        const service = new CopyrightService();
        service.getCopyright().then(r => {
            setCopyright(r);
        });
    }, []);

    return (
        <div>
            <p className="page-title">Copyright Düzenle</p>
            <Formik initialValues={copyright} onSubmit={(values, { resetForm }) => { }} enableReinitialize >
                <Form className="ui form">

                    <FormField>
                        <Field name="description" placeholder="Açıklama"></Field>
                        <ErrorMessage name="description" render={error => <Label pointing basic color="red" content={error} />} />
                    </FormField>

                    <Button color="green" type="submit">Ekle</Button>
                    <Button color="gray" type="submit">Güncelle</Button>
                </Form>
            </Formik>
        </div>
    )
}
