import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Checkbox, Icon, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";
import SocialService from "../../service/socialService";


export default function SocialPage() {

  const [socials, setSocials] = useState([]);
  const service = useMemo(() => new SocialService(), []);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    service.getSocials().then(r => {
      setSocials(r);
    });
  }

  function handleSetShowable(id, value) {
    service.setShowable(id, value).then(() => getData());
  }
  function handleUpOrderNumber(id) {
    service.upOrderNumber(id).then(() => getData());
  }

  function handleDownOrderNumber(id) {
    service.downOrderNumber(id).then(() => getData());
  }
  return (
    <div>
      <div className="page-title">Sosyal Medya</div>
      <Button content="Yeni Link Ekle" icon="add" labelPosition="" style={{ float: "right", marginBottom: "1.5rem" }} as={NavLink} to="add" />

      <Table singleLine>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Platform</TableHeaderCell>
            <TableHeaderCell>Sıralama</TableHeaderCell>
            <TableHeaderCell>Aksiyonlar</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {socials.map((e, index) => (
            <TableRow>
              <TableCell>{e.platform}</TableCell>
              <TableCell>{e.orderNumber}</TableCell>
              <TableCell className="table-action-style">
                <Button content="Update" icon="edit" labelPosition="left" size="mini" style={{ marginRight: "0.5rem" }} as={NavLink} to={"update/" + e.id} />
                <Button content="Delete" icon="trash" labelPosition="left" size="mini" color="red" />
                <Checkbox label={{ children: 'Gizle' }} checked={!e.showable} onChange={(z, data) => handleSetShowable(e.id, !e.showable)} />
                  <Button onClick={() => handleDownOrderNumber(e.id)}><Icon name="chevron down" /></Button>
                <Button onClick={() => handleUpOrderNumber(e.id)}><Icon name="chevron up" /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
