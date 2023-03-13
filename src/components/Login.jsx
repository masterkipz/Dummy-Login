import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";

const mainContainer = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  height: "100vh",
};

const leftContainer = {
  gridColumn: "1",
  backgroundColor:"blue"
};

const rightContainer = {
  gridColumn: "2",
};

const Login = () => {
  return (
    <div style={mainContainer}>
      <div style={leftContainer}>
        <h1>DICT R1 </h1>
      </div>
      <div style={rightContainer}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "100px",
          }}
        >
          <Box
            sx={{
              height: "500px",
              width: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              sx={{
                height: "500px",
                width: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "skyblue",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <h1>Welcome Back</h1>
                <Typography variant="subtitle1">Email</Typography>
                <input />
                <Typography variant="subtitle1">Password</Typography>
                <input />
                <Typography sx={{ fontSize: "10px", textAlign: "right" }}>
                  Forgot Password?
                </Typography>
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "blue",
                    marginTop: "10px",
                  }}
                >
                  Login
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Login;
