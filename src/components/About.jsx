import React from "react";
import { Container, Box, Typography, CardMedia } from "@mui/material";
import animatedPortrait from "../assets/images/animated-portrait.png";

const About = () => {
  return (
    <>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          sx={{
            "@media (max-width: 850px)": {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
            flexDirection: "row",
          }}
        >
          <CardMedia
            component="img"
            image={animatedPortrait}
            alt="my picture"
            sx={{
              opacity: "0.3",
              borderRadius: "30px",
              margin: "auto",
              height: "300px",
              width: "300px",
              "&:not(:focus)": {},
              "@media (max-width: 600px)": {
                height: "250px",
                width: "250px",
                marginTop: "30px",
              },
              "&:hover": {
                opacity: 1,
              },
            }}
          />
          <Box
            margin="auto"
            maxWidth="600px"
            display="flex"
            flexDirection="column"
            sx={{
              "@media (max-width: 600px)": {
                alignItems: "center",
              },
              "@media (max-width: 850px)": {
                alignItems: "center",
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#323232",

                "@media (max-width: 600px)": {
                  fontSize: "42px",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                },
              }}
            >
              About me
            </Typography>
            <Typography
              sx={{
                marginTop: "15px",
                color: "#323232",
                textAlign: "justify",
                "@media (max-width: 600px)": {
                  fontSize: "14px",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                },
              }}
            >
              Hello, My name is Clifford Tugas, and I am a computer engineer
              with a passion for web development. Through my work, I strive to
              become a good full-stack web developer, and I'm excited to share
              my journey with you. With a little bit years of experience in web
              development, I have honed my skills in learning web development
              tools and technologies, and I'm constantly seeking new challenges
              and opportunities to learn and grow. In this section, you'll learn
              more about my background, skills and values. Thank you for taking
              the time to get to know me better, and I look forward to
              connecting with you!
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default About;
