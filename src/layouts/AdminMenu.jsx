import { Menu, MenuItem } from 'semantic-ui-react'

export default function AdminMenu() {

    return (
        <Menu pointing vertical>
            <MenuItem
                name='Giriş'
            />
            <MenuItem
                name='Hakkımda'
            />
            <MenuItem
                name='Özgeçmiş'
            />
             <MenuItem
                name='Projeler'
            />
             <MenuItem
                name='İletişim'
            />
        </Menu>
    )
}
