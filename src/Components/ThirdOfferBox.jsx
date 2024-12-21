import { useTheme } from "@emotion/react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import offer3 from "../Images/offer3.webp";
const ThirdOfferBox = () => {
  const theme = useTheme();
  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2
          item
          size={{
            mobile: 12,
            laptop: 5,
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
              padding: {
                mobile: "36px 36px",
                laptop: "56px 56px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "40px",
              }}
            >
              <Typography
                sx={{
                  color: "#FFB30E",
                  fontWeight: "800",
                  fontSize: {
                    mobile: "24px",
                    tablet: "34px",
                    desktop: "44px",
                  },
                }}
              >
                Wanna eat hot & spicy Pizza?
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontWeight: "700",
                  fontSize: {
                    mobile: "15px",
                    laptop: "18px",
                  },
                }}
              >
                Pair up with a friend and enjoy the hot and crispy pizza pops.
                Try it with the best deals.
              </Typography>
              <Button
                sx={{
                  color: "#fff",
                  fontWeight: "800",
                  width: "100%",
                  display: "block",
                  bgcolor: "#FF8A00",
                  boxShadow: "1px 1px 20px -5px #FFB800",
                }}
                variant="contained"
              >
                Proceed to order
              </Button>
            </Box>
          </Box>
        </Grid2>
        <Grid2
          item
          size={{
            mobile: 12,
            laptop: 7,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                mobile: "center",
                laptop: "flex-end",
              },
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
              }}
              alt="offer image 3"
              src={offer3}
            />
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default ThirdOfferBox;
