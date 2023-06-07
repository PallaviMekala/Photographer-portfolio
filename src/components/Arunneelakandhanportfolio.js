import React,{useState} from 'react'
import { Box, Button, Card, Divider, ImageList, ImageListItem, TextField, Typography, Select } from "@mui/material";
import { FormControl, InputLabel, MenuItem } from '@mui/material';
// import Dosa from "./Dosa.jpg";
import { Link } from 'react-router-dom';
import pic1 from "../Assets/Images/Photographer3/pic1.jpg";
import pic2 from "../Assets/Images/Photographer3/pic2.jpg";
import pic3 from "../Assets/Images/Photographer3/pic3.jpg";
import pic4 from "../Assets/Images/Photographer3/pic4.jpg";
import pic5 from "../Assets/Images/Photographer3/pic5.jpg";
import pic6 from "../Assets/Images/Photographer3/pic6.jpg";
import pic7 from "../Assets/Images/Photographer3/pic7.jpg";
import pic8 from "../Assets/Images/Photographer3/pic8.jpg";
import pic9 from "../Assets/Images/Photographer3/pic9.jpg";
import pic10 from "../Assets/Images/Photographer3/pic10.jpg";
import arun from "../Assets/Images/Photographer3/arun.jpg"



const Arunneelakandhanportfolio = () => {
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
      'src': pic1,
      'alt': 'google'
    },
    {
      'id': 2,
      'src': pic2,
      'alt': 'google'
    },
    {
      'id': 3,
      'src': pic3,
      'alt': 'google'
    },
    {
      'id': 4,
      'src': pic4,
      'alt': 'google'
    },
    {
      'id': 5,
      'src': pic5,
      'alt': 'google'
    },
    {
      'id': 6,
      'src': pic6,
      'alt': 'google'
    },
    {
      'id': 7,
      'src': pic8,
      'alt': 'google'
    },
    {
      'id': 8,
      'src': pic7,
      'alt': 'google'
    },
    {
      'id': 9,
      'src': pic9,
      'alt': 'google'
    },
    {
      'id': 10,
      'src': pic10,
      'alt': 'google'
    }
  ]



  const onTimeChange = (event) => {
    // Handle time selection
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

  const showAlert = () => {
    alert('Successfully Booked!');
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
        <Box sx={{ width: "40%" }} alignSelf={'center'} marginTop={5} marginLeft={4}>
          <img src={arun} alt="picture" width={'70%'} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }} width={'50%'} marginTop={2} alignSelf={'center'} >
          <Typography fontFamily={"serif"}>About me</Typography>
          <Typography fontFamily={"cursive"} fontSize={"50px"}>
            Hi, I'm Arun Neelakandhan
          </Typography>
          <Typography variant="body1" marginTop={2} fontFamily={"serif"} fontSize={18}>
            I am an advertising and fashion photographer based in Pune, India. I did my Diploma in photography from Sir J.J. Institute of Applied Arts and Science. In the past few years I have worked with most of the leading Advertising agencies and magazines like O&M, JWT, BBH, DRAFT FCB ULKA, STAR TV, CADBURY, L'OREAL, KELLOGG'S, MARICO, ICICI, ACCU CHECK, CRAFTS VILLA, RAHEJA GROUP, VOGUE, G.Q, ELLE, MARIE CLAIRE, COSMOPOLITAN, HI- BLITZ, VERVE to name a few. I have had the privilege of shooting some of the most celebrated people of India and abroad. I have spent most of my life in Mumbai, though I was born in Gwalior, M.P. I am married and blessed with a beautiful daughter. I am a vegan. I love playing cricket on weekends, listening to music and going for rides.
          </Typography>
          <Button variant="contained" alignItems="center" sx={{ mt: '5%', backgroundColor: "Brown" }}>Book a shoot</Button>
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
            sx={{ m: 1, width: "50%" }}
          />
          <TextField
            sx={{ width: "50%" }}
            type="date"
            value={selectedDate}
            onChange={handleInputChange}
            onSubmit={handleDateSubmit}
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
  )
}

export default Arunneelakandhanportfolio
