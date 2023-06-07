import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function ShareExperienceSection(props) {
  const [name, setName] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const [rating, setRating] = useState();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTestimonialChange = (event) => {
    setTestimonial(event.target.value);
  };

  const handleRating = (event) => {
    setRating(event.target.value);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.testimonials ({
      id : '10', 
      name: name,
      title: 'Client',
      rating: rating,
      testimonial: testimonial,
      avatar: 'https://example.com/avatar1.png'
      
    })
    setName('');
    setTestimonial('');
  };

  return (
    <Box width="50% " textAlign="center" py={8}>
      <Typography variant="h4" mb={4}>
        Kindly Share Your Experience With Us
      </Typography>


      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
          fullWidth
          margin="normal"
          required
        />
        <br />


        <FormControl sx={{ mt: 1, width: "100%" }}>
          <InputLabel id="timeslot-label">RATING</InputLabel>
          <Select
            label = "Rating"
            labelId="timeslot-label"
            id="rating"
            onChange={handleRating}
            value={rating}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Give your rating
            </MenuItem>
            <MenuItem value="1">5</MenuItem>
            <MenuItem value="2">4</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="3">2</MenuItem>
            <MenuItem value="3">1</MenuItem>


          </Select>
        </FormControl>

        <TextField
          label="Your Testimonial"
          variant="outlined"
          multiline
          rows={1}
          value={testimonial}
          onChange={handleTestimonialChange}
          fullWidth
          margin="normal"
          required
        />
        <br />





        <Button variant="contained" type="submit" sx={{ marginTop: "2rem", color: "white", backgroundColor: "#768A96" }} >
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default ShareExperienceSection;
