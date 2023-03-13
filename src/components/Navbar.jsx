import React from "react";
import {
  Container,
  Box,
  Typography,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [humbergerIcon, setHumbergerIcon] = useState(null);

  const handleMenuOpen = (event) => {
    setHumbergerIcon(event.currentTarget);
  };

  const handleMenuClose = () => {
    setHumbergerIcon(null);
  };

  return (
    <Container>
      <Box
        alignItems="center"
        display="flex"
        sx={{ marginTop: isMobile ? "30px" : "20px" }}
      >
        <Typography sx={{ fontWeight: "600" }} variant="h4">
          My Portfolio
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Poppins, san-serif",
            flexDirection: isMobile ? "column" : "row",
            marginLeft: "auto",
            gap:"40px"
          }}
        >
          <IconButton
            sx={{ display: isMobile ? "flex" : "none" }}
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Menu
            anchorEl={humbergerIcon}
            open={Boolean(humbergerIcon)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
          >
            <MenuItem onClick={handleMenuClose} sx={{ fontWeight: "600" }}>
              Home
            </MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ fontWeight: "600" }}>
              About
            </MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ fontWeight: "600" }}>
              Portfolio
            </MenuItem>
          </Menu>
          <Typography
            sx={{ fontWeight: "600", display: { xs: "none", sm: "block" } }}
          >
            Home
          </Typography>
          <Typography
            sx={{ fontWeight: "600", display: { xs: "none", sm: "block" } }}
          >
            About
          </Typography>
          <Typography
            sx={{ fontWeight: "600", display: { xs: "none", sm: "block" } }}
          >
            Portfolio
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
