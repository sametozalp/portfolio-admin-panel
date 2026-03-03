import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Button, FormField, Label } from "semantic-ui-react";
import CopyrightService from "../service/copyrightService";

export default function CopyrightPage() {

    const [isUpdate, setIsUpdate] = useState(false);

    const [copyright, setCopyright] = useState({
        description: ''
    })

    const service = new CopyrightService();

    useEffect(() => {
        service.getCopyright().then(r => {
            if (r != null && r.id != null) {
                setCopyright(r);
                setIsUpdate(true);
            }
        });
    }, []);

    function submit(values) {
        if (isUpdate) {
            service.update(copyright.id, values)
        } else {
            service.add(values);
        }
    }

    return (
        <div>
            <p className="page-title">Copyright Düzenle</p>
            <Formik initialValues={copyright} onSubmit={(values, { resetForm }) => { submit(values) }} enableReinitialize >
                <Form className="ui form">

                    <FormField>
                        <Field name="description" placeholder="Açıklama"></Field>
                        <ErrorMessage name="description" render={error => <Label pointing basic color="red" content={error} />} />
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
