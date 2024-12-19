import { Box } from "@mui/material";

export const SearchByFoodWrapper = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          padding: {
            mobile: "60px 10px",
            tablet: "80px 50px",
            laptop: "80px 70px 80px 70px",
            desktop: "100px 160px 100px 160px",
          },
          bgcolor: "#FEFAF1",
        }}
      >
        {children}
      </Box>
    </>
  );
};
