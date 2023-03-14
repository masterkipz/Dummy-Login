import React from "react";
import { Box, Container, Typography } from "@mui/material";
import facebookLogo from "../assets/images/facebook-logo.png";
import githubLogo from "../assets/images/github-logo.png";
import linkedinLogo from "../assets/images/linkedin-logo.png";

const Home = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <Typography
          sx={{
            color: "#66FCF1",
            fontSize: "164px",
            fontWeight: "900",
            textAlign: "center",
            marginTop:"30px",
            "@media (max-width: 600px)": {
              fontSize: "80px",
              marginTop:"30px"
            },
          }}
        >
          HELLO
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography
          sx={{
            color: "#C5C6C7",
            fontSize: "24px",
            width: "480px",
            textAlign: "center",
            "@media (max-width: 600px)": {
              fontSize: "18px",
            },
          }}
        >
          I am Cliford and welcome to my portfolio, where I strive to showcase
          my passion for creating great work.
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography
          sx={{
            color: "#C5C6C7",
            fontWeight: "400",
            fontSize: "20px",
            marginTop: "40px",
            border: "1px solid",
            borderRadius: "20px",
            borderColor: "#66FCF1",
            padding: "10px",
            "@media (max-width: 600px)": {
              marginTop: "60px",
            },
          }}
        >
          CONTACT ME
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box
          sx={{
            backgroundColor: "#C5C6C8",

            marginTop: "50px",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width: 600px)": {
              marginTop: "100px",
            },
          }}
        >
          <img
            src={facebookLogo}
            alt="Facebook"
            style={{
              height: "55px",
              width: "55px",
              margin: "15px",
            }}
          />
          <img
            src={githubLogo}
            alt="Facebook"
            style={{
              height: "55px",
              width: "55px",
              margin: "15px",
            }}
          />
          <img
            src={linkedinLogo}
            alt="Facebook"
            style={{
              height: "55px",
              width: "55px",
              margin: "15px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
