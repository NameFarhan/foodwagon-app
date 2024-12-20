import { Box } from "@mui/material";
import React from "react";
import { IntallWrapper } from "./InstallWrapper";
import InstallBox from "./InstallBox";
import InstallGetIt from "./InstallGetIt";

const Install = () => {
  return (
    <>
      <IntallWrapper>
        <InstallBox />
        <InstallGetIt />
      </IntallWrapper>
    </>
  );
};

export default Install;
