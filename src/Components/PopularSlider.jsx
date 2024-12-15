import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Typography } from "@mui/material";
import popular1 from "../Images/popular1.webp";
import popular2 from "../Images/popular2.webp";
import popular3 from "../Images/popular3.webp";
import popular4 from "../Images/popular4.webp";
import popular5 from "../Images/popular5.webp";

const PopularSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderData = [
    {
      id: 1,
      image: popular1,
      title: "Cheese Burger",
      location: "Burger Arena",
      price: "$3.88",
    },
    {
      id: 2,
      image: popular2,
      title: "Toffe’s Cake",
      location: "Top Sticks",
      price: "$4.00",
    },
    {
      id: 3,
      image: popular3,
      title: "Dancake",
      location: "Cake World",
      price: "$1.99",
    },
    {
      id: 4,
      image: popular4,
      title: "Crispy Sandwitch",
      location: "Fastfood Dine",
      price: "$3.00",
    },
    {
      id: 5,
      image: popular5,
      title: "Thai  Soup",
      location: "Foody man",
      price: "$2.79",
    },
  ];

  return (
    <Box className="popular-slider">
      <Slider {...settings}>
        {sliderData.map((item) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: {
                mobile: "center",
                tablet: "unset",
              },
              textAlign: {
                mobile: "center",
                tablet: "unset",
              },
            }}
            key={item.id}
            className="slider-card"
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                borderRadius: "16px",
              }}
              alt="items images"
              src={item.image}
            />
            <Typography
              sx={{
                margin: "10px 0 5px 0",
                color: "#424242",
                fontWeight: "800",
                fontSize: {
                  mobile: "17px",
                  laptop: "22px",
                },
              }}
            >
              {item.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: {
                  mobile: "center",
                  tablet: "unset",
                },
                justifyContent: {
                  mobile: "center",
                  tablet: "unset",
                },
              }}
            >
              <Box sx={{ marginRight: "5px" }}>📍</Box>
              <Typography
                sx={{
                  margin: "5px 0",
                  color: "#FFB30E",
                  fontWeight: "400",
                  fontSize: {
                    mobile: "17px",
                    laptop: "22px",
                  },
                }}
              >
                {item.location}
              </Typography>
            </Box>
            <Typography
              sx={{
                margin: "5px 0",
                color: "#212121",
                fontWeight: "800",
                fontSize: {
                  mobile: "19px",
                  laptop: "22px",
                },
              }}
            >
              {item.price}
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#F17228",
                color: "#fff",
                borderRadius: "10px",
                width: "100%",
                fontWeight: "800",
                fontSize: {
                  mobile: "15px",
                  laptop: "18px",
                },
                textTransform: "none",
                boxShadow: "0px 4px 6px #F17228",
                marginTop: "10px",
              }}
            >
              Order Now
            </Button>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      sx={{
        ...style,
        display: "block",
        marginRight: "10px",
        zIndex: 1,
        backgroundColor: "#FFB20E",
        color: "#fff",
        width: "60px",
        height: "60px",
        borderRadius: "100%",
        boxShadow: "0px 4px 6px #FAAA01",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#FFB20E")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#FFB20E")}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      sx={{
        ...style,
        display: "block",
        marginLeft: "10px",
        zIndex: 1,
        backgroundColor: "#FFB20E",
        color: "#fff",
        width: "60px",
        height: "60px",
        borderRadius: "100%",
        boxShadow: "0px 4px 6px #FAAA01",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#FFB20E")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#FFB20E")}
    />
  );
};

export default PopularSlider;
