import { Box } from "@mui/material";
import { OffersWrapper } from "../Components/OffersWrapper";
import FirstOfferBox from "./FirstOfferBox";
import SecOfferBox from "./SecOfferBox";
import ThirdOfferBox from "./ThirdOfferBox";

const Offers = () => {
  return (
    <>
      <OffersWrapper>
        <Box
          sx={{
            borderRadius: "16px",
            bgcolor: "#fff",
            boxShadow: "1px 1px 25px -15px #000",
          }}
        >
          <FirstOfferBox />
        </Box>
        <Box
          sx={{
            borderRadius: "16px",
            bgcolor: "#fff",
            boxShadow: "1px 1px 25px -15px #000",
          }}
        >
          <SecOfferBox />
        </Box>
        <Box
          sx={{
            borderRadius: "16px",
            bgcolor: "#fff",
            boxShadow: "1px 1px 25px -15px #000",
          }}
        >
          <ThirdOfferBox />
        </Box>
      </OffersWrapper>
    </>
  );
};

export default Offers;
