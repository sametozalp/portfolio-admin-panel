import { Grid } from 'semantic-ui-react'
import AdminRouter from '../router/adminRouter'
import AdminMenu from './AdminMenu'

export default function AdminDashboard() {
    return (
        <Grid columns={2} divided >
            <Grid.Row>
                <Grid.Column width={5}>
                    <p>Admin Panel</p>
                    <AdminMenu />
                </Grid.Column>
                <Grid.Column width={11}>
                    <AdminRouter />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
