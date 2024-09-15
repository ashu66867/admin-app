import React from 'react';
import { useState } from 'react';
import { Box, Grid2, Stack, Typography, Card } from '@mui/material';
import { } from '@emotion/styled';

const Dashboard = () => {
    const [activeRestaurants, setActiveRestaurants] = useState(0);
    const [inactiveRestaurants, setInactiveRestaurants] = useState(0);
    const [pendingApprovals, setPendingApprovals] = useState(0);
    const [pendingTickets, setPendingTickets] = useState(0);
    return (
        <Box>
            <Stack>
                <Typography variant='h5'>
                    Admin Dashboard
                </Typography>
                <Typography variant='body1'>This dashboard will show the summary of restaurants on the platform, service tickets, approval requests.</Typography>
            </Stack>
            <Stack>
                <Card variant='outlined' sx={{padding: 2, margin: 2}}>
                    <Typography variant='h6'>Restaurant metrics</Typography>
                    <Typography>Restaurants onboarded: {activeRestaurants + inactiveRestaurants}</Typography>
                    <Typography>Active restaurants: {activeRestaurants}</Typography>
                    <Typography>Inactive restaurants: {inactiveRestaurants}</Typography>
                </Card>
                <Card variant='outlined' sx={{padding: 2, margin: 2}}>
                    <Box>
                        <Typography variant='h6'>Approval metrics</Typography>
                        <Typography>Pending: {pendingApprovals}</Typography>
                    </Box>
                </Card>
                <Card variant='outlined' sx={{padding: 2, margin: 2}}>
                    <Box>
                        <Typography variant='h6'>Service Ticket metrics</Typography>
                        <Typography>Pending: {pendingTickets}</Typography>
                    </Box>
                </Card>
            </Stack>
        </Box>
    )
}

export default Dashboard