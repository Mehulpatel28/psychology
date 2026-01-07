import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import BackgroundSection from '../components/BackgroundSection'
import GetStarted from '../components/GetStarted'
import StatsSection from '../components/StatsSection'

const Home = () => {
  return (
    <Box>
      <BackgroundSection />
      <GetStarted/>
      {/* <Hero /> */}
      {/* <Services /> */}
      <Testimonials />
      <Team />
      
      {/* CTA Section */}
     <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={0}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 4,
                textAlign: 'center',
                px: { xs: 3, md: 6 },
                py: { xs: 5, md: 7 },
                background:
                  'linear-gradient(135deg, #1A3C79 0%, #2C5AA0 100%)',
                color: '#fff',
              }}
            >
              {/* Decorative Glow */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '-60px',
                  right: '-60px',
                  width: 200,
                  height: 200,
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '50%',
                  filter: 'blur(70px)',
                }}
              />

              <Typography
                sx={{
                  fontSize: { xs: '26px', md: '34px' },
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                Ready to Elevate Mental Health Care?
              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  opacity: 0.9,
                  maxWidth: 640,
                  mx: 'auto',
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                Join a growing community of psychologists and mental health
                professionals using secure, evidence-based digital tools to
                support wellbeing and therapy outcomes.
              </Typography>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: '#ffffff',
                  color: '#1A3C79',
                  fontWeight: 700,
                  px: 5,
                  py: 1.6,
                  fontSize: '16px',
                  borderRadius: '12px',
                  textTransform: 'none',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
                  '&:hover': {
                    backgroundColor: '#f4f6fb',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 18px 40px rgba(0,0,0,0.35)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get Started Today
              </Button>
            </Paper>
          </motion.div>
        </Container>
      
      {/* Stats Section */}
       {/* <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { number: '5,000+', label: 'Mental Health Professionals' },
              { number: '200+', label: 'Clinical Resources' },
              { number: '50+', label: 'Countries Served' },
              { number: '98%', label: 'Professional Satisfaction' },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: '#ffffff',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
                      height: '100%',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: '26px', md: '32px' },
                        fontWeight: 800,
                        color: '#3498db',
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#5f6c7b',
                        fontWeight: 600,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}
      <StatsSection/>
    </Box>
  )
}

export default Home