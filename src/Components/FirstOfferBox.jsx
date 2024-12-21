import { useTheme } from "@emotion/react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import offer1 from "../Images/offer1.webp";
const FirstOfferBox = () => {
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
              padding: "56px 56px",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
                Best deals Crispy Sandwiches
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
                Enjoy the large size of sandwiches. Complete perfect slice of
                sandwiches.
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
            }}
          >
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
              }}
              alt="offer image 1"
              src={offer1}
            />
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default FirstOfferBox;
