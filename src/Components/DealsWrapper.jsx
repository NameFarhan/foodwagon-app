import { Box } from "@mui/material";

export const DealsWrapper = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          padding: {
            mobile: "60px 0px",
            tablet: "80px 50px",
            laptop: "100px 70px 100px 70px",
            desktop: "130px 160px 130px 160px",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
};
