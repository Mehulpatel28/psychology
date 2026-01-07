import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import heroImage from "../assets/images/hero-ai-emotional-intelligence_tcm7-342220.png";
import heroImage1 from "../assets/images/brain-3535300.jpg";
import heroImage2 from "../assets/images/bg.jpg";

const BackgroundSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // ================================
  // Global Animations
  // ================================
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes zoomBg {
        from { transform: scale(1); }
        to { transform: scale(1.08); }
      }

      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.06); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // ================================
  // Slides Content
  // ================================
  const slides = [
    {
      image: heroImage,
      title: "MindCare",
      subtitle: "Professional Psychological Support",
      description:
        "Confidential, evidence-based mental health care designed to help you understand, heal, and grow.",
      stats: { clients: "20K+", therapists: "80+", programs: "30+" },
    },
    {
      image: heroImage1,
      title: "Emotional Wellbeing",
      subtitle: "Support for Every Stage of Life",
      description:
        "Personalized therapy for stress, anxiety, depression, relationships, and emotional balance.",
      stats: { sessions: "50K+", success: "96%", support: "24/7" },
    },
    {
      image: heroImage2,
      title: "Secure Online Therapy",
      subtitle: "Private. Safe. Accessible.",
      description:
        "Encrypted digital therapy sessions and records so your mental health journey stays protected.",
      stats: { privacy: "100%", access: "Instant", trust: "HIPAA" },
    },
  ];

  // ================================
  // Auto Slide
  // ================================
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      {/* ================= Background ================= */}
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: currentSlide === index ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
            animation: currentSlide === index ? "zoomBg 8s linear" : "none",
            zIndex: 0,
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(48,63,159,0.75), rgba(123,31,162,0.65))",
            },
          }}
        />
      ))}

      {/* ================= Content ================= */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack
          spacing={3}
          alignItems="center"
          textAlign="center"
          sx={{
            width: "100%",
            animation: "fadeUp 1s ease-out",
            px: isMobile ? 1 : 0,
            mt:10
          }}
        >
          {/* Trust Badge */}
          <Stack direction="row" spacing={1} alignItems="center">
            <VerifiedUserIcon sx={{ color: "#FFD700" }} />
            <Typography fontWeight={600} color="#FFD700">
              Trusted Psychological Care Platform
            </Typography>
          </Stack>

          {/* Title */}
          <Typography
            sx={{
              fontSize: {
                xs: "2.2rem",
                sm: "3rem",
                md: "4.2rem",
              },
              fontWeight: 900,
              lineHeight: 1.1,
              background: "linear-gradient(135deg,#fff,#E1BEE7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {slides[currentSlide].title}
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", md: "1.6rem" },
              fontWeight: 600,
              color: "#FFD700",
            }}
          >
            {slides[currentSlide].subtitle}
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              maxWidth: 680,
              fontSize: { xs: "1rem", md: "1.15rem" },
              lineHeight: 1.7,
              opacity: 0.95,
            }}
          >
            {slides[currentSlide].description}
          </Typography>

          {/* Stats */}
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            {Object.entries(slides[currentSlide].stats).map(
              ([key, value]) => (
                <Grid item xs={4} sm={3} key={key}>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.4rem", md: "1.8rem" },
                      fontWeight: 800,
                      color: "#FFD700",
                      animation: "pulse 3s infinite",
                    }}
                  >
                    {value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      opacity: 0.9,
                      textTransform: "capitalize",
                    }}
                  >
                    {key}
                  </Typography>
                </Grid>
              )
            )}
          </Grid>
        </Stack>
      </Container>

      {/* ================= Progress Bar ================= */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 4,
          background: "rgba(255,255,255,0.25)",
          zIndex: 3,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            background: "linear-gradient(90deg,#FFD700,#FFA500)",
            transition: "width 0.6s ease",
          }}
        />
      </Box>
    </Box>
  );
};

export default BackgroundSection;
