import { Box } from "@mui/material";
import { FooterWrapper } from "../Components/FooterWrapper";
import FooterCity from "./FooterCity";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterCity />
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#424242",
            margin: "70px 0",
          }}
        />  
        <FooterLinks />
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#424242",
            marginTop: "70px",
          }}
        />  
      </FooterWrapper>
    </>
  );
};

export default Footer;
