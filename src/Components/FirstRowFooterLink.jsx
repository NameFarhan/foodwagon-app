import { Box, Grid2, Typography } from "@mui/material";

const FirstRowFooterLink = () => {
  return (
    <>
      <Grid2
        container
        justifyContent={{
          mobile: "center",
          laptop: "flex-start",
        }}
        spacing={{
          mobile: 5,
          tablet: 5,
          laptop: 5,
          desktop: 5,
        }}
      >
        <Grid2
          item
          size={{
            mobile: 12,
            laptop: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                mobile: "center",
                laptop: "flex-start",
              },
              alignItems: {
                mobile: "center",
                laptop: "unset",
              },
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: {
                  mobile: "18px",
                  tablet: "22px",
                },
                fontWeight: "800",
                mb: "2rem",
              }}
            >
              Company
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                sx={{
                  color: "#F5F5F5",
                  fontSize: {
                    mobile: "16px",
                    tablet: "18px",
                  },
                  fontWeight: "400",
                }}
              >
                About us
              </Typography>
              <Typography
                sx={{
                  color: "#F5F5F5",
                  fontSize: {
                    mobile: "16px",
                    tablet: "18px",
                  },
                  fontWeight: "400",
                }}
              >
                Team
              </Typography>
              <Typography
                sx={{
                  color: "#F5F5F5",
                  fontSize: {
                    mobile: "16px",
                    tablet: "18px",
                  },
                  fontWeight: "400",
                }}
              >
                Careers
              </Typography>
              <Typography
                sx={{
                  color: "#F5F5F5",
                  fontSize: {
                    mobile: "16px",
                    tablet: "18px",
                  },
                  fontWeight: "400",
                }}
              >
                Blog
              </Typography>
            </Box>
          </Box>
        </Grid2>
        <Grid2
          item
          size={{
            mobile: 12,
            laptop: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                mobile: "center",
                laptop: "flex-start",
              },
              alignItems: {
                mobile: "center",
                laptop: "unset",
              },
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: {
                  mobile: "18px",
                  tablet: "22px",
                },
                fontWeight: "800",
                mb: "2rem",
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography
                sx={{
                  color: "#F5F5F5",
                  fontSize: {
                    mobile: "16px",
                    tablet: "18px",
                  },
                  fontWeight: "400",
                }}
              >
                Help & Support
              </Typography>
              <Typography
                sx={{
                  color: "#F5F5F5",
                  fontSize: {
                    mobile: "16px",
                    tablet: "18px",
                  },
                  fontWeight: "400",
                }}
              >
                Partner with us
              </Typography>
              <Typography
                sx={{
                  color: "#F5F5F5",
                  fontSize: {
                    mobile: "16px",
                    tablet: "18px",
                  },
                  fontWeight: "400",
                }}
              >
                Ride with us
              </Typography>
            </Box>
          </Box>
        </Grid2>
        <Grid2
          item
          size={{
            mobile: 12,
            laptop: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                mobile: "center",
                laptop: "flex-start",
              },
              alignItems: {
                mobile: "center",
                laptop: "unset",
              },
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: {
                  mobile: "18px",
                  tablet: "22px",
                },
                fontWeight: "800",
                mb: "2rem",
              }}
            >
              Legal
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography
                sx={{
                  color: "#F5F5F5",
                  fontSize: {
                    mobile: "16px",
                    tablet: "18px",
                  },
                  fontWeight: "400",
                }}
              >
                Terms & Conditions
              </Typography>
              <Typography
                sx={{
                  color: "#F5F5F5",
                  fontSize: {
                    mobile: "16px",
                    tablet: "18px",
                  },
                  fontWeight: "400",
                }}
              >
                Refund & Cancellation
              </Typography>
              <Typography
                sx={{
                  color: "#F5F5F5",
                  fontSize: {
                    mobile: "16px",
                    tablet: "18px",
                  },
                  fontWeight: "400",
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                sx={{
                  color: "#F5F5F5",
                  fontSize: {
                    mobile: "16px",
                    tablet: "18px",
                  },
                  fontWeight: "400",
                }}
              >
                Cookie Policy
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default FirstRowFooterLink;
