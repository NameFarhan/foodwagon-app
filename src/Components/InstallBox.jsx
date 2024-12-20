import { useTheme } from "@emotion/react";
import { Box, Grid2, Typography } from "@mui/material";
import install1 from "../Images/install1.webp";
import install2 from "../Images/install2.webp";
import install3 from "../Images/install3.webp";

const InstallBox = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: "40px",
          padding: "55px 55px",
        }}
      >
        <Grid2
          container
          spacing={{
            mobile: 6,
            tablet: 10,
            laptop: 10,
            desktop: 7,
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
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 120,
                    width: 120,
                  }}
                  alt="install images"
                  src={install1}
                />
                <Typography
                  sx={{
                    color: "#FB3C00",
                    fontWeight: "800",
                    fontSize: {
                      mobile: "21px",
                      desktop: "35px",
                    },
                  }}
                >
                  Daily Discounts
                </Typography>
              </Box>
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
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 120,
                    width: 120,
                  }}
                  alt="install images"
                  src={install2}
                />
                <Typography
                  sx={{
                    color: "#FB3C00",
                    fontWeight: "800",
                    fontSize: {
                      mobile: "21px",
                      desktop: "35px",
                    },
                  }}
                >
                  Live Tracing
                </Typography>
              </Box>
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
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 120,
                    width: 120,
                  }}
                  alt="install images"
                  src={install3}
                />
                <Typography
                  sx={{
                    color: "#FB3C00",
                    fontWeight: "800",
                    fontSize: {
                      mobile: "21px",
                      desktop: "35px",
                    },
                  }}
                >
                  Quick Delivery
                </Typography>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default InstallBox;
