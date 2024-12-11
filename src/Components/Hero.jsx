import { useTheme } from "@emotion/react";
import { useState } from "react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { HeroWrapper } from "./HeroWrapper";
import hero from "../Images/herorightimage.webp";

const Hero = () => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState("Delivery");

  return (
    <>
      <HeroWrapper>
        <Grid2
          container
          spacing={{
            mobile: 12,
            tablet: 10,
            laptop: 10,
            desktop: 10,
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
                textAlign: {
                  mobile: "center",
                  laptop: "unset",
                },
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "800",
                    fontSize: {
                      mobile: "44px",
                      tablet: "54px",
                      laptop: "64px",
                      desktop: "84px",
                    },
                  }}
                >
                  Are you starving ?
                </Typography>
                <Typography
                  sx={{
                    color: "#504F4F",
                    fontWeight: "500",
                    fontSize: {
                      mobile: "20px",
                      tablet: "22px",
                    },
                  }}
                >
                  Within a few clicks, find meals that are accessible near you
                </Typography>
                <Box
                  sx={{
                    borderRadius: "16px",
                    bgcolor: "#fff",
                    padding: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    <Button
                      startIcon={<DeliveryDiningIcon />}
                      onClick={() => setSelectedOption("Delivery")}
                      sx={{
                        fontWeight: "800",
                        color: "grey",
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#F17228",
                          backgroundColor: "rgba(241, 114, 40, 0.2)",
                        },
                        "&.Mui-active": {
                          color: "#F17228",
                          backgroundColor: "rgba(241, 114, 40, 0.2)",
                        },
                      }}
                    >
                      Delivery
                    </Button>
                    <Button
                      startIcon={<ShoppingCartIcon />}
                      onClick={() => setSelectedOption("Pickup")}
                      sx={{
                        fontWeight: "800",
                        color: "grey",
                        textTransform: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#F17228",
                          backgroundColor: "rgba(241, 114, 40, 0.2)",
                        },
                        "&.Mui-active": {
                          color: "#F17228",
                          backgroundColor: "rgba(241, 114, 40, 0.2)",
                        },
                      }}
                    >
                      Pickup
                    </Button>
                  </Box>
                  <Typography
                    sx={{
                      color: "#504F4F",
                      fontWeight: "500",
                      fontSize: "18px",
                    }}
                  >
                    {selectedOption === "Delivery"
                      ? "Delivery content: We will bring your food to your doorstep in no time!"
                      : "Pickup content: You can pick up your favorite meals from our nearest outlet."}
                  </Typography>
                </Box>
              </Box>
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
                display: "flex",
                justifyContent: {
                  mobile: "center",
                  laptop: "flex-end",
                },
              }}
            >
              <Box
                component="img"
                sx={{
                  height: "100%",
                  width: "60%",
                }}
                alt="hero image"
                src={hero}
              />
            </Box>
          </Grid2>
        </Grid2>
      </HeroWrapper>
    </>
  );
};

export default Hero;
