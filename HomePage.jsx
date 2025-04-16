import React, { useEffect, useState, useRef } from "react";
import "./HomePage.css";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const dishImages = [
  "/images/dish1.jpg",
  "/images/dish2.jpg",
  "/images/dish3.jpg",
  "/images/dish4.jpg",
];

const navLinks = [
  {
    title: "Home",
    items: ["Overview", "Ambience", "Chef's Note"],
  },
  {
    title: "History",
    items: [
      { name: "Our Story", path: "/history" },
      { name: "Timeline", path: "/history" },
      { name: "Legacy", path: "/history" },
    ],
  },
  {
    title: "Reservations",
    items: [
    { name: "Book a Table", path: "/reservation" },
    { name: "Private Events", path: "/reservation" },
    { name: "Special Offers", path: "/reservation" },
    ],
  },
  {
    title: "Contact us",
    items: ["Reach Out", "Our Location", "Careers"],
  },
  {
    title: "Policies",
    items: ["Health & Safety", "Refund Policy", "Terms & Conditions"],
  },
  {
    title: "Menu",
    items: [
      { name: "food menu", path: "/newmenu" },
      { name: "bar menu", path: "/D1" }, 
      ],
  },
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dishImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  const toggleDropdown = (title) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  const handleDropdownItemClick = (path) => {
    if (path) {
      navigate(path);
      setOpenDropdown(null);
    }
  };

  return (
    <div className="homepage-container">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="custom-background-video"
          src="/videos/restaurant-backgroundd.mp4"
          muted
          loop
          playsInline
        />
      </div>

      <div className="overlay"></div>
      <div className="custom-cursor"></div>

      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="Flavors Fusion Logo" />
          <span>Flavors Fusion</span>
        </div>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li
              key={link.title}
              className={`nav-item dropdown-parent ${
                openDropdown === link.title ? "open" : ""
              }`}
              onClick={() => toggleDropdown(link.title)}
            >
              {link.title}
              <FaChevronDown className="dropdown-icon" />
              {openDropdown === link.title && (
                <ul className="dropdown-menu">
                  {link.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="dropdown-item"
                      onClick={() =>
                        handleDropdownItemClick(
                          typeof item === "object" ? item.path : null
                        )
                      }
                      style={{
                        cursor: typeof item === "object" && item.path ? "pointer" : "default",
                      }}
                    >
                      {typeof item === "object" ? item.name : item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <Link to="/login" className="book-button glow">Login</Link>
      </nav>

      <section className="hero split-hero fancy-layout">
        <div className="hero-text fancy-text">
          <h1 className="animated-gradient-text pop-in text-center">
            Explore, Savour, Repeat
          </h1>
          <p className="tagline fade-in text-center">Cuisines From Around The Globe</p>
          <p className="subtag fade-in text-center">Global Bites, Local Delight</p>
          <div className="button-group zoom-in button-group-spacing">
            <button
              className="reserve-button neon-btn small-btn"
              onClick={() => navigate('/reservation')}
            >
              Make Reservations
            </button>
            <button
              className="explore-button neon-btn small-btn"
              onClick={() => navigate('/menu')}
            >
              Explore Our Menu
            </button>
          </div>
        </div>

        <div className="carousel-wrapper swipe-carousel">
          <div
            className="carousel-slider swipe-transition"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {dishImages.map((src, idx) => (
              <div className="carousel-card fancy-shadow" key={idx}>
                <div className="dish-card shape-frame">
                  <img src={src} alt={`Dish ${idx + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
