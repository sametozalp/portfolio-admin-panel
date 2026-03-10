import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";
import EducationService from "../../service/educationService";

export default function EducationPage() {

  const [educations, setEducations] = useState([]);
  const service = useMemo(() => new EducationService(), [])

  useEffect(() => {
    service.getEducations().then(r => {
      setEducations(r);
    });
  }, []);

  return (
    <div>
      <p className="page-title">Eğitimleri Yönet</p>
      <Button content="Yeni Eğitim Ekle" icon="add" labelPosition="" style={{ float: "right", marginBottom: "1.5rem" }} as={NavLink} to="add" />

      <Table singleLine>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Bölüm</TableHeaderCell>
            <TableHeaderCell>Okul</TableHeaderCell>
            <TableHeaderCell>Açıklama</TableHeaderCell>
            <TableHeaderCell>Başlangıç Zamanı</TableHeaderCell>
            <TableHeaderCell>Bitiş Zamanı</TableHeaderCell>
            <TableHeaderCell>Aksiyonlar</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {educations.map((e, index) => (
            <TableRow>
              <TableCell>{e.major}</TableCell>
              <TableCell>{e.school}</TableCell>
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