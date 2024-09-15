import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Restaurant = ({ id, name, isActive }) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}>
                <Box
                    style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography variant="h6">{name}</Typography>
                    </Box>
                    {/* <Box>
                        {(isActive) ?
                            <Typography variant="h6">Active</Typography> :
                            <Typography variant="h6">Inactive</Typography>}
                    </Box> */}
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body1">Restaurant Id: {id}</Typography>
                {/* <Typography variant="body1">Menu: {Menu}</Typography>
                <Typography variant="body1">Orders: {Orders}</Typography> */}
                <Typography variant="body1">Manage/Edit: {id}</Typography>
            </AccordionDetails>

        </Accordion>
    )
}

export default Restaurant