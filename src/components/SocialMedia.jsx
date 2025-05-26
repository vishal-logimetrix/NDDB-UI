import React, { useState, useRef } from "react";
import bgImage from "../assets/images/social-bg.jpg";
// import bgImage from "../assets/images/1.jpg";

const icons = [
  { class: "ri-youtube-fill", url: "https://youtube.com", color: "#FF0000" },
  { class: "ri-linkedin-fill", url: "https://linkedin.com", color: "#0077B5" },
  { class: "ri-twitter-line", url: "https://twitter.com", color: "#1DA1F2" },
  { class: "ri-facebook-fill", url: "https://facebook.com", color: "#1877F2" },
  { class: "ri-instagram-line", url: "https://instagram.com", color: "#E1306C" },
];

const SocialMedia = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef(null);

  const radius = 190;
  const startAngle = 180;
  const stepAngle = 25;

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setIsOpen(false), 800);
  };

  const getPositionStyle = (index) => {
    const angleDeg = startAngle + index * stepAngle;
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = radius * Math.cos(angleRad);
    const y = radius * Math.sin(angleRad);
    return {
      transform: isOpen ? `translate(${x}px, ${y}px)` : "translate(0, 0)",
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? "auto" : "none",
    };
  };

  return (
    <div
      className="social-container mt-5 mb-5"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.25), rgba(0,0,0,0.15)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "90vh",
        width: "100%",
        height: "auto",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}
    >
      {/* Outer Light Green Circle */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: isOpen ? "300px" : "0px",
          height: isOpen ? "300px" : "0px",
          backgroundColor: "rgba(0, 78, 28, 0.5)",
          transition: "all 0.4s ease",
          borderRadius: "80% 0 0 0",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Inner Darker Green Circle */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: isOpen ? "240px" : "0px",
          height: isOpen ? "240px" : "0px",
          backgroundColor: "rgba(0, 78, 28, 0.54)",
          transition: "all 0.4s ease",
          borderRadius: "80% 0 0 0",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Glow overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: isOpen ? "300px" : "0px",
          height: isOpen ? "300px" : "0px",
          background: isOpen
            ? "radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.06), transparent 70%)"
            : "transparent",
          transition: "all 0.4s ease 0.1s",
          borderRadius: "100% 0 0 0",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Toggle + Icons */}
      <div
        className="social-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          width: "70px",
          height: "70px",
          margin: "30px",
          borderRadius: "50%",
        }}
      >
        {/* Icons */}
        {icons.map((icon, index) => (
          <a
            key={index}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{
              background: "transparent",
              color: "white",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "35px",
              transition: "all 0.4s ease",
              textDecoration: "none",
              zIndex: 5,
              ...getPositionStyle(index),
            }}
          >
            <i className={icon.class}></i>
          </a>
        ))}

        {/* Main Button */}
        <div
          className="share-toggle"
          style={{
            backgroundColor: "#004E1C",
            borderRadius: "50%",
            width: "70px",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: isOpen
              ? "#004E1C80"
              : "0 4px 15px rgba(0, 0, 0, 0.3)",
            color: "white",
            fontSize: "11px",
            flexDirection: "column",
            cursor: "pointer",
            zIndex: 10,
            transition: "all 0.4s ease",
            transform: isOpen ? "scale(1.05)" : "scale(1)",
          }}
        >
          <div
            style={{
              fontSize: "10px",
              lineHeight: "1.1",
              fontWeight: "bold",
              letterSpacing: "0.5px",
              textAlign: "center",
            }}
          >
            FOLLOW
            <br />
            US ON
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
