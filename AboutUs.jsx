// src/AboutUs.jsx
import React from 'react';
import './AboutUs.css';
import image from './assets/image.png';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="text-section">
        <p className="label">ABOUT US</p>
        <h1 className="headline">
          Serving flavors<br />
          that bring <span className="highlight-wrapper">
            people together
            <span className="highlight"></span>
          </span><br />
          since day one.
        </h1>
        <p className="description">
          At Flavour Fusion , we believe food is more than just a meal — it’s an experience. 
          Our story began with a passion for fresh ingredients, bold flavors, and the joy of sharing great food with great people.
          Whether you’re stopping in for a quick bite or a special evening out, we’re here to serve delicious dishes 
          made with love and local pride.
        </p>
      </div>
      <div className="image-section">
        <img src={image} alt="Restaurant interior or dish" className="about-image" />
        <div className="bg-shape"></div>
      </div>
    </div>
  );
};

export default AboutUs;
