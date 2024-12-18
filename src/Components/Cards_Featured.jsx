import { Box, Grid2 } from "@mui/material";
import React from "react";
import Card_Featured_1 from "./Card_Featured_1";
import Card_Featured_2 from "./Card_Featured_2";
import Card_Featured_3 from "./Card_Featured_3";
import Card_Featured_4 from "./Card_Featured_4";
import Card_Featured_5 from "./Card_Featured_5";
import Card_Featured_6 from "./Card_Featured_6";
import Card_Featured_7 from "./Card_Featured_7";
import Card_Featured_8 from "./Card_Featured_8";

const Cards_Featured = () => {
  return (
    <>
      <Grid2
        container
        spacing={{
          mobile: 7,
          tablet: 4,
          laptop: 4,
        }}
      >
        <Grid2
          item
          size={{
            mobile: 12,
            tablet: 6,
            laptop: 4,
            desktop: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                mobile: "center",
                tablet: "flex-start",
              },
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Card_Featured_1 />
          </Box>
        </Grid2>
        <Grid2
          item
          size={{
            mobile: 12,
            tablet: 6,
            laptop: 4,
            desktop: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                mobile: "center",
                tablet: "flex-end",
                laptop: "center",
              },
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Card_Featured_2 />
          </Box>
        </Grid2>
        <Grid2
          item
          size={{
            mobile: 12,
            tablet: 6,
            laptop: 4,
            desktop: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                mobile: "center",
                tablet: "flex-start",
                laptop: "flex-end",
                desktop: "center",
              },
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Card_Featured_3 />
          </Box>
        </Grid2>
        <Grid2
          item
          size={{
            mobile: 12,
            tablet: 6,
            laptop: 4,
            desktop: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                mobile: "center",
                tablet: "flex-end",
                laptop: "flex-start",
                desktop: "flex-end",
              },
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Card_Featured_4 />
          </Box>
        </Grid2>
        <Grid2
          item
          size={{
            mobile: 12,
            tablet: 6,
            laptop: 4,
            desktop: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                mobile: "center",
                tablet: "flex-start",
                laptop: "center",
                desktop: "flex-start",
              },
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Card_Featured_5 />
          </Box>
        </Grid2>
        <Grid2
          item
          size={{
            mobile: 12,
            tablet: 6,
            laptop: 4,
            desktop: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                mobile: "center",
                tablet: "flex-end",
                desktop: "center",
              },
              alignItems: "center",

              width: "100%",
              height: "100%",
            }}
          >
            <Card_Featured_6 />
          </Box>
        </Grid2>
        <Grid2
          item
          size={{
            mobile: 12,
            tablet: 6,
            laptop: 4,
            desktop: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                mobile: "center",
                tablet: "flex-start",
                desktop: "center",
              },
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Card_Featured_7 />
          </Box>
        </Grid2>
        <Grid2
          item
          size={{
            mobile: 12,
            tablet: 6,
            laptop: 4,
            desktop: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                mobile: "center",
                tablet: "flex-end",
                laptop: "center",
                desktop: "flex-end",
              },
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Card_Featured_8 />
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Cards_Featured;
