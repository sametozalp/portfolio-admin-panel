import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";
import ProjectService from "../../service/projectService";

export default function ProjectsPage() {

  const [projects, setProjects] = useState([]);
  const service = useMemo(() => new ProjectService(), [])

  useEffect(() => {
    getData();
  }, []);

  function handleDeleteProject(id) {
    const isConfirmed = window.confirm("Silmek istediğine emin misin ?")
    if (isConfirmed)
      service.delete(id).then(()=>getData());
  }

  function getData() {
    service.getProjects().then(r => {
      setProjects(r);
    });
  }

  return (
    <div>
      <p className="page-title">Projeleri Yönet</p>
      <Button content="Yeni Proje Ekle" icon="add" labelPosition="" style={{ float: "right", marginBottom: "1.5rem" }} as={NavLink} to="add" />

      <Table singleLine>
        <TableHeader>
          <TableRow>
            <TableHeaderCell></TableHeaderCell>
            <TableHeaderCell>Adı</TableHeaderCell>
            <TableHeaderCell>Özeti</TableHeaderCell>
            <TableHeaderCell>Açıklama</TableHeaderCell>
            <TableHeaderCell>Aksiyonlar</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {projects.map((e, index) => (
            <TableRow>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{e.title}</TableCell>
              <TableCell>{e.summary}</TableCell>
              <TableCell>{e.description.substring(0, 30)}...</TableCell>
              <TableCell>
                <Button content="Update" icon="edit" labelPosition="left" size="mini" style={{ marginRight: "0.5rem" }} as={NavLink} to={"update/" + e.id} />
                <Button content="Delete" icon="trash" labelPosition="left" size="mini" color="red" onClick={() => handleDeleteProject(e.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}