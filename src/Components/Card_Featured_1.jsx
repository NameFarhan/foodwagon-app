import React from "react";
import { Box, Typography, Rating } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import f1 from "../Images/f1.webp";

const Card_Featured_1 = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: {
          mobile: "center",
          tablet: "unset",
        },
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={f1}
        alt="Company"
        sx={{
          width: "100%",
          display: "block",
          margin: "auto",
          borderRadius: "16px",
        }}
      />

      {/* Company Name */}
      <Typography
        variant="h6"
        sx={{
          marginTop: "16px",
          fontWeight: "800",
          color: "#424242",
          fontSize: {
            mobile: "18px",
            laptop: "22px",
          },
        }}
      >
        Food World
      </Typography>

      {/* Rating */}
      <Rating value={3.8} />

      {/* Highlighted Text */}
      <Typography
        variant="body2"
        sx={{
          borderRadius: "10px",
          color: "#F17228",
          backgroundColor: "rgba(241, 114, 40, 0.1)",
          fontWeight: 800,
          display: "block",
          padding: "10px 10px",
        }}
      >
        Opens tomorrow
      </Typography>

      {/* Discount and Time */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            position: "absolute",
            top: "16px",
            left: "16px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontWeight: "800",
            bgcolor: "#F17228",
            color: "#fff",
            padding: "6px 15px",
            borderRadius: "9px",
          }}
        >
          <LocalOfferIcon fontSize="small" />
          20% Off
        </Typography>

        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            top: "15px",
            left: "150px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontWeight: "800",
            bgcolor: "#FFB30E",
            color: "#fff",
            padding: "8px 15px",
            borderRadius: "9px",
          }}
        >
          <AccessTimeIcon fontSize="small" />
          Fast
        </Typography>
      </Box>
    </Box>
  );
};

export default Card_Featured_1;
