import { NavLink } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import AdminRouter from '../router/adminRouter'
import AdminMenu from './AdminMenu'

export default function AdminDashboard() {
    return (
        <Grid columns={2} divided className='admin-dashboard' stackable>
            <Grid.Row>
                <Grid.Column width={2} className="admin-menu-column">
                    <NavLink to="/admin" className="admin-panel-title">
                        <p>Admin Panel</p>
                    </NavLink>
                    <AdminMenu />
                </Grid.Column>

                <Grid.Column width={14} className="admin-content-column">
                    <AdminRouter />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
