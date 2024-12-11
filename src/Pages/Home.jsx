import React from "react";
import Navbar from "../Layout/Navbar";
import { Box } from "@mui/material";
import herobg from "../Images/herobg.webp";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${herobg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: {
            mobile: "50%",
          }, // Set the height as required
        }}
      >
        <Hero />
      </Box>
    </>
  );
};

export default Home;
