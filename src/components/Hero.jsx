import React from 'react'
import { Container, Typography, Button, Box, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import PsychologyIcon from '@mui/icons-material/Psychology'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import BackgroundEffect from './BackgroundEffect'

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: { xs: '4rem 0', md: '6rem 0' },
        overflow: 'hidden',
      }}
    >
      <BackgroundEffect />
      
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 'bold',
                  marginBottom: 2,
                  lineHeight: 1.2,
                }}
              >
                Transform Lives Through Positive Psychology
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  marginBottom: 3,
                  opacity: 0.9,
                  fontWeight: 300,
                }}
              >
                Evidence-based therapeutic approaches to help individuals and professionals achieve mental wellness and personal growth.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: 'white',
                      color: '#667eea',
                      '&:hover': {
                        backgroundColor: '#f8f9fa',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s',
                    }}
                  >
                    Explore Our Resources
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <PsychologyIcon
                  sx={{
                    fontSize: { xs: 150, md: 200 },
                    opacity: 0.8,
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero