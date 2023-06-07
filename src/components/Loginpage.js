import React from 'react'
import { Typography, Button, Grid, TextField, InputAdornment } from '@mui/material'
import { Visibility } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Loginpage = () => {

  const navigate= useNavigate ()
//   const onSubmitHandler = () => {
//     navigate('/signuppage')
// }

const showAlert = () => {
  alert('Your are sucessfully logged in !');
};
  
  

  return (
  <div>
    <center>

      <Grid container spacing={2} my={1} p={10}>
          <Grid item xs={12}>
          <Typography variant="h3" component="h3" color='#29353C' fontFamily={'serif'} fontWeight={700}> Login/Signup </Typography>
          </Grid>
      </Grid> 
      <Grid container spacing={2} p={2} border={2} sx={{borderColor:"#44576D", width:'40%'}} > 
          <Grid item xs={12} > 
          <form>
            <TextField label="Username" variant="outlined" required sx={{width:"75%"}} />
          </form>  
          </Grid> <br/>
          <Grid item xs={12} >
            <TextField label="Password" variant='outlined' type= "password" required helperText="Don't share your password with anyone" sx={{width:"75%"}}
            inputProps={{
              endAdornment:<InputAdornment position='end'><Visibility/></InputAdornment>
            }} />
          </Grid><br/> 
          <Grid item xs={12}>
          <Button variant="contained" sx={{backgroundColor:"#768A96"}} onClick={() => navigate('/homepage')}> Login </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="grey"> Not a member? 
              <Button variant="text" sx={{color:"#44576D"}}
              onClick={() => navigate("/signuppage")}> Sign Up
              </Button>
            </Typography>
    </Grid>
      </Grid>      

    </center>


  </div>
)
}
export default Loginpage
