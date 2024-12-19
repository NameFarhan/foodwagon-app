import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { SearchByFoodWrapper } from "./SearchByFoodWrapper";
import search1 from "../Images/1search.webp";
import search2 from "../Images/2search.webp";
import search3 from "../Images/3search.webp";
import search4 from "../Images/4search.webp";
import search5 from "../Images/5search.webp";
import search6 from "../Images/6search.webp";

const SearchByFood = () => {
  const cards = [
    { id: 1, title: "Pizza", image: search1 },
    { id: 2, title: "Burger", image: search2 },
    { id: 3, title: "Noodles", image: search3 },
    { id: 4, title: "Sub-sandiwch", image: search4 },
    { id: 5, title: "Chowmein", image: search5 },
    { id: 6, title: "Steak", image: search6 },
    { id: 7, title: "Pizza", image: search1 },
    { id: 8, title: "Burger", image: search2 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - itemsPerPage + cards.length) % cards.length
    );
  };

  const visibleItems = [
    ...cards.slice(currentIndex, currentIndex + itemsPerPage),
    ...cards.slice(0, Math.max(0, currentIndex + itemsPerPage - cards.length)),
  ].slice(0, itemsPerPage);

  return (
    <SearchByFoodWrapper>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={8}
      >
        <Typography
          sx={{
            color: "#212121",
            fontWeight: "800",
            fontSize: {
              mobile: "23px",
              laptop: "33px",
              desktop: "43px",
            },
          }}
          variant="h5"
        >
          Search by Food
        </Typography>
        <Box display="flex" alignItems="center">
          <Button
            onClick={handlePrevious}
            sx={{
              backgroundColor: "#FFB30E",
              borderRadius: "50%",
              color: "#fff",
              width: "66px",
              height: "66px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": { backgroundColor: "#e6a00d" },
            }}
          >
            &#8592;
          </Button>
          <Button
            onClick={handleNext}
            sx={{
              backgroundColor: "#FFB30E",
              borderRadius: "50%",
              color: "#fff",
              width: "66px",
              height: "66px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ml: 2,
              "&:hover": { backgroundColor: "#e6a00d" },
            }}
          >
            &#8594;
          </Button>
        </Box>
      </Box>

      {/* Centered Slider */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        gap={{
          mobile: "10px",
          tablet: "20px",
        }}
      >
        {visibleItems.map((card) => (
          <Grid item xs={12} sm={4} md={2} key={card.id}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 200,
                  width: 200,
                  borderRadius: "100%",
                }}
                alt="search images"
                src={card.image}
              />
              <Typography
                sx={{
                  color: "#424242",
                  fontWeight: "800",
                  fontSize: {
                    mobile: "19px",
                    laptop: "22px",
                  },
                }}
                variant="subtitle1"
                mt={1}
              >
                {card.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </SearchByFoodWrapper>
  );
};

export default SearchByFood;
