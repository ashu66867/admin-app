import React from 'react';
import { Grid2 } from '@mui/material';
import Header from './Header.js';
import Sidebar from './Sidebar';

const Layout = ({ children }) => (
    <div>
        <Header />
        <Grid2 container>
            <Grid2 item>
                <Sidebar />
            </Grid2>
            <Grid2 item xs>
                <div style={{ padding: 20 }}>
                    {children}
                </div>
            </Grid2>
        </Grid2>
    </div>
);

export default Layout;
