import React from "react";
import {
  Container,
  Box,
  Typography,
  useMediaQuery,
  IconButton,
  ButtonBase,
  Drawer,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { color, width } from "@mui/system";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDrawer, setOpenDrawer] = useState(false);

  function handleClick() {
    setOpenDrawer(!openDrawer);
  }

  return (
    <Container>
      <Box
        alignItems="center"
        display="flex"
        sx={{ marginTop: isMobile ? "30px" : "20px" }}
      >
        <Typography sx={{ fontWeight: "600", color: "#66FCF1" }} variant="h4">
          CLIFFORD
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: isMobile ? "column" : "row",
            marginLeft: "auto",
            gap: "40px",
          }}
        >
          <IconButton
            sx={{ display: isMobile ? "flex" : "none", color: "#66FCF1" }}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <Drawer sx={{opacity:"0.7"}} anchor="right" open={openDrawer} onClose={handleClick}>
            <Container style={{width:"150px"}}>
              <ButtonBase>
                <Typography>Home</Typography>
              </ButtonBase>
              <ButtonBase>
                <Typography>About</Typography>
              </ButtonBase>
              <ButtonBase>
                <Typography>Portfolio</Typography>
              </ButtonBase> 
            </Container>
          </Drawer>

          <ButtonBase sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography
              sx={{
                cursor: "pointer",

                color: "#66FCF1",
              }}
            >
              Home
            </Typography>
          </ButtonBase>
          <ButtonBase sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography
              sx={{
                cursor: "pointer",
                color: "#66FCF1",
              }}
            >
              About
            </Typography>
          </ButtonBase>
          <ButtonBase sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography
              sx={{
                cursor: "pointer",

                color: "#66FCF1",
              }}
            >
              Portfolio
            </Typography>
          </ButtonBase>
        </Box>
      </Box>
      <hr style={{ borderColor: "#66FCF1" }} />
    </Container>
  );
};

export default Navbar;
