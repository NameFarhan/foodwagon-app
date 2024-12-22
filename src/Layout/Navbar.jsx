import React, { useState } from "react";
import {
  Grid2,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";
import { NavbarWrapper } from "../Components/NavbarWrapper";
import logo from "../Images/logo.webp";

const Navbar = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <NavbarWrapper>
      <Grid2
        container
        sx={{
          backgroundColor: "#fff",
        }}
      >
        {/* Left: Logo */}
        <Grid2
          item
          size={{
            mobile: 6,
            laptop: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
              height: "100%",
              paddingLeft: "10px",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "50px",
                width: {
                  mobile: "198px",
                  tablet: "210px",
                  laptop: "260px",
                  desktop: "300px",
                },
                display: "inline-block",
              }}
              alt="Logo"
              src={logo}
            />
          </Box>
        </Grid2>

        {/* Center and Right: Hidden on small screens */}
        <Grid2
          item
          size={{
            mobile: 0,
            desktop: 4,
          }}
          sx={{ display: { mobile: "none", desktop: "flex" } }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                fontWeight: "800",
                fontSize: "18px",
              }}
            >
              Deliver To:
            </Typography>
            <LocationOnIcon sx={{ color: "#FFB30E", mr: "15px", ml: "6px" }} />
            <Typography sx={{ color: "gray" }}>
              Current Location {""} Mohammadpur Bus Stand, Dhaka
            </Typography>
          </Box>
        </Grid2>

        <Grid2
          item
          size={{
            mobile: 0,
            desktop: 4,
          }}
          sx={{ display: { mobile: "none", desktop: "flex" } }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
                backgroundColor: "#fff",
                mr: 2,
              }}
            >
              <SearchIcon sx={{ color: "#FFB30E", marginRight: "5px" }} />
              <Typography
                sx={{
                  color: "black",
                  fontSize: "18px",
                  fontWeight: "800",
                }}
              >
                Search Food
              </Typography>
            </Box>

            <Button
              variant="contained"
              startIcon={<LoginIcon />}
              sx={{
                backgroundColor: "#fff",
                color: "#FF8A00",
                textTransform: "none",
                boxShadow: "1px 2px 20px -4px #FFB800",
                fontWeight: "800",
              }}
            >
              Login
            </Button>
          </Box>
        </Grid2>

        {/* Hamburger Menu: Visible on small screens */}
        <Grid2
          item
          size={{
            mobile: 6,
            desktop: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              sx={{
                position: {
                  laptop: "relative",
                  desktop: "unset",
                },
                left: {
                  laptop: "135px",
                  desktop: "unset",
                },
              }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ color: "#FFB30E", fontSize: "30px" }} />
            </IconButton>
          </Box>
        </Grid2>
      </Grid2>

      {/* Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            Deliver To:
          </Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <LocationOnIcon sx={{ color: "#FFB30E", mr: "10px" }} />
            <Typography>
              Current Location: Mohammadpur Bus Stand, Dhaka
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "5px 10px",
              backgroundColor: "#fff",
              borderRadius: "5px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
              mb: 2,
            }}
          >
            <SearchIcon sx={{ color: "#FFB30E", marginRight: "5px" }} />
            <Typography
              sx={{
                color: "black",
                fontSize: "18px",
                fontWeight: "800",
              }}
            >
              Search Food
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<LoginIcon />}
            sx={{
              backgroundColor: "#fff",
              color: "#FF8A00",
              textTransform: "none",
              boxShadow: "1px 2px 20px -8px #FFB800",
              fontWeight: "800",
              width: "100%",
            }}
          >
            Logout
          </Button>
        </Box>
      </Drawer>
    </NavbarWrapper>
  );
};

export default Navbar;

