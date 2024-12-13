import { Box, Typography } from "@mui/material";
import process1 from "../Images/process1.webp";
const Process_Card_1 = () => {
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
            alt="process1"
            src={process1}
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
              mb:'1rem'
            }}
          >
            Select location
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
            Choose the location where your food will be delivered.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Process_Card_1;
