import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography } from '@mui/material';

const tables = [
    { id: 1, status: 'Occupied', waiter: 'John Doe' },
    { id: 2, status: 'Free', waiter: 'Jane Smith' },
];

const Tables = () => (
    <Paper>
        <Typography variant="h4" gutterBottom>
            Tables
        </Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Table ID</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Waiter</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tables.map(table => (
                    <TableRow key={table.id}>
                        <TableCell>{table.id}</TableCell>
                        <TableCell>{table.status}</TableCell>
                        <TableCell>{table.waiter}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Paper>
);

export default Tables;
