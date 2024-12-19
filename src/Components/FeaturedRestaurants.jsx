import { useTheme } from "@emotion/react";
import React from "react";
import { FeaturedWrapper } from "./FeaturedWrapper";
import { Box, Button, Typography } from "@mui/material";
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            mt: "4rem",
          }}
        >
          <Button
            sx={{
              borderRadius: "14px",
              bgcolor: "#FF9A0E",
              color: "#fff",
              fontWeight: "800",
              padding: "10px 40px",
              textTransform:'none',
              boxShadow:'1px 1px 10px 1px #FFBA26'
            }}
            variant="contained"
          >
            View All
          </Button>
        </Box>
      </FeaturedWrapper>
    </>
  );
};

export default FeaturedRestaurants;
