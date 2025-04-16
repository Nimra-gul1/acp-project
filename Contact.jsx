import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [step, setStep] = useState("form"); // form -> time -> success
  const [selectedTime, setSelectedTime] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep("time");
  };

  const handleTimeSelect = (e) => {
    setSelectedTime(e.target.value);
    setStep("success");
  };

  const timeSlots = [
    "11:00 AM",
    "12:30 PM",
    "2:00 PM",
    "5:30 PM",
    "7:00 PM",
    "8:30 PM"
  ];

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Book a Table</h1>
        <p className="contact-description">
          Whether it's a cozy dinner or a grand celebration, we’re here to make it memorable.
        </p>

        <div className="contact-info">
          <p><strong>Email:</strong><br /><a href="mailto:contact@delightfulbites.com">contact@delightfulbites.com</a></p>
          <p><strong>Phone:</strong><br /><a href="tel:9292426868">929-242-6868</a></p>
          <p><strong>Address:</strong><br />31 West Street, London, N04 1EJ</p>
          <p><strong>Opening Hours:</strong><br />Mon - Sat: 11AM – 11PM<br />Sunday: 11AM – 9:30PM</p>
        </div>
      </div>

      <div className="contact-right">
        {step === "form" && (
          <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea rows="5" placeholder="Message or Booking Details" required />
            <button type="submit">Submit</button>
          </form>
        )}

        {step === "time" && (
          <div className="time-select-container">
            <p className="select-label">Please select a time slot for your booking:</p>
            <select onChange={handleTimeSelect} defaultValue="">
              <option value="" disabled>Select a time</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
        )}

        {step === "success" && (
          <p className="success-message">✅ Booking successfully done at <strong>{selectedTime}</strong>!</p>
        )}
      </div>
    </div>
  );
}

export default Contact;
