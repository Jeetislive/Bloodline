// import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FacilitySlider = () => {
  // Hardcoded data for the facilities
  const facilities = [
    {
      icon: "🏥",
      title: "Blood Banks",
      description: "Blood banks partnered with us.",
      count: 20,
    },
    {
      icon: "🩸",
      title: "Active Donors",
      description: "Donors available for emergencies.",
      count: 500,
    },
    {
      icon: "📦",
      title: "Total Donations",
      description: "Donations made through our platform.",
      count: 3000,
    },
    {
      icon: "❤️",
      title: "Requests Fulfilled",
      description: "Requests successfully fulfilled.",
      count: 1200,
    },
  ];

  // Slider settings for infinite loop
  const settings = {
    dots: true,
    infinite: true, // Ensures the slider loops infinitely
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 4000, // 3 seconds interval
    pauseOnHover: false, // Optional: Keeps sliding even when hovered
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
      <div className="w-screen ">
        <Slider {...settings}>
          {facilities.map((facility, index) => (
            <div key={index} className="p-0">
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <div className="text-6xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {facility.description}
                </p>
                <span className="text-blue-500 font-bold text-2xl">
                  {facility.count}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  );
};

export default FacilitySlider;
