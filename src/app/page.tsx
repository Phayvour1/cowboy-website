"use client";
import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Testimonials from "./components/Testimonial";
import Synopsis from "./components/Synopsis";
import Body from "./components/Body";
import NewsletterPopup from "./components/NewsletterPopup";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup automatically when page loads
    setTimeout(() => {
      setShowPopup(true);
    }, 1000); // 1-second delay to avoid sudden pop-up
  }, []);

  return (
    <div>
      <Navbar />
      <Body />
      <Synopsis />

      {/* Button to manually trigger popup */}
      <div className="flex justify-center my-10">
        <button
          onClick={() => setShowPopup(true)}
          className="bg-red-500 text-white text-2xl font-semibold px-10 py-5 rounded-lg cursor-pointer hover:bg-red-600 transition-all shadow-xl"
        >
          Get Your FREE eBook CLICK HERE NOW!
        </button>
      </div>

      <Testimonials />
      <Footer />

      {/* Newsletter Popup */}
      <NewsletterPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}
