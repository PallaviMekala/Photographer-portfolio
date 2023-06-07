import React, { useState } from 'react'
import { Box, Button, Card, Divider, ImageList, ImageListItem, TextField, Typography, Select } from "@mui/material";
import { FormControl, InputLabel, MenuItem } from '@mui/material';
// import Dosa from "./Dosa.jpg";

import { Link } from 'react-router-dom';
import Lion from "../Assets/Images/Photographer1/Lion.jpg";
import venkat from "../Assets/Images/Photographer1/Venkat.jpg";
import Cow from "../Assets/Images/Photographer1/cow.jpg";
import dear from "../Assets/Images/Photographer1/dear.jpg";
import elephant from "../Assets/Images/Photographer1/Elephant.jpg";
import donkey from "../Assets/Images/Photographer1/donkey.jpg";
import giraffe from "../Assets/Images/Photographer1/Giraffe.jpg";
import monkey from "../Assets/Images/Photographer1/monkey.jpg";
import birds from "../Assets/Images/Photographer1/birds.jpg";
import camel from "../Assets/Images/Photographer1/camel.jpg";



const Portfoliopage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    location: '',
    timeSlot: '',
    event: '',
  });

 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/book/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log(response)
        if (response.ok) {
          alert(' Your event Booked successfully!');
  
          console.log('Your slot booked sucessfully!');

        } else {
          console.log('Booking failed. Please try again.');

        }
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const itemData = [

    {
      'id': 1,
      'src': Lion,
      'alt': 'google'
    },
    {
      'id': 2,
      'src': elephant,
      'alt': 'google'
    },
    {
      'id': 3,
      'src': donkey,
      'alt': 'google'
    },
    {
      'id': 4,
      'src': dear,
      'alt': 'google'
    },
    {
      'id': 5,
      'src': birds,
      'alt': 'google'
    },
    {
      'id': 6,
      'src': monkey,
      'alt': 'google'
    },
    {
      'id': 7,
      'src': Cow,
      'alt': 'google'
    },
    {
      'id': 8,
      'src': giraffe,
      'alt': 'google'
    },
    {
      'id': 9,
      'src': camel,
      'alt': 'google'
    },
    {
      'id': 10,
      'src': Lion,
      'alt': 'google'
    }
  ]



  const onTimeChange = (event) => {
    console.log('Selected Time:', event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState('');

  const handleInputChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleDateSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Date:', selectedDate);
  };
  




  return (
    <div className="App">
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="text"><Link to="/homepage">Home</Link></Button>
        <Button variant="text">Services</Button>
        <Button variant="text">Contact</Button>
        <Button variant="text"><Link to="/">Login</Link></Button>
        <Button variant="text"><Link to="/signuppage">Sign Up</Link></Button>
      </Box>
      <Divider />

      <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', mt: '3%', mb: '3%' }}>
        <Box sx={{ width: "40%" }} alignSelf={'center'} marginTop={5}>
          <img src={venkat} alt="picture" width={'70%'} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }} width={'50%'} marginTop={2} alignSelf={'center'}>
          <Typography fontFamily={"serif"}>About me</Typography>
          <Typography fontFamily={"cursive"} fontSize={"50px"}>
            Hi, I'm Venkata RamaKrishna
          </Typography>
          <Typography variant="body1" marginTop={2} fontFamily={"serif"} fontSize={18}>
            I am an advertising and fashion photographer based in Pune, India. I did my Diploma in photography from Sir J.J. Institute of Applied Arts and Science. In the past few years I have worked with most of the leading Advertising agencies and magazines like O&M, JWT, BBH, DRAFT FCB ULKA, STAR TV, CADBURY, L'OREAL, KELLOGG'S, MARICO, ICICI, ACCU CHECK, CRAFTS VILLA, RAHEJA GROUP, VOGUE, G.Q, ELLE, MARIE CLAIRE, COSMOPOLITAN, HI- BLITZ, VERVE to name a few. I have had the privilege of shooting some of the most celebrated people of India and abroad. I have spent most of my life in Mumbai, though I was born in Gwalior, M.P. I am married and blessed with a beautiful daughter. I am a vegan. I love playing cricket on weekends, listening to music and going for rides.
          </Typography>
          <Button variant="contained" alignItems="center" sx={{ mt: '5%', backgroundColor: "#424242" }}>Book a shoot</Button>
        </Box>
      </Box>

      <Box display='flex' flexDirection={'column'} justifyContent={'center'}>
        <Typography alignSelf={'center'} fontSize={70} fontFamily={"revert"}>My Recent Works </Typography>
        <Box alignSelf={'center'}>
          <ImageList
            sx={{ width: 1000, height: 600, mt: 3 }}
            alignSelf={'center'}
          >
            {itemData.map(item => (
              <ImageListItem key={item.id}>
                <img src={item.src} alt={item.alt} loading='lazy' />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
      <Box display='flex' flexDirection={'column'} justifyContent={'center'}>
        <Typography alignSelf={'center'} fontSize={70} fontFamily={"revert"} marginTop={5}>Book Your Slot</Typography>
        <Card sx={{
          m: 4, width: "50%",
          alignSelf: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}>
          <TextField
            label="NAME"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ m: 1, width: "50%" }}
          />
          <TextField
            label="CONTACT NUMBER"
            variant="outlined"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            sx={{ m: 1, width: "50%" }}
          />
          <TextField
            label="LOCATION"
            variant="outlined"
            name="location"
            value={formData.location}
            onChange={handleChange}
            onSubmit={handleDateSubmit}
            sx={{ m: 1, width: "50%" }}
          />
          <TextField
            sx={{ width: "50%" }}
            type="date"
            value={selectedDate}
            onChange={handleInputChange}
            required
          />
          <FormControl sx={{ m: 1, width: "50%", mt: 2 }}>
            <InputLabel id="timeslot-label">TIME SLOT</InputLabel>
            <Select
              label="TIME SLOT"
              labelId="timeslot-label"
              id="timeslot"
              name="timeSlot"
              value={formData.timeSlot}
              onChange={onTimeChange}
              displayEmpty
            >
              {/* <MenuItem value="" disabled>
                Select your timeslot
              </MenuItem> */}
              <MenuItem value="1">10 AM to 12 PM</MenuItem>
              <MenuItem value="2">12 PM to 2 PM</MenuItem>
              <MenuItem value="3">2 PM to 4 PM</MenuItem>
              <MenuItem value="4">4 PM to 6 PM</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: "50%" }}>
            <InputLabel id="timeslot-label">SELECT YOUR EVENT</InputLabel>
            <Select
              label="SELECT YOUR EVENT"
              labelId="SELECT-YOUR-EVENT"
              id="selectyourevent"
              name="event"
              value={formData.event}
              onChange={handleChange}
              displayEmpty
            >
              {/* <MenuItem value="" disabled>
                Select your event
              </MenuItem> */}
              <MenuItem value="1">Wedding</MenuItem>
              <MenuItem value="2">Portraits</MenuItem>
              <MenuItem value="3">Cermonies</MenuItem>

            </Select>
          </FormControl>
          <Button variant='contained'onClick={handleSubmit} sx={{ m: 2, width: "50%", backgroundColor: "#424242" }}>Book your Slot</Button>


          {/* </CardContent> */}

        </Card>

      </Box>

    </div>
  );
}

export default Portfoliopage




