import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";
import ExperienceService from "../../service/experienceService";

export default function ExperiencePage() {

    const [experiences, setExperiences] = useState([]);
    const service = useMemo(() => new ExperienceService(), []);

    useEffect(() => {
        service.getExperiences().then(r => {
            setExperiences(r);
        });
    }, []);

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
                            <TableCell>
                                <Button content="Update" icon="edit" labelPosition="left" size="mini" style={{ marginRight: "0.5rem" }} as={NavLink} to={"update/" + e.id} />
                                <Button content="Delete" icon="trash" labelPosition="left" size="mini" color="red" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}