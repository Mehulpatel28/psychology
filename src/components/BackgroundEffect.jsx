import React from 'react'
import { motion } from 'framer-motion'
import { Box } from '@mui/material'

const BackgroundEffect = () => {
  const circles = Array.from({ length: 10 }, (_, i) => i)

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {circles.map((i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: `1px solid rgba(255, 255, 255, ${0.1 + i * 0.05})`,
            width: `${50 + i * 50}px`,
            height: `${50 + i * 50}px`,
            top: `${20 + i * 10}%`,
            left: `${10 + i * 5}%`,
          }}
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
      
      {circles.map((i) => (
        <motion.div
          key={`bubble-${i}`}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: `rgba(255, 255, 255, ${0.05 + i * 0.02})`,
            width: `${20 + i * 10}px`,
            height: `${20 + i * 10}px`,
            top: `${70 - i * 8}%`,
            right: `${15 + i * 3}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </Box>
  )
}

export default BackgroundEffect