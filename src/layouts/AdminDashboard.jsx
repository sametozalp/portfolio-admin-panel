import { Grid } from 'semantic-ui-react'
import AdminRouter from '../router/adminRouter'
import AdminMenu from './AdminMenu'

export default function AdminDashboard() {
    return (
        <Grid columns={2} divided className='admin-dashboard' stackable>
            <Grid.Row>
                <Grid.Column width={3}>
                    <p>Admin Panel</p>
                    <AdminMenu />
                </Grid.Column>
                <Grid.Column width={13}>
                    <div className='admin-content'>
                        <AdminRouter />
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
