"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";


export function HeroSection() {
  const [isFloatingVisible, setFloatingVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [members, setMembers] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  // Toggle floating section visibility
  const toggleFloatingSection = () => setFloatingVisible((prev) => !prev);

  // Load members on component mount
  useEffect(() => {
    loadMembers();
  }, []);

  // Load members from API with error handling
  const loadMembers = async () => {
    try {
      const result = await axios.get("https://206.81.22.239:8000/api1");
      setMembers(result.data);
    } catch (error) {
      console.error("Error loading members:", error);
      setMessage("Failed to load members.");
    }
  };

  // Add new member with error handling
  const addMember = async (newMember) => {
    try {
      const result = await axios.post("https://206.81.22.239:8000/api1", newMember);
      setMembers((prevState) => [...prevState, result.data]);
      return result; // Return result for further handling
    } catch (error) {
      console.error("Error adding member:", error);
      throw new Error("Failed to add new member.");
    }
  };

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await addMember(formData);
      if (response.status === 201) {
        // Alert on successful registration
        window.alert(`${formData.firstName} ${formData.lastName} has joined successfully!`);
        
        setMessage("Registration successful!");
        resetForm();
      } else {
        setMessage("Failed to register. Please try again.");
        window.alert(`faild to add a new member`);
      }
    } catch (error) {
      setMessage("An unexpected error occurred. Please try again.");
      window.alert(`faild to add a new member`);
    } finally {
      setLoading(false);
    }
  };

  // Reset form and optionally close floating section
  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });
    setFloatingVisible(true); // Close the floating section after submission
  };



  return (
    <>
      <header className="hero-section bg-gradient-to-r from-primary-500 to-primary-700 pt-12 md:pt-24 lg:pt-32">
        <div className="container mx-auto px-4 flex flex-col xl:flex-row items-center justify-between space-y-10 xl:space-y-0">
          {/* Hero Content */}
          <div className="hero-content w-full xl:w-1/2 text-center xl:text-left space-y-6 xl:space-y-8">
            <h1 className="animate__animated animate__shakeX text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-sans tracking-tight text-white leading-tight">
              Welcome to the IT Club
            </h1>
            <p className="max-w-full md:text-lg text-white leading-relaxed">
              Explore the latest technologies, collaborate on exciting projects,
              and connect with like-minded individuals in our vibrant IT
              community.
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
            <h2 className="text-2xl font-bold mb-4 text-rose-50">
              Join the IT Club
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {["firstName", "lastName", "email", "phoneNumber"].map((field) => (
                <div key={field}>
                  <label className="block text-left text-sm font-medium text-rose-50">
                    {field
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </label>
                  <Input
                    type={
                      field === "email"
                        ? "email"
                        : field === "phoneNumber"
                        ? "tel"
                        : "text"
                    }
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
