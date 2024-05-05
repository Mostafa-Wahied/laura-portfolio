// src/components/Carousel.js

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { pathwaysCarouselItems } from "../../constants/carouselData";
import { Box } from "@mui/material";

const PathwaysCarousel = () => {
  return (
    <Box
      sx={{
        ".swiper-button-next, .swiper-button-prev": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 60,
          height: 60,
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          borderRadius: "50%",
          color: "black",
          transition: "background-color 0.3s, color 0.3s",
          "&::after": {
            fontSize: "1.6rem",
            fontWeight: "bold",
          },
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
          },
        },
      }}
    >
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 80,
          },
        }} // responsive breakpoints
      >
        {pathwaysCarouselItems.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              sx={{
                maxWidth: 545,
                backgroundColor: "rgba(255, 255, 255, 0)", // Semi-transparent, adjust alpha as needed
                // backdropFilter: "blur(10px)", // Optional: Apply a blur effect to the background
                boxShadow: "none", // Optional: Remove shadow if desired
              }}
            >
              <CardMedia
                component="img"
                //   height="140"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {item.description1}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description2}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PathwaysCarousel;
