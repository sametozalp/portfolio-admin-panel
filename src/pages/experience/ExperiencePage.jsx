import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Checkbox, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";
import ExperienceService from "../../service/experienceService";

export default function ExperiencePage() {

    const [experiences, setExperiences] = useState([]);
    const service = useMemo(() => new ExperienceService(), []);

    useEffect(() => {
        getData();
    }, []);

    function getData() {
        service.getExperiences().then(r => {
            setExperiences(r);
        });
    }

    function handleSetShowableImage(id, value) {
        service.setShowableImage(id, value).then(() => getData());
    }

    return (
        <div>
            <p className="page-title">Deneyimleri Yönet</p>
            <Button content="Yeni Deneyim Ekle" icon="add" labelPosition="" style={{ float: "right", marginBottom: "1.5rem" }} as={NavLink} to="add" />

            <Table singleLine>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Pozisyon Adı</TableHeaderCell>
                        <TableHeaderCell>Şirket</TableHeaderCell>
                        <TableHeaderCell>Açıklama</TableHeaderCell>
                        <TableHeaderCell>Başlangıç Zamanı</TableHeaderCell>
                        <TableHeaderCell>Bitiş Zamanı</TableHeaderCell>
                        <TableHeaderCell>Aksiyonlar</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {experiences.map((e, index) => (
                        <TableRow>
                            <TableCell>{e.positionName}</TableCell>
                            <TableCell>{e.company}</TableCell>
                            <TableCell>{e.description.substring(0, 30)}...</TableCell>
                            <TableCell>{e.startDate}</TableCell>
                            <TableCell>{e.endDate}</TableCell>
                            <TableCell className="table-action-style">
                                <Button content="Update" icon="edit" labelPosition="left" size="mini" style={{ marginRight: "0.5rem" }} as={NavLink} to={"update/" + e.id} />
                                <Button content="Delete" icon="trash" labelPosition="left" size="mini" color="red" />
                                <Checkbox label={{ children: 'Gizle' }} checked={!e.showable} onChange={(z, data) => handleSetShowableImage(e.id, !e.showable)} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}