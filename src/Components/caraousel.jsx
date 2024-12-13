import { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleSlides = 3;

  const goToPreviousSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const getVisibleSlides = () => {
    return Array(visibleSlides)
      .fill()
      .map((_, i) => {
        const index = (currentIndex + i) % slides.length;
        return slides[index];
      });
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <h2>Get the latest in Privacy</h2>
        <Box>
          <IconButton
            onClick={goToPreviousSlide}
            sx={{
              backgroundColor: "white",
              "&:hover": { backgroundColor: "#8c8c8c" },
            }}
          >
            <svg
              width="19"
              height="15"
              viewBox="0 0 19 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.79306 0.0698242L0.58606 7.27682L7.79306 14.4838L9.20706 13.0698L4.41406 8.27682H19.0001V6.27682H4.41406L9.20706 1.48382L7.79306 0.0698242Z"
                fill="black"
              />
            </svg>

            {/* <ArrowBackIos /> */}
          </IconButton>
          <IconButton
            onClick={goToNextSlide}
            sx={{
              backgroundColor: "white",
              "&:hover": { backgroundColor: "#8c8c8c" },
            }}
          >
            <svg
              width="19"
              height="15"
              viewBox="0 0 19 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.207 14.4838L18.414 7.27682L11.207 0.0698242L9.793 1.48382L14.586 6.27682H0V8.27682H14.586L9.793 13.0698L11.207 14.4838Z"
                fill="black"
              />
            </svg>

            {/* <ArrowForwardIos /> */}
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {getVisibleSlides().map((slide, i) => (
          <Box
            key={i}
            style={{
              borderRadius: "10px",
              backgroundColor: "#FFFFFFFF",
              color: "black",
              padding: "10px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#DBDDDBFF",
              }}
            >
              <img src={slide.image} alt={slide.title} />
            </Box>
            <Box>
              <Box>
                <Button>{slide.title}</Button>
              </Box>
              <h4>{slide.description}</h4>
              <p>{slide.author}</p>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
