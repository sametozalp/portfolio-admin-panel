import { NavLink } from "react-router-dom";
import { Button, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";

export default function ProjectsPage() {

  const projects = [
    {
      title: "Portfolio Admin Panel",
      summary: "Portfolio projesinin admin paneli",
      description: "Bu panel ile kişisel blogunu kolayca yönetebilirsin",
      features: ["React ile frontend app", "Spring boot ile backend app", "Admin panel"],
      projectDate: "",
      techStack: ["java", "refis"],
      liveDemoUrl: "",
      sourceCodeUrl: "",
      coverImage: "",
    }
  ];

  return (
    <div>
      <p className="page-title">Projeleri Yönet</p>
      <Button content="Yeni Proje Ekle" icon="add" labelPosition="" style={{ float: "right", marginBottom: "1.5rem" }} as={NavLink} to="add" />

      <Table singleLine>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Adı</TableHeaderCell>
            <TableHeaderCell>Özeti</TableHeaderCell>
            <TableHeaderCell>Açıklama</TableHeaderCell>
            <TableHeaderCell>Aksiyonlar</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {projects.map((e, index) => (
            <TableRow>
              <TableCell>{e.title}</TableCell>
              <TableCell>{e.summary}</TableCell>
              <TableCell>{e.description.substring(0, 30)}...</TableCell>
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