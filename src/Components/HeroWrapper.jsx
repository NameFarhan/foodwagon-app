import { Box } from "@mui/material";

export const HeroWrapper = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          padding: {
            mobile: "60px 0px",
            tablet: "80px 50px",
            laptop: "130px 70px 130px 70px",
            desktop: "160px 160px 160px 160px",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
};
