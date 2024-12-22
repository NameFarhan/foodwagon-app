import { Box } from "@mui/material";

export const FooterWrapper = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          padding: {
            mobile: "100px 0 0 0",
            tablet: "100px 50px 0 50px",
            laptop: "120px 70px 0px 70px",
            desktop: "140px 160px 0px 160px",
          },
          display: "flex",
          flexDirection: "column",
          bgcolor: "#212121",
        }}
      >
        {children}
      </Box>
    </>
  );
};
