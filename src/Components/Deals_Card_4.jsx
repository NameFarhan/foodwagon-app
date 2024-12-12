import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import card4 from "../Images/card4.webp";

const Deals_Card_4 = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: {
            mobile: "center",
            laptop: "flex-start",
          },
          alignItems: {
            mobile: "center",
            laptop: "flex-start",
          },
          textAlign: {
            mobile: "center",
            laptop: "start",
          },
          gap: "30px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",
              display: "block",
              objectFit: "cover",
              borderRadius: "15px",
            }}
            alt="card1"
            src={card4}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "0px",
              left: "0px",
              backgroundColor: "#FFB30E",
              color: "#fff",
              padding: "5px 15px",
              borderRadius: "0 32px 0 0",
              fontWeight: "1000",
              fontSize: {
                mobile: "34px",
                tablet: "34px",
                laptop: "44px",
                desktop: "54px",
              },
            }}
          >
            20% Off
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#424242",
              fontWeight: "800",
              fontSize: {
                mobile: "19px",
                laptop: "22px",
              },
            }}
          >
            Greys Vage
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center", // Fixed typo from "alignItem" to "alignItems"
              backgroundColor: "rgba(241, 114, 40, 0.2)", // Low opacity background
              color: "rgba(241, 114, 40, 1)", // High opacity text color
              fontWeight: "800",
              borderRadius: "8px",
              padding: "5px 10px", // Added padding for better appearance
              width: "max-content",
            }}
          >
            8 Days Remaining
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Deals_Card_4;
