"use client";
import { useState, useEffect } from 'react';
import axios from "axios";

export function HeroSection() {
    const [isFloatingVisible, setFloatingVisible] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });
    const [members, setMembers] = useState([]);

    useEffect(() => {
        loadMembers();
    }, []);

    const loadMembers = async () => {
        const result = await axios.get("http://localhost:8000/api1");
        setMembers(result.data);
    };

    const addMember = async (newMember) => {
        const result = await axios.post("http://localhost:8000/api1", newMember);
        setMembers(prevState => [...prevState, result.data]);  // Use the response from the server
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addMember(formData);
        console.log(formData);
        alert('Form submitted successfully!');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
        });
    };

    const toggleFloatingSection = () => setFloatingVisible(!isFloatingVisible);

    return (
        <>
            <header className="hero-section bg-gradient-to-r from-primary-500 to-primary-700 pt-12 md:pt-24 lg:pt-32">
                <div className="container mx-auto px-4 flex flex-col xl:flex-row items-center justify-between space-y-10 xl:space-y-0">
                    <div className="hero-content w-full xl:w-1/2 text-center xl:text-left space-y-6 xl:space-y-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white">
                            Welcome to the IT Club
                        </h1>
                        <p className="md:text-lg text-white">
                            Explore the latest technologies, collaborate on exciting projects, and connect with like-minded individuals in our vibrant IT community.
                        </p>
                        <div className="mt-6">
                            <button
                                onClick={toggleFloatingSection}
                                className="inline-flex items-center justify-center h-12 px-8 py-3 text-base font-medium text-white bg-primary rounded-md shadow hover:bg-secondary-700 transition-colors"
                            >
                                Join Now
                            </button>
                        </div>
                    </div>

                    <div className="hero-image w-full xl:w-1/2 flex justify-center xl:justify-end">
                        <img
                            src="/pictures/IT.png"
                            alt="IT Club logo, a vibrant and colorful representation of the community"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </header>

            {isFloatingVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-muted rounded-lg p-6 max-w-md w-full text-center shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 text-rose-50">Join the IT Club</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {['firstName', 'lastName', 'email', 'phoneNumber'].map((field) => (
                                <div key={field}>
                                    <label className="block text-left text-sm font-medium text-rose-50">
                                        {field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                                    </label>
                                    <input
                                        className="input-name"
                                        type={field === 'email' ? 'email' : field === 'phoneNumber' ? 'tel' : 'text'}
                                        placeholder={`Enter your ${field}`}
                                        onChange={handleChange}
                                        value={formData[field]}
                                        name={field}
                                        required
                                    />
                                </div>
                            ))}
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="inline-flex w-full justify-center rounded-md bg-blue-300 px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-primary/90"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        <button
                            onClick={toggleFloatingSection}
                            className="mt-4 inline-flex w-full justify-center rounded-md bg-white border border-primary px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-100"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
