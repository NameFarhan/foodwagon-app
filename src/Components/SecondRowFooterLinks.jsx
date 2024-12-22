import { Box, Typography, Link, TextField, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const SecondRowFooterLinks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: {
          mobile: "center",
          tablet: "center",
          laptop: "flex-start",
        },
        textAlign: {
          mobile: "center",
          tablet: "center",
        },
      }}
    >
      <Typography
        sx={{
          color: "#F5F5F5",
          fontWeight: "800",
          fontSize: {
            mobile: "16px",
            tablet: "18px",
          },
        }}
      >
        Follow Us
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Link
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#F5F5F5",
            "&:hover": {
              color: "#BBBBBB",
            },
          }}
        >
          <InstagramIcon sx={{ width: 24, height: 24 }} />
        </Link>
        <Link
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#F5F5F5",
            "&:hover": {
              color: "#BBBBBB",
            },
          }}
        >
          <FacebookIcon sx={{ width: 24, height: 24 }} />
        </Link>
        <Link
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#F5F5F5",
            "&:hover": {
              color: "#BBBBBB",
            },
          }}
        >
          <TwitterIcon sx={{ width: 24, height: 24 }} />
        </Link>
      </Box>

      <Typography
        sx={{
          color: "#BBBBBB",
          fontWeight: "800",
          fontSize: "16px",
        }}
      >
        Receive exclusive offers in your mailbox
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "100%",
        }}
      >
        <TextField
          placeholder="Enter your email"
          variant="outlined"
          fullWidth
          sx={{
            backgroundColor: "#424242",
            color: "#ADADAD",
            "& .MuiInputBase-input": {
              color: "#ADADAD",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            borderRadius: "10px",
            fontSize: "14px",
            padding: "0",
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFB800",
            color: "#FFF",
            fontWeight: "800",
            boxShadow: "0px 4px 6px rgba(255, 138, 0, 0.4)",
            "&:hover": {
              backgroundColor: "#FF8A00",
            },
            padding:'15px 20px'
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default SecondRowFooterLinks;
