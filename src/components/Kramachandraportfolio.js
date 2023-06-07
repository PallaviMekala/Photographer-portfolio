import React from 'react'
import { Box, Button, Card, Divider, ImageList, ImageListItem, TextField, Typography, Select } from "@mui/material";
import Dosa from "./Dosa.jpg";
import { Link } from 'react-router-dom';


const Kramachandraportfolio = () => {
  const itemData = [

    {
      'id': 1,
      'src': Dosa,
      'alt': 'google'
    },
    {
      'id': 2,
      'src': Dosa,
      'alt': 'google'
    },
    {
      'id': 3,
      'src': Dosa,
      'alt': 'google'
    },
    {
      'id': 4,
      'src': Dosa,
      'alt': 'google'
    },
    {
      'id': 5,
      'src': Dosa,
      'alt': 'google'
    },
    {
      'id': 6,
      'src': Dosa,
      'alt': 'google'
    },
    {
      'id': 7,
      'src': Dosa,
      'alt': 'google'
    },
    {
      'id': 8,
      'src': Dosa,
      'alt': 'google'
    },
    {
      'id': 9,
      'src': Dosa,
      'alt': 'google'
    },
    {
      'id': 10,
      'src': Dosa,
      'alt': 'google'
    }
  ]

  const Selectyourevent = [
    {
      "id": 1,
      "value": "Travelphotograhy"
    },
    {
      "id": 2,
      "value": "Wildlife"
    },
    {
      "id": 3,
      "value": "Photo Journalism"
    }
  ]




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
        <Box sx={{ width: "40%" }} alignSelf={'center'}>
          <img src={Dosa} alt="picture" width={'70%'} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }} width={'50%'} marginTop={2} alignSelf={'center'}>
          <Typography fontFamily={"serif"}>About me</Typography>
          <Typography fontFamily={"cursive"} fontSize={"50px"}>
            Hi, I'm K Rama Chandra
          </Typography>
          <Typography variant="body1" marginTop={2} fontFamily={"serif"} fontSize={18}>
            I am an advertising and fashion photographer based in Pune, India. I did my Diploma in photography from Sir J.J. Institute of Applied Arts and Science. In the past few years I have worked with most of the leading Advertising agencies and magazines like O&M, JWT, BBH, DRAFT FCB ULKA, STAR TV, CADBURY, L'OREAL, KELLOGG'S, MARICO, ICICI, ACCU CHECK, CRAFTS VILLA, RAHEJA GROUP, VOGUE, G.Q, ELLE, MARIE CLAIRE, COSMOPOLITAN, HI- BLITZ, VERVE to name a few. I have had the privilege of shooting some of the most celebrated people of India and abroad. I have spent most of my life in Mumbai, though I was born in Gwalior, M.P. I am married and blessed with a beautiful daughter. I am a vegan. I love playing cricket on weekends, listening to music and going for rides.
          </Typography>
          <Button variant="contained" alignItems="center" sx={{ mt: '5%' }}>Book a shoot</Button>
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
        <Typography alignSelf={'center'} fontSize={70} fontFamily={"revert"}>Book Your Slot</Typography>
        <Card sx={{ m: 4, width: "50%", alignSelf: "center", display: "flex", alignItems: "center", flexDirection: "column" }}>
          {/* <CardContent display="flex" justifyContent="center" flexDirection="column"> */}
          <TextField label="NAME" variant="outlined" sx={{ m: 1, width: "50%" }} />
          <TextField label="CONTACT NUMBER" variant="outlined" sx={{ m: 1, width: "50%" }} />  
          <TextField label="LOCATION" variant="outlined" sx={{ m: 1, width: "50%" }} />
          <Select placeholder="SELECT YOUR EVENT" variant="outlined" sx={{ m: 1, width: "50%" }} options={Selectyourevent} >{Selectyourevent.map((option) => <option value={option.id}>{option.value}</option>)}</Select>
          <TextField label="PRICING" variant="outlined" sx={{ m: 1, width: "50%" }} />
          <Button variant='contained' sx={{ m: 2, width: "50%" }}>Book your Slot</Button>

          {/* </CardContent> */}

        </Card>

      </Box>

    </div>
  )
}

export default Kramachandraportfolio
