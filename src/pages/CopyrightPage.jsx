import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Button, FormField, Label } from "semantic-ui-react";
import CopyrightService from "../service/copyrightService";

export default function CopyrightPage() {

    const [isUpdate, setIsUpdate] = useState(true);

    const [copyright, setCopyright] = useState({
        description: ''
    })

    useEffect(() => {
        const service = new CopyrightService();
        service.getCopyright().then(r => {
            setCopyright(r);

            if (r.id == null)
                setIsUpdate(false)
            else
                setIsUpdate(true)
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

                    {isUpdate
                        ? <Button color="blue" type="submit">Güncelle</Button>
                        : <Button color="green" type="submit">Ekle</Button>
                    }
                </Form>
            </Formik>
        </div>
    )
}
