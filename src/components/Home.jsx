import React from "react";
import { Box, Container, Typography, ButtonBase } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <Typography
          sx={{
            color: "#323232",
            fontSize: "164px",
            textAlign: "center",
            marginTop: "30px",
            "@media (max-width: 600px)": {
              fontSize: "80px",
              marginTop: "30px",
            },
          }}
        >
          Hello
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography
          sx={{
            color: "#323232",
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
        <ButtonBase
          sx={{
            backgroundColor: "#323232",
            color: "#FFF",
            fontWeight: "400",
            fontSize: "20px",
            marginTop: "40px",
            border: "2px solid",
            borderRadius: "15px",
            borderColor: "#323232",
            padding: "10px",
            "@media (max-width: 600px)": {
              marginTop: "60px",
            },
          }}
        >
          <Typography>Contact me</Typography>
        </ButtonBase>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box
          sx={{
            backgroundColor: "#DDD0C8",

            marginTop: "50px",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width: 600px)": {
              marginTop: "100px",
            },
          }}
        ></Box>
      </Box>
    </Container>
  );
};

export default Home;
