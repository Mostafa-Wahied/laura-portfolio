import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Box, CardMedia } from "@mui/material";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ImageGallery = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // New state for active index

  return (
    <>
      <Box
        sx={{
          maxWidth: 1200,
          maxHeight: activeIndex === 1 ? 800 : 550, // Adjust this value as needed
          mx: "auto",
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
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mainSwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update active index on slide change
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <CardMedia
                component="img"
                image={image.src}
                alt={`Image ${index}`}
                sx={{
                  width: "80%", // Adjust this value as needed
                  // height: "auto", // This will maintain the aspect ratio of the image
                  objectFit: "contain",
                  margin: "auto",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box // Thumbnail swiper
        sx={{ width: { xs: "100%", sm: "80%", md: "30%" }, mx: "auto", mt: 2 }}
      >
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="thumbsSwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <CardMedia
                component="img"
                image={image.src}
                alt={`Thumbnail ${index}`}
                sx={{
                  opacity: activeIndex === index ? 1 : 0.5, // Highlight the active thumbnail
                  transition: "opacity 0.3s",
                  "&:hover": { opacity: 1 },
                  cursor: "pointer",
                  // height: 150,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default ImageGallery;
