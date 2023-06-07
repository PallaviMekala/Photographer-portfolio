import React, { useState } from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const testimonials = [
  {
    id: 1,
    name: 'Nani',
    title: 'Client',
    rating: 5,
    testimonial:
      'Working with this photographer was an incredible experience. Their attention to detail and ability to capture the perfect moments truly impressed me. I couldn\'t be happier with the results!',
    avatar: 'https://example.com/avatar1.png',
  },
  {
    id: 2,
    name: 'Kavitha',
    title: 'Client',
    rating: 4.5,
    testimonial:
      'I had the pleasure of having this photographer capture the most important moments of my life. Their professionalism and creativity exceeded my expectations. I highly recommend their services!',
    avatar: 'https://example.com/avatar2.png',
  },
  {
    id: 3,
    name: 'Shreeja',
    title: 'Client',
    rating: 4.5,
    testimonial:
      'The photographer has an amazing ability to capture emotions in their work. Each photograph tells a story and brings back memories that will last a lifetime. I would definitely hire them again for future events.',
    avatar: 'https://example.com/avatar3.png',
  },
  {
    id: 4,
    name: 'Kiran',
    title: 'Client',
    rating: 5,
    testimonial:
      'I am extremely impressed with the photographer\'s professionalism and attention to detail. They made me feel comfortable throughout the entire photoshoot and the final results exceeded my expectations. Highly recommended!',
    avatar: 'https://example.com/avatar4.png',
  },
  {
    id: 5,
    name: 'Mahi',
    title: 'Client',
    rating: 4,
    testimonial:
      'The photographer\'s unique perspective and artistic vision are truly remarkable. They have an incredible ability to capture the beauty of each moment and create breathtaking images. I am thrilled with the photographs they took.',
    avatar: 'https://example.com/avatar5.png',
  },
  {
    id: 6,
    name: 'Naga Venkat ',
    title: 'Client',
    rating: 5,
    testimonial:
      'I was amazed by the photographer\'s professionalism and creativity. They went above and beyond to capture the essence of our special day. The photos turned out even better than I could have imagined. Thank you for the wonderful memories!',
    avatar: 'https://example.com/avatar6.png',
  },
  {
    id: 7,
    name: 'Pallavi',
    title: 'Client',
    rating: 4,
    testimonial:
      'Choosing this photographer was the best decision we made for our wedding. They were able to capture every important moment and emotion. The quality of their work is exceptional, and we are grateful for the beautiful memories they have given us.',
    avatar: 'https://example.com/avatar7.png',
  },
];

function TestimonialSection(props) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[currentTestimonialIndex];

  const handlePreviousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  if (props.newTestimonal){
    testimonials.push(props.newTestimonal)
  }

  return (
    <Box textAlign="center" py={8}>
      <Typography variant="h4" mb={4}>
        What Client Says About Us 
      </Typography>

      <Box maxWidth={600} mx="auto" mb={6}>
        <Avatar src={currentTestimonial.avatar} alt={currentTestimonial.name} sx={{ width: 80, height: 80, mb: 2, mx: 'auto' }} />

        <Typography variant="h6" mb={1}>
          {currentTestimonial.name}
        </Typography>

        <Typography variant="subtitle1" mb={2}>
          {currentTestimonial.title}
        </Typography>

        <Box display="flex" justifyContent="center" mb={2}>
          {Array.from({ length: Math.floor(currentTestimonial.rating) }, (_, index) => (
            <StarRateIcon key={index} sx={{color: "gold"}}/>
          ))}
          {currentTestimonial.rating % 1 !== 0 && (
            <StarRateIcon sx={{ color: 'gold' }} />
          )}
          {currentTestimonial.rating % 0.5 !== 0 && (
            <StarHalfIcon sx={{ color: 'gold' }} />
          )}
        </Box>

        <Typography variant="body1">{currentTestimonial.testimonial}</Typography>
      </Box>

      <Box display="flex" justifyContent="center">
        <IconButton onClick={handlePreviousTestimonial}>
          <NavigateBeforeIcon />
        </IconButton>

        <IconButton onClick={handleNextTestimonial}>
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default TestimonialSection;
