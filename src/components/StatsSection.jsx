import { Box, Container, Grid, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const statsData = [
  { number: 5000, suffix: "+", label: "Mental Health Professionals" },
  { number: 200, suffix: "+", label: "Clinical Resources" },
  { number: 50, suffix: "+", label: "Countries Served" },
  { number: 98, suffix: "%", label: "Professional Satisfaction" },
];

const AnimatedStat = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1000;
    const step = Math.max(1, Math.floor(value / 60));

    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setCount(start);
    }, duration / 60);

    return () => clearInterval(interval);
  }, [inView, value]);

  return (
    <Typography
      ref={ref}
      sx={{
        fontSize: { xs: "26px", md: "34px" },
        fontWeight: 800,
        color: "#2563eb",
      }}
    >
      {count.toLocaleString()}
      {suffix}
    </Typography>
  );
};

export default function StatsSection() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: "#f8fafc",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={4}>
          {statsData.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    textAlign: "center",
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: "#ffffff",
                    height: "100%",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
                    "&:hover": {
                      boxShadow: "0 20px 45px rgba(37,99,235,0.2)",
                    },
                  }}
                >
                  {/* Top Gradient Bar */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: "linear-gradient(90deg, #2563eb, #60a5fa)",
                    }}
                  />

                  <AnimatedStat value={stat.number} suffix={stat.suffix} />

                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: "14px",
                      color: "#5f6c7b",
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
      </Box>
    </Container>
  );
}
