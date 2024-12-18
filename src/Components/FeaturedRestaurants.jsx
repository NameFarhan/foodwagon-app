import { useTheme } from "@emotion/react";
import React from "react";
import { FeaturedWrapper } from "./FeaturedWrapper";
import { Box, Typography } from "@mui/material";
import Cards_Featured from "./Cards_Featured";

const FeaturedRestaurants = () => {
  const theme = useTheme();
  return (
    <>
      <FeaturedWrapper>
        <Box sx={{ mb: "2rem" }}>
          <Typography
            sx={{
              fontWeight: "800",
              color: "#212121",
              fontSize: {
                mobile: "23px",
                tablet: "33px",
                laptop: "43px",
              },
              textAlign: "center",
            }}
          >
            Featured Restaurants
          </Typography>
        </Box>
        <Cards_Featured />
      </FeaturedWrapper>
    </>
  );
};

export default FeaturedRestaurants;
