import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <div style={{ width: 250 }}>
        <List>
            <ListItem button component={Link} to="/">
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/restaurants">
                <ListItemText primary="Restaurants" />
            </ListItem>
            <ListItem button component={Link} to="/restaurants/signup">
                <ListItemText primary="Onboard a new Restaurant" />
            </ListItem>
            <ListItem button component={Link} to="/approvals">
                <ListItemText primary="Approvals" />
            </ListItem>
            <ListItem button component={Link} to="/tickets">
                <ListItemText primary="Tickets" />
            </ListItem>
        </List>
    </div>
);

export default Sidebar;