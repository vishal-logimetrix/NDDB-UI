import { useState } from "react";
import { Carousel } from "react-bootstrap";
import cowIcon from "../assets/images/cow-icon.png";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpeg";

const slides = [
  {
    image: img1,
    // image: 'https://i.guim.co.uk/img/media/8c46b30fcacbdc47e8b469f7f360439e078ddce0/470_190_3530_2118/master/3530.jpg?width=1200&quality=85&auto=format&fit=max&s=923ff390440e738a9e3a78cb7ebbf425',
    heading: "Empowering Dairy Farmers",
    subtext: "Building sustainable dairy communities across India",
    sinceYear: "1965",
  },
  {
    image: img2,
    // image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbZAocFVBKfgZ1Kf6TYoZhgcVLsAJVXY-Jg&s',
    heading: "Innovative Dairy Solutions",
    subtext: "Delivering technology to every village doorstep",
    sinceYear: "1982",
  },
  {
    image: img3,
    // image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTBS08GWRsgdsi6t5XyevnF76irULW93Lcw&s',
    heading: "Stronger Rural Economies",
    subtext: "Empowering women and farmers together",
    sinceYear: "1999",
  },
  {
    image: img4,
    heading: "Stronger Rural Economies",
    subtext: "Empowering women and farmers together",
    sinceYear: "1999",
  },
  {
    image: img5,
    heading: "Stronger Rural Economies",
    subtext: "Empowering women and farmers together",
    sinceYear: "1999",
  },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Carousel
          fade
          controls={false}
          indicators={false}
          interval={3000}
          activeIndex={activeIndex}
          onSelect={handleSelect}
        >
          {slides.map((slide, idx) => (
            <Carousel.Item
              key={idx}
              // style={{
              //   height: '600px'
              // }}
            >
              <div className="carousel-slide">
                <img
                  className="d-block w-100 carousel-image"
                  src={slide.image}
                  alt={`slide-${idx}`}
                />

                {/* Overlay layer to darken the image */}
                <div className="carousel-image-overlay"></div>

                <div className="carousel-overlay">
                  <h1>{slide.heading}</h1>
                  <p>{slide.subtext}</p>
                </div>

                <div className="since-section">
                  <div className="cow-icon-wrapper">
                    <img src={cowIcon} alt="Cow Icon" />
                  </div>
                  <div className="since-box">
                    <span>SINCE {slide.sinceYear}</span>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Custom Indicators */}
      <div className="custom-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`indicator-dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
