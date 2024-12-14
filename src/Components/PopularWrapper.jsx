import { Box } from "@mui/material";

export const PopularWrapper = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          padding: {
            mobile: "60px 0px",
            tablet: "80px 50px",
            laptop: "80px 70px 80px 70px",
            desktop: "100px 160px 100px 160px",
          },
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {children}
      </Box>
    </>
  );
};
