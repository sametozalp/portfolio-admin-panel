import { Grid } from 'semantic-ui-react'
import AdminRouter from '../router/adminRouter'
import AdminMenu from './AdminMenu'

export default function AdminDashboard() {
    return (
        <Grid columns={2} divided className='admin-dashboard'>
            <Grid.Row>
                <Grid.Column width={4}>
                    <p>Admin Panel</p>
                    <AdminMenu />
                </Grid.Column>
                <Grid.Column width={12}>
                    <AdminRouter />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
