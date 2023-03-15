import React from "react";
import {
  Container,
  Box,
  Typography,
  useMediaQuery,
  IconButton,
  ButtonBase,
  SwipeableDrawer,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDrawer, setOpenDrawer] = useState(false);

  function handleClick() {
    setOpenDrawer(!openDrawer);
  }

  return (
    <Container maxWidth="xl">
      <Box
        alignItems="center"
        display="flex"
        sx={{ marginTop: isMobile ? "30px" : "50px" }}
      >
        <Typography sx={{ fontWeight: "600", color: "#323232" }} variant="h4">
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
            sx={{ display: isMobile ? "flex" : "none", color: "#323232" }}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <SwipeableDrawer
            PaperProps={{
              sx: {
                backgroundColor: "#DDD0C8",
                opacity: "0.9",
                height: "200px",
                borderRadius: "10px",
                position: "absolute",
                right: "20px",
                top: "45px",
              },
            }}
            anchor="right"
            open={openDrawer}
            onClose={handleClick}
            onOpen={handleClick}
          >
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
              }}
              style={{ width: "120px" }}
            >
              <ButtonBase sx={{ padding: "10px" }}>
                <Typography sx={{ fontSize: "20px", color: "#0B0C10" }}>
                  Home
                </Typography>
              </ButtonBase>
              <ButtonBase sx={{ padding: "10px" }}>
                <Typography sx={{ fontSize: "20px", color: "#0B0C10" }}>
                  About
                </Typography>
              </ButtonBase>
              <ButtonBase sx={{ padding: "10px" }}>
                <Typography sx={{ fontSize: "20px", color: "#0B0C10" }}>
                  Portfolio
                </Typography>
              </ButtonBase>
            </Container>
          </SwipeableDrawer>
          <ButtonBase sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography
              sx={{
                cursor: "pointer",

                color: "#323232",
              }}
            >
              Home
            </Typography>
          </ButtonBase>
          <ButtonBase sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography
              sx={{
                cursor: "pointer",
                color: "#323232",
              }}
            >
              About
            </Typography>
          </ButtonBase>
          <ButtonBase sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography
              sx={{
                cursor: "pointer",

                color: "#323232",
              }}
            >
              Portfolio
            </Typography>
          </ButtonBase>
        </Box>
      </Box>
      <hr style={{ borderColor: "#323232" }} />
    </Container>
  );
};

export default Navbar;
