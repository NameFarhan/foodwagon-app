import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

export const NavbarWrapper = ({ children }) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        padding: {
          mobile: "30px 0px",
          tablet: "30px 50px",
          desktop: "30px 150px",
        },
      }}
    >
      {children}
    </Box>
  );
};
