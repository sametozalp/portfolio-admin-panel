import { NavLink } from 'react-router-dom'
import { Menu, MenuItem } from 'semantic-ui-react'

export default function AdminMenu() {

    return (
        <Menu pointing vertical>
            <MenuItem
                name='Giriş'
                as={NavLink} to="/admin/entrance"
            />
            <MenuItem
                name='Hakkımda'
                as={NavLink} to="/admin/about"
            />
            <MenuItem
                name='Özgeçmiş'
                as={NavLink} to="/admin/resume"
            />
            <MenuItem
                name='Projeler'
                as={NavLink} to="/admin/projects"
            />
            <MenuItem
                name='Deneyim'
                as={NavLink} to="/admin/experience"
            />
            <MenuItem
                name='Eğitim'
                as={NavLink} to="/admin/education"
            />
            <MenuItem
                name='İletişim'
                as={NavLink} to="/admin/contact"
            />
        </Menu>
    )
}
