import React from 'react';
import './HomePage.css'; // Assuming you have styles specific to the HomePage

const HomePage = () => {
  return (
    <div className="homepage-background">
      {/* Assuming your image is set as a background in CSS for homepage-background */}
      <div className="text-overlay">
        Error: We've been attacked
      </div>
      <div className="symbol-overlay">
        Error Error
      </div>
      {/* Any other overlays or components for your homepage */}
    </div>
  );
};

export default HomePage;
