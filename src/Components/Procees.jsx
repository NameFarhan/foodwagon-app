import { Box, Typography, Button } from "@mui/material";
import offerbg from "../Images/offerbg.webp";

const Proceed = () => {
  return (
      <Box
        sx={{
          backgroundImage: `url(${offerbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: "30px",
          color: "#fff",
          padding: " 80px 0",
        }}
      >
        <Typography
          sx={{
            fontWeight: "800",
            fontSize: {
              mobile: "37px",
              tablet: "47px",
              laptop: "57px",
            },
          }}
        >
          Are you ready to order with the best deals?
        </Typography>
        <Button
          sx={{
            backgroundColor: "#F15E28",
            color: "#fff",
            borderRadius: "10px",
            padding: "10px 20px",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#D45020",
            },
          }}
        >
          PROCEED TO ORDER
        </Button>
      </Box>
  );
};

export default Proceed;
