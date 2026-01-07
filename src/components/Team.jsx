import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  School as SchoolIcon,
  Stars as StarsIcon,
} from '@mui/icons-material';

/* 👉 IMPORT TEAM IMAGES */
import alexImg from '../assets/team/alex.png';
import mayaImg from '../assets/team/maya.png';
import jamesImg from '../assets/team/james.png';
import lisaImg from '../assets/team/lisa.png';

const teamMembers = [
  {
    name: 'Dr. Alex Morgan',
    role: 'Clinical Director',
    expertise: ['CBT', 'Positive Psychology', 'Trauma Therapy'],
    bio: '15+ years of clinical experience with a focus on evidence-based interventions.',
    social: { linkedin: '#', twitter: '#' },
    color: '#6366f1',
    image: alexImg,
  },
  {
    name: 'Dr. Maya Patel',
    role: 'Research Lead',
    expertise: ['Research Methodology', 'Statistics', 'Psychometrics'],
    bio: 'PhD in Clinical Psychology with numerous published research papers.',
    social: { linkedin: '#', twitter: '#' },
    color: '#ec4899',
    image: mayaImg,
  },
  {
    name: 'Dr. James Wilson',
    role: 'Training Coordinator',
    expertise: ['Workshop Facilitation', 'Professional Development', 'Supervision'],
    bio: 'Specializes in training mental health professionals and clinical supervision.',
    social: { linkedin: '#', twitter: '#' },
    color: '#8b5cf6',
    image: jamesImg,
  },
  {
    name: 'Dr. Lisa Chen',
    role: 'Content Development',
    expertise: ['Therapeutic Tools', 'Mindfulness', 'Digital Health'],
    bio: 'Creates practical therapeutic resources with 10+ years of clinical experience.',
    social: { linkedin: '#', twitter: '#' },
    color: '#06b6d4',
    image: lisaImg,
  },
];

const Team = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        py: 10,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background blobs */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={8}>
            <Box display="inline-flex" alignItems="center" gap={1} mb={2}>
              <StarsIcon sx={{ color: '#6366f1', fontSize: 28 }} />
              <Typography
                variant="overline"
                sx={{
                  color: '#3498db',
                  fontWeight: 700,
                  letterSpacing: 2,
                  fontSize: '0.875rem',
                }}
              >
                OUR TEAM
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: 28, md: 36 },
                fontWeight: 800,
                mb: 2,
                background:
                  'linear-gradient(135deg, #1A3C79 0%, #2C5AA0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Meet Our Expert Team
            </Typography>

            <Typography sx={{ fontSize: 16, color: '#5f6c7b' }}>
              Experienced psychologists and mental health professionals dedicated
              to your wellbeing
            </Typography>
          </Box>
        </motion.div>

        {/* Team Cards */}
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    border: '1px solid rgba(0,0,0,0.05)',
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(10px)',
                    transition: '0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 24px 48px rgba(0,0,0,0.12)',
                      borderColor: member.color,
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    {/* IMAGE AVATAR */}
                    <Box
                      className="avatar"
                      sx={{
                        width: 110,
                        height: 110,
                        mx: 'auto',
                        mb: 3,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: `0 8px 16px ${member.color}40`,
                        border: `4px solid ${member.color}30`,
                        transition: '0.4s ease',
                      }}
                    >
                      <Box
                        component="img"
                        src={member.image}
                        alt={member.name}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>

                    <Typography fontWeight={700} fontSize="1.2rem" mb={1}>
                      {member.name}
                    </Typography>

                    <Box
                      display="inline-flex"
                      alignItems="center"
                      gap={0.5}
                      px={2}
                      py={0.5}
                      mb={2}
                      borderRadius={2}
                      sx={{
                        backgroundColor: `${member.color}15`,
                        color: member.color,
                      }}
                    >
                      <SchoolIcon fontSize="small" />
                      <Typography fontSize="0.85rem" fontWeight={600}>
                        {member.role}
                      </Typography>
                    </Box>

                    <Typography fontSize="0.9rem" color="#64748b" mb={2.5}>
                      {member.bio}
                    </Typography>

                    <Box
                      display="flex"
                      flexWrap="wrap"
                      justifyContent="center"
                      gap={1}
                      mb={3}
                    >
                      {member.expertise.map((skill, idx) => (
                        <Chip
                          key={idx}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: `${member.color}10`,
                            color: member.color,
                            fontWeight: 600,
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Box>

                    <Box display="flex" justifyContent="center" gap={1}>
                      <IconButton sx={{ color: '#0077b5' }}>
                        <LinkedInIcon fontSize="small" />
                      </IconButton>
                      <IconButton sx={{ color: '#1da1f2' }}>
                        <TwitterIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
