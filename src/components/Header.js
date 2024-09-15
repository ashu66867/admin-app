import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Header = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
                Restaurant Management
            </Typography>
            <Link to="/reports" style={{ color: 'white' }}>Reports</Link>
        </Toolbar>
    </AppBar>
    );

export default Header;