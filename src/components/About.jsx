import React from "react";
import { Container, Box, Typography } from "@mui/material";
import animatedPortrait from "../assets/images/animated-portrait.png";

const About = () => {
  return (
    <>
      <Container>
        <Box
          marginTop="100px"
          display="flex"
          sx={{
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
          }}
        >
          <Typography variant="h2" sx={{ color: "#66FCF1" }}>
            About me
          </Typography>
          <Typography
            sx={{
              color: "#C5C6C7",
              textAlign: "justify",
              "@media (max-width: 600px)": {
              fontSize:"14px",
              marginTop:"24px"
            },
            }}
          >
            Hello, My name is Clifford Tugas, and I am a computer engineer with
            a passion for web development. Through my work, I strive to become a
            good full-stack web developer, and I'm excited to share my journey
            with you. With a little bit years of experience in web development,
            I have honed my skills in learning web development tools and
            technologies, and I'm constantly seeking new challenges and
            opportunities to learn and grow. In this section, you'll learn more
            about my background, skills and values. Thank you for taking the
            time to get to know me better, and I look forward to connecting with
            you!
          </Typography>
          <img
            src={animatedPortrait}
            alt="animated-portrait"
            style={{
              
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default About;
