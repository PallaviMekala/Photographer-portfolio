import React, {useState} from 'react'
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia,Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import TestimonialsSection from './Testimonial'
import ShareExperienceSection from './Shareyourexperience'



const Homepage = () => {

  const [newTestimonial, setNewTestimonial] = useState({})

  // useEffect(()=> {

  // }, [])
  const handleTestimonial = (data) => {
    setNewTestimonial(data)
  }

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
        <Button variant="text"><Link to="/homepage">Home</Link></Button>
        <Button variant="text">Services</Button>
        <Button variant="text">Contact</Button>
        <Button variant="text"><Link to="/">Login</Link></Button>
        <Button variant="text"><Link to="/signuppage">Sign Up</Link></Button>
      </Box>
      <Divider />

       <center>
       <Typography alignSelf={'center'} fontSize={50} fontFamily={"serif"} fontWeight={500} color='329353C' marginTop={5}> WELCOME TO OUR PAGE </Typography>
       </center>
       <Box mx="2rem" width="1200px">
        <center>
        <Typography variant="body1" color="black" marginLeft={22} marginTop={2} fontFamily={"revert"} fontSize={19} color='#44576D' >
          With a keen eye for detail and a passion for the craft, photography brings life to each frame, transforming
          ordinary scenes into extraordinary works of art. From breathtaking landscapes to intimate portraits, every
          photograph tells a unique story and invites you to become a part of it.
        </Typography>
        

        <Typography variant="body1" color="black" mt="1rem" marginLeft={22} marginTop={1} fontFamily={"revert"} fontSize={19} color='#44576D'>
          Whether you are seeking inspiration, searching for the perfect image to adorn your space, or simply
          appreciating the artistry of photography, we invite you to immerse yourself in the journey that unfolds
          through our portfolio. Feel the magic, the emotions, and the beauty that radiate from each photograph. Thank
          you for visiting Portfolio. We hope you find joy, inspiration, and a renewed appreciation for the power of
          visual storytelling within these pages.
        </Typography>
        </center>
      </Box>
       
       <center>  
       <Typography alignSelf={'center'} fontSize={50} fontFamily={"serif"} fontWeight={500} color='329353C' marginTop={6}> OUR PHOTOGRAPHERS </Typography>  
       <Box width="1200px" display="flex" flexDirection="row" justifyContent={'space-between'} marginTop={5}>
         <Card sx={{m:4}}>
             <CardMedia
               component='img'
               height ='140'
               image='data:image/jpeg;base64,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'
               alt='photographerimage'>
             </CardMedia>
             <CardContent>
               <Typography variant='h4' color='329353C' fontFamily={'serif'} >Venkata Rama Krishnna</Typography>
               <Typography variant='body1'  color='#44576D' fontFamily={'revert'} marginTop={3}> 
               Step into a world of captivating visuals and artistic storytelling. We invite you to explore our collection of mesmerizing photographs that capture fleeting moments, evoke emotions, and unveil the beauty of the world around us.
               </Typography>
             </CardContent>
             <CardActions>
                
                 <Button variant='text' color='primary' sx={{marginLeft:"25%"}} ><Link to="/portfoliopage">Seemyportfolio</Link></Button>
               
             </CardActions>
         </Card>
         <Card sx={{m:4}}>
             <CardMedia
               component='img'
               height ='140'
               image='https://iso.500px.com/wp-content/uploads/2016/03/pedroquintela-1500x844.jpg'
               alt='photographerimage'>
             </CardMedia>
             <CardContent>
               <Typography variant='h4' color='329353C' fontFamily={'serif'} marginTop={2}> Leela Thomas </Typography>
               <Typography variant='body1'  color='#44576D' fontFamily={'revert'} marginTop={6} >

               Step into a world of captivating visuals and artistic storytelling. We invite you to explore our collection of mesmerizing photographs that capture fleeting moments, evoke emotions, and unveil the beauty of the world around us.
               </Typography>
             </CardContent>
             <CardActions>
                
                 <Button variant='text' color='primary'  sx={{marginLeft:"25%"}} ><Link to="/leelaportfolio">Seemyportfolio</Link></Button>
             </CardActions>
         </Card>
         <Card sx={{m:4}}>
             <CardMedia
               component='img'
               height ='140'
               image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_UV5HNE7MVsnZHigX_x9gb8BoDcrsOSGFBA&usqp=CAU'
               alt='photographerimage'>
             </CardMedia>
             <CardContent>
               <Typography variant='h4' color='329353C' fontFamily={'serif'} marginTop={2}>Arun Neelakandhan</Typography>
               <Typography variant='body1' color='#44576D' fontFamily={'revert'} marginTop={6}> 
               Step into a world of captivating visuals and artistic storytelling. We invite you to explore our collection of mesmerizing photographs that capture fleeting moments, evoke emotions, and unveil the beauty of the world around us.
               </Typography>
             </CardContent>
             <CardActions>
               
             <Button variant='text'  sx={{marginLeft:"25%", Color:"#768A96"}} ><Link to="/arunportfolio">See my portfolio</Link></Button>
               
             </CardActions>
         </Card>
       
       </Box>
       </center>  
       <center>
       <Typography alignSelf={'center'} fontSize={50} fontFamily={"serif"} fontWeight={500} color='329353C' marginTop={3}> TESTIMONIALS </Typography>
       <TestimonialsSection newTestimonal = {newTestimonial}/>
       <ShareExperienceSection testimonials = {(data)=>handleTestimonial(data)}/>
      
 
 
       </center>
      
    </div>
  )
}

export default Homepage
