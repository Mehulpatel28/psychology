import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

import {
  School,
  Psychology,
  Groups,
  EmojiEmotions,
  SelfImprovement,
  Spa,
} from "@mui/icons-material";

const services = [
  {
    title: "Professional Training",
    description:
      "Comprehensive courses and certifications for mental health professionals.",
    icon: <School fontSize="large" />,
    color: "#3498db",
  },
  {
    title: "Therapy Resources",
    description:
      "Evidence-based tools and worksheets for modern therapy approaches.",
    icon: <Psychology fontSize="large" />,
    color: "#9b59b6",
  },
  {
    title: "Group Workshops",
    description:
      "Interactive workshops for emotional growth and wellness.",
    icon: <Groups fontSize="large" />,
    color: "#2ecc71",
  },
  {
    title: "Positive Psychology",
    description:
      "Build resilience, happiness, and emotional strength.",
    icon: <EmojiEmotions fontSize="large" />,
    color: "#f1c40f",
  },
  {
    title: "Mindfulness Programs",
    description:
      "Guided meditation and mindfulness practices.",
    icon: <SelfImprovement fontSize="large" />,
    color: "#e74c3c",
  },
  {
    title: "Wellness Coaching",
    description:
      "Personal coaching for balance and clarity in life.",
    icon: <Spa fontSize="large" />,
    color: "#1abc9c",
  },
];

const Services = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="services"
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
        background: isDark
          ? "linear-gradient(180deg,#0f172a,#020617)"
          : "linear-gradient(180deg,#f9fbff,#ffffff)",
      }}
    >
      {/* ================= FLOATING PARTICLES ================= */}
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.15, y: 0 }}
          animate={{
            y: [-25, 25, -25],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: isDark
              ? "rgba(148,163,184,0.25)"
              : "rgba(52,152,219,0.25)",
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* ================= SECTION HEADER ================= */}
        <Box textAlign="center" mb={6}>
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "2.6rem" },
              fontWeight: 900,
              mb: 1,
              background:
                "linear-gradient(90deg,#3498db,#9b59b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Services
          </Typography>

          <Typography
            sx={{
              maxWidth: 720,
              mx: "auto",
              color: isDark ? "grey.400" : "text.secondary",
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            Thoughtfully designed mental health services for healing,
            growth, and long-term wellbeing.
          </Typography>
        </Box>

        {/* ================= SERVICES GRID ================= */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    background: isDark
                      ? "rgba(15,23,42,0.85)"
                      : "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(12px)",
                    boxShadow: isDark
                      ? "0 20px 40px rgba(0,0,0,0.6)"
                      : "0 20px 40px rgba(0,0,0,0.1)",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      transform: "translateY(-12px)",
                      boxShadow: `0 30px 60px ${service.color}55`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    {/* ================= ICON (HOVER ANIMATED) ================= */}
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        mx: "auto",
                        mb: 3,
                        borderRadius: "50%",
                        background: `${service.color}22`,
                        color: service.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: `0 10px 25px ${service.color}40`,
                        transition:
                          "transform 0.45s ease, box-shadow 0.45s ease",
                        "& svg": {
                          transition:
                            "transform 0.45s ease",
                        },
                        "&:hover": {
                          boxShadow: `0 18px 40px ${service.color}60`,
                        },
                        "&:hover svg": {
                          transform:
                            "rotate(10deg) scale(1.25)",
                        },
                      }}
                    >
                      {service.icon}
                    </Box>

                    {/* TITLE */}
                    <Typography
                      sx={{
                        fontSize: "1.25rem",
                        fontWeight: 800,
                        mb: 1,
                        color: isDark ? "#fff" : "#1e293b",
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* DESCRIPTION */}
                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        mb: 3,
                        color: isDark ? "grey.400" : "text.secondary",
                        lineHeight: 1.7,
                      }}
                    >
                      {service.description}
                    </Typography>

                    {/* CTA BUTTON (RIPPLE ENABLED) */}
                    <Button
                      variant="contained"
                      disableElevation
                      sx={{
                        px: 4,
                        py: 1,
                        borderRadius: "30px",
                        fontWeight: 700,
                        background: `linear-gradient(135deg, ${service.color}, #000)`,
                        "&:hover": {
                          background: service.color,
                        },
                      }}
                    >
                      Learn More
                    </Button>
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

export default Services;
