import { Box, Typography } from "@mui/material";
import process2 from "../Images/process2.webp";
const Process_Card_2 = () => {
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
            alt="process2"
            src={process2}
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
            Choose order
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
            Check over hundreds of menus to pick your favorite food.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Process_Card_2;
