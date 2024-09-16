import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Alert, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function CreateRestaurant() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactPersonNumber, setContactPersonNumber] = useState('');
  const [contactPersonEmail, setContactPersonEmail] = useState('');
  const [paymentType, setPaymentType] = useState('cash');
  const [gstId, setGstId] = useState('');
  const [logo, setLogo] = useState('');
  const [subscription, setSubscription] = useState('');
  const [subscriptionStartDate, setSubscriptionStartDate] = useState(dayjs(''));
  const [subscriptionEndDate, setSubscriptionEndDate] = useState(dayjs(''));
  const [createdBy, setCreatedBy] = useState('');
  const [updatedBy, setUpdatedBy] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://example.com/api/restaurants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, address, phone, email, contactPerson, contactPersonNumber, contactPersonEmail, paymentType, gstId, logo, subscription, subscriptionStartDate, subscriptionEndDate, createdBy, updatedBy }),
      });

      if (!response.ok) {
        throw new Error('Failed to create restaurant');
      }

      const data = await response.json();
      setSuccessMessage('Restaurant created successfully');
      setName('');
      setAddress('');
      setPhone('');
      setEmail('');
      setContactPerson('');
      setContactPersonNumber('');
      setContactPersonEmail('');
      setPaymentType('');
      setGstId('');
      setLogo('');
      setSubscription('');
      setSubscriptionStartDate('');
      setSubscriptionEndDate('');
      setCreatedBy('');
      setUpdatedBy('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create New Restaurant
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Contact Person Name"
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Contact Person Number"
              value={contactPersonNumber}
              onChange={(e) => setContactPersonNumber(e.target.value)}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Contact Person Email"
              value={contactPersonEmail}
              onChange={(e) => setContactPersonEmail(e.target.value)}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="GST ID"
              value={gstId}
              onChange={(e) => setGstId(e.target.value)}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Subscription Type"
              value={subscription}
              onChange={(e) => setSubscription(e.target.value)}
              fullWidth
              required
              margin="normal"
            />
            <DatePicker
              sx={{ my: 2, mr: 2 }}
              label="Subscription Start Date"
              value={subscriptionStartDate}
              defaultValue={dayjs('2024-09-16')}
              onChange={(e) => (dayjs(e).isValid()) ? setSubscriptionStartDate(e) : setSubscriptionStartDate('')}
              renderInput={(params) => <TextField {...params} />}
            />
            <DatePicker
              sx={{ my: 2, ml: 2 }}
              label="Subscription End Date"
              value={subscriptionEndDate}
              defaultValue={dayjs('2024-09-16')}
              onChange={(e) => (dayjs(e).isValid()) ? setSubscriptionEndDate(e) : setSubscriptionEndDate('')}
              renderInput={(params) => <TextField {...params} />}
            />
            <TextField
              select
              label="Payment Type"
              value={paymentType}
              onChange={(event) => setPaymentType(event.target.value)}
              sx={{ my: 0, width: '100%' }}
            >
              <MenuItem value="cash">Cash</MenuItem>
              <MenuItem value="online">Online</MenuItem>
            </TextField>
            <TextField
              label="Created By Name"
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              fullWidth
              required
              margin="normal"
            />

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Create Restaurant
            </Button>
            {successMessage && <Alert severity="success" sx={{ mt: 2 }}>{successMessage}</Alert>}
          </form>
        </LocalizationProvider>
      </Box>
    </Container>
  );
}

export default CreateRestaurant;
