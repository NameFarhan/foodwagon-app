import { Box, Typography } from "@mui/material";
import process4 from "../Images/process4.webp";
const Process_Card_4 = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box>
          <Box
            component="img"
            sx={{
              height: "150px",
              width: "max-content",
              objectFit: "cover",
            }}
            alt="process4"
            src={process4}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#434343",
              fontSize: {
                mobile: "19px",
                laptop: "22px",
              },
              fontWeight: "800",
              mb: "1rem",
            }}
          >
            Enjoy meals
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#9E9E9E",
              fontSize: {
                mobile: "15px",
                laptop: "18px",
              },
              fontWeight: "400",
            }}
          >
            Food is made and delivered directly to your home.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Process_Card_4;
