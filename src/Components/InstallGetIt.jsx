import { Box, Grid2, Typography } from "@mui/material";
import iphone1 from "../Images/iphone1.webp";
import iphone2 from "../Images/iphone2.webp";
import playstore from "../Images/play.webp";
import appstore from "../Images/appstore.webp";
const InstallGetIt = () => {
  return (
    <>
      <Box
        sx={{
          mt: {
            mobile: "8rem",
            tablet: "10rem",
          },
        }}
      >
        <Grid2
          container
          spacing={{
            mobile: 0,
            tablet: 14,
            laptop: 10,
            desktop: 14,
          }}
        >
          <Grid2
            item
            size={{
              mobile: 12,
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
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component="img"
                  sx={{
                    height: "100%",
                    width: {
                      mobile: "200px",
                      tablet: "300px",
                    },
                  }}
                  alt="iphone image"
                  src={iphone1}
                />
                <Box
                  component="img"
                  sx={{
                    height: "100%",
                    width: {
                      mobile: "213px",
                      tablet: "313px",
                    },
                  }}
                  alt="iphone image"
                  src={iphone2}
                />
              </Box>
            </Box>
          </Grid2>
          <Grid2
            item
            size={{
              mobile: 12,
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
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "40px",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFB800",
                    fontWeight: "800",
                    fontSize: {
                      mobile: "33px",
                      tablet: "43px",
                      laptop: "53px",
                      desktop: "63px",
                    },
                  }}
                >
                  Install the app
                </Typography>
                <Typography
                  sx={{
                    color: "#827E7E",
                    fontWeight: "400",
                    fontSize: {
                      mobile: "15px",
                      laptop: "18px",
                    },
                  }}
                >
                  It's never been easier to order food. Look for the finest
                  discounts and you'll be lost in a world of delectable food.
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    component="img"
                    sx={{
                      height: "60px",
                      width: "200px",
                      objectFit: "cover",
                    }}
                    alt="playstore"
                    src={playstore}
                  />
                  <Box
                    component="img"
                    sx={{
                      height: "60px",
                      width: "200px",
                      objectFit: "cover",
                    }}
                    alt="playstore"
                    src={appstore}
                  />
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default InstallGetIt;
