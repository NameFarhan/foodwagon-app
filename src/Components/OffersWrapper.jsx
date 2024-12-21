import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

export const OffersWrapper = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: {
          mobile: "30px 10px",
          tablet: "60px 50px",
          desktop: "60px 150px",
        },
        display: "flex",
        flexDirection:'column',
        gap:'100px'
      }}
    >
      {children}
    </Box>
  );
};
