"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";

export function HeroSection() {
  const [isFloatingVisible, setFloatingVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const toggleFloatingSection = () => setFloatingVisible(!isFloatingVisible);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setMessage('');
      
      try {
          const response = await fetch('http://127.0.0.1:5000/api/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          });
  
          if (response.ok) {
              setMessage('Registration successful!');
              resetForm();
          } else {
              setMessage('An error occurred. Please try again.');
          }
      } catch (error) {
          setMessage('An unexpected error occurred.');
      } finally {
          setLoading(false);
      }
  };
  

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
    setFloatingVisible(false);
  };

  return (
    <>
      <header className="hero-section bg-gradient-to-r from-primary-500 to-primary-700 pt-12 md:pt-24 lg:pt-32">
        <div className="container mx-auto px-4 flex flex-col xl:flex-row items-center justify-between space-y-10 xl:space-y-0">
          {/* Hero Content */}
          <div className="hero-content w-full xl:w-1/2 text-center xl:text-left space-y-6 xl:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-sans tracking-tight text-white leading-tight">
              Welcome to the IT Club
            </h1>
            <p className="max-w-full md:text-lg text-white leading-relaxed">
              Explore the latest technologies, collaborate on exciting projects, and connect with like-minded individuals in our vibrant IT community.
            </p>
            <div className="mt-6">
              <button
                onClick={toggleFloatingSection}
                className="inline-flex items-center justify-center h-12 px-8 py-3 text-base font-medium text-white bg-primary rounded-md shadow hover:bg-secondary-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2"
              >
                 Join Now
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image w-full xl:w-1/2 flex justify-center xl:justify-end">
            <img
              src="/pictures/IT.png"
              alt="IT Club logo, a vibrant and colorful representation of the community"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Floating Form */}
      {isFloatingVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-muted rounded-lg p-6 max-w-md w-full text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-rose-50">Join the IT Club</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {['firstName', 'lastName', 'email', 'phone'].map((field) => (
                <div key={field}>
                  <label className="block text-left text-sm font-medium text-rose-50">
                    {field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                  </label>
                  <Input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Enter your ${field}`}
                    required
                  />
                </div>
              ))}
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md bg-blue-300 px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
            <button
              onClick={toggleFloatingSection}
              className="mt-4 inline-flex w-full justify-center rounded-md bg-white border border-primary px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
