import React from 'react'
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'

const Cardscomponent = () => {
  return (
    <Box width="300px">
        <Card>
            <CardMedia>
                
            </CardMedia>
            <CardContent>
              <Typography variant='h4' color='palevioletred' >Phographer1</Typography>
              <Typography variant='body1' color='paleturquoise'> 
              Step into a world of captivating visuals and artistic storytelling. We invite you to explore our collection of mesmerizing photographs that capture fleeting moments, evoke emotions, and unveil the beauty of the world around us.
              </Typography>
            </CardContent>
            <CardActions>
                <Button variant='text' color='primary'>Learnmore</Button>
                <Button variant='text' color='primary'>Seemyportfolio</Button>
            </CardActions>
        </Card>
      
    </Box>
  )
}

export default Cardscomponent
