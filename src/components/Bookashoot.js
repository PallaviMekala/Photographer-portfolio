import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, InputLabel } from '@mui/material';

const SelectYourEvent = [
  { id: 1, value: 'marraige' },
  { id: 2, value: 'cermony' },
  { id: 3, value: 'personal shoot' },
  { id: 4, value: 'SELECT YOUR EVENT' },

];

function Bookashoot() {
  const [location, setLocation] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [pricing, setPricing] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any desired actions with the form data
    console.log('Location:', location);
    console.log('Selected Event:', selectedEvent);
    console.log('Pricing:', pricing);
  };

  return (
    <form onSubmit={handleSubmit} sx={{display:"flex", alignItems:"center"}}>
      <TextField
        label="LOCATION"
        variant="outlined"
        sx={{ m: 1, width: '50%' }}
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />

      <Select
        label="SELECT YOUR EVENT"
        variant="outlined"
        sx={{ m: 1, width: '50%' }}
        value={selectedEvent}
        onChange={(event) => setSelectedEvent(event.target.value)}
      >
        {SelectYourEvent.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </Select>

      <TextField
        label="PRICING"
        variant="outlined"
        sx={{ m: 1, width: '50%' }}
        value={pricing}
        onChange={(event) => setPricing(event.target.value)}
      />

      <Button type="submit" variant="contained" sx={{ m: 2, width: '50%' }}>
        Book your Slot
      </Button>
    </form>
  );
}

export default Bookashoot;
