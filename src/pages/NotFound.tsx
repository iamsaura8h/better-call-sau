
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-stone-light to-white p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-sm border border-white/60 p-8 text-center">
        <h1 className="text-6xl font-display font-bold text-charcoal-dark mb-4">404</h1>
        <p className="text-xl text-charcoal-light mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center button-primary"
        >
          <ArrowLeft size={18} className="mr-2" />
          <span>Return Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
