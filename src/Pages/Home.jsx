import React from "react";
import Navbar from "../Layout/Navbar";
import { Box } from "@mui/material";
import herobg from "../Images/herobg.webp";
import Hero from "../Components/Hero";
import Deals from "../Components/Deals";
import Process from "../Components/Process";
import PopularItems from "../Components/PopularItems";
import FeaturedRestaurants from "../Components/FeaturedRestaurants";
import SearchByFood from "../Components/SearchByFood";
import Install from "../Components/Install";
import Offers from "../Components/Offers";
import Proceed from "../Components/Procees";
import Footer from "../Components/Footer";

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
      <Deals />
      <Box
        sx={{
          background:
            "linear-gradient(to bottom, rgba(255, 206, 103, 0.2), #fff)",
          height: "100%", // Adjust height as needed
          width: "100%", // Adjust width as needed
        }}
      >
        <Process />
      </Box>
      <PopularItems />
      <FeaturedRestaurants />
      <SearchByFood />
      <Install />
      <Offers />
      <Proceed />
      <Footer />
    </>
  );
};

export default Home;
