import { useTheme } from "@emotion/react";
import React from "react";
import { DealsWrapper } from "./DealsWrapper";
import { Box, Grid2 } from "@mui/material";
import Deals_Card_1 from "./Deals_Card_1";
import Deals_Card_2 from "./Deals_Card_2";
import Deals_Card_3 from "./Deals_Card_3";
import Deals_Card_4 from "./Deals_Card_4";

const Deals = () => {
  const theme = useTheme();
  return (
    <>
      <DealsWrapper>
        <Grid2
          container
          spacing={{
            mobile: 12,
            laptop: 6,
          }}
        >
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  mobile: "center",
                  tablet: "center",
                  laptop: "flex-start",
                },
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Deals_Card_1 />
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  mobile: "center",
                },
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Deals_Card_2 />
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  mobile: "center",
                },
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Deals_Card_3 />
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  mobile: "center",
                  laptop: "flex-start",
                },
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Deals_Card_4 />
            </Box>
          </Grid2>
        </Grid2>
      </DealsWrapper>
    </>
  );
};

export default Deals;
