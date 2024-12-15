import { useTheme } from "@emotion/react";
import { PopularWrapper } from "./PopularWrapper";
import { Typography } from "@mui/material";
import PopularSlider from "./PopularSlider";

const PopularItems = () => {
  const theme = useTheme();
  return (
    <>
      <PopularWrapper>
        <Typography
          sx={{
            color: "#212121",
            fontSize: {
              mobile: "23px",
              laptop: "43px",
            },
            fontWeight: "800",
            textAlign: "center",
            mb: "2rem",
          }}
        >
          Popular Items
        </Typography>
        <PopularSlider />
      </PopularWrapper>
    </>
  );
};

export default PopularItems;
