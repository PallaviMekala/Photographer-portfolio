import React, { useState } from 'react';
import { Typography, Button, Grid, TextField, InputAdornment } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Signuppage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
    gender: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/api/Users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log(response.ok)
        if (response.ok) {
            setFormData({
              name: '',
              email: '',
            });
            alert('You are signed up successfully!');
          console.log('Signup successful!');

        } else {
          alert('Failed to store data in the database');
          console.log('Signup failed. Please try again.');

        }
      })
      .catch((error) => {
        console.error(error);
      });
  };



  return (
    <div>
      <center>
        <Grid container spacing={2} p={5}>
          <Grid item xs={12}>
            <Typography variant="h3" component="h3" color="#29353C" fontWeight={600} fontFamily="serif">
              Login/Signup
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} p={2} border={2} sx={{ borderColor: '44576D', width: '50%' }}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              required
              name="username"
              value={formData.username}
              onChange={handleChange}
              sx={{ width: '75%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ width: '75%' }}
            />
          </Grid>
          <br />
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              required
              helperText="Don't share your password with anyone"
              name="password"
              value={formData.password}
              onChange={handleChange}
              sx={{ width: '75%' }}
              inputProps={{
                endAdornment: <InputAdornment position="end"><Visibility /></InputAdornment>,
              }}
            />
          </Grid>
          <br />
          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              required
              helperText="Don't share your password with anyone"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              sx={{ width: '75%' }}
              inputProps={{
                endAdornment: <InputAdornment position="end"><Visibility /></InputAdornment>,
              }}
            />
          </Grid>
          <br />
          <Grid item xs={12}>
            <TextField
              label="Contact Number"
              type="number"
              variant="outlined"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              sx={{ width: '75%' }}
            />
          </Grid>
          <br />
          <Grid item xs={12}>
            <TextField
              label="Gender"
              variant="outlined"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              sx={{ width: '75%' }}
            />
          </Grid>
          <br />
          <Grid item xs={12}>
            <TextField
              label="City"
              variant="outlined"
              name="city"
              value={formData.city}
              onChange={handleChange}
              sx={{ width: '75%' }}
            />
          </Grid>
          <br />
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSubmit}><Link to="/homepage">Sign Up</Link></Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="grey">
              Already a member?{' '}
              <Button variant="text" color="primary">
                <Link to="/">Login</Link>
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </center>
    </div>
  );
};

export default Signuppage;
