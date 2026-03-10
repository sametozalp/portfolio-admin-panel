import { Formik, Form as FormikForm } from "formik";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button, FormField, Image } from "semantic-ui-react";
import ProfileImageService from "../service/profileImageService";

export default function ProfileImagePage() {

    const service = useMemo(() => new ProfileImageService(), []);
    const [profileImage, setProfileImage] = useState({})
    const newPhoto = useRef("");

    useEffect(() => {
        getCurrentProfileImage();
    }, []);

    function getCurrentProfileImage() {
        service.getProfileImage().then(r => {
            if (r != null) {
                setProfileImage(r);
            }
        });
    }

    function updateWithForm(values, { resetForm }) {
        if (!newPhoto.current) {
            alert("Lütfen bir dosya seçin");
            return;
        }

        service.add(newPhoto.current).then(r => {
            resetForm();
            newPhoto.current = null;
            getCurrentProfileImage();
        });
    }

    function removeImageWithForm() {
        const confirmDelete = window.confirm("Profil resmini silmek istediğinize emin misiniz?");
        if (!confirmDelete) return;

        service.delete(profileImage.id).then(() => getCurrentProfileImage())
    }

    return (
        <div>
            <div className="page-title">Profile Resmini Düzenle</div>

            <Formik
                initialValues={{ image: null }}
                enableReinitialize
                onSubmit={(values, actions) => updateWithForm(values, actions)}
            >
                <FormikForm className="ui form">

                    <Image src={profileImage.url == null ? '/images/image.png' : profileImage.url} size='medium' style={{ margin: 'auto' }} />

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
                    <Button color={"green"} type="submit" style={{ marginTop: "20px" }}>{"Güncelle"}</Button>
                    <Button color={"red"} onClick={removeImageWithForm} type="button" style={{ marginTop: "20px" }}>{"Profil resmini kaldır"}</Button>
                </FormikForm>
            </Formik>
        </div>
    )
}
