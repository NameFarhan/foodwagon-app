import { Box, Typography } from "@mui/material";
import process3 from "../Images/process3.webp";
const Process_Card_3 = () => {
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
            alt="process3"
            src={process3}
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
            Pay advanced
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
            It's quick, safe, and simple. Select several methods of payment.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Process_Card_3;
