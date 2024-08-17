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

  const toggleFloatingSection = () => {
    setFloatingVisible(!isFloatingVisible);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        });
        setFloatingVisible(false);
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <header className="hero-section bg-gradient-to-r from-primary-500 to-primary-700 pt-12 md:pt-24 lg:pt-32">
        <div className="container mx-auto px-4 flex flex-col xl:flex-row items-center justify-between space-y-10 xl:space-y-0">
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
          <div className="hero-image w-full xl:w-1/2 flex justify-center xl:justify-end">
            <img
              src="/pictures/IT.png"
              alt="IT Club logo, a vibrant and colorful representation of the community"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </header>

      {isFloatingVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-muted rounded-lg p-6 max-w-md w-full text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-rose-50">Join the IT Club</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-left text-sm font-medium text-rose-50		">First Name</label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <label className="block text-left text-sm font-medium text-rose-50">Last Name</label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                />
              </div>
              <div>
                <label className="block text-left text-sm font-medium text-rose-50">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-left text-sm font-medium text-rose-50">Phone Number</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
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
