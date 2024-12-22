import { Box, Grid2 } from "@mui/material";
import FirstRowFooterLink from "./FirstRowFooterLink";
import SecondRowFooterLinks from "./SecondRowFooterLinks";

const FooterLinks = () => {
  return (
    <>
      <Grid2
        container
        spacing={{
          mobile: 10,
          tablet: 10,
          laptop: 10,
          desktop: 0,
        }}
      >
        <Grid2
          item
          size={{
            mobile: 12,
            laptop: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                mobile: "center",
                laptop: "flex-start",
              },
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <FirstRowFooterLink />
          </Box>
        </Grid2>
        <Grid2
          item
          size={{
            mobile: 12,
            laptop: 6,
          }}
        >
          <Box
            sx={{
              display: "flex ",
              justifyContent: {
                mobile: "center",
                laptop: "flex-end",
              },
              alignItems: {
                mobile: "center",
                laptop: "flex-start",
              },
              width: "100%",
              height: "100%",
            }}
          >
            <SecondRowFooterLinks />
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default FooterLinks;
