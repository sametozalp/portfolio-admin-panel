import { Grid } from 'semantic-ui-react'
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
                    <p>Welcome to the admin dashboard! Here you can manage your portfolio, view analytics, and customize your settings.</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>)
}
