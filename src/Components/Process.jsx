import { useTheme } from "@emotion/react";
import React from "react";
import { ProcessWrapper } from "./ProcessWrapper";
import { Box, Grid2, Typography } from "@mui/material";
import Process_Card_1 from "./Process_Card_1";
import Process_Card_2 from "./Process_Card_2";
import Process_Card_3 from "./Process_Card_3";
import Process_Card_4 from "./Process_Card_4";

const Process = () => {
  const theme = useTheme();
  return (
    <>
      <ProcessWrapper>
        <Typography
          sx={{
            color: "#F17228",
            fontWeight: "800",
            textAlign: "center",
            fontSize: {
              mobile: "23px",
              laptop: "43px",
            },
            mb: "2rem",
          }}
        >
          How does it work
        </Typography>
        <Grid2
          container
          spacing={{
            mobile: 6,
            laptop: 10,
          }}
        >
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 3,
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
              <Process_Card_1 />
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Process_Card_2 />
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Process_Card_3 />
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
              tablet: 6,
              laptop: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Process_Card_4 />
            </Box>
          </Grid2>
        </Grid2>
      </ProcessWrapper>
    </>
  );
};

export default Process;
