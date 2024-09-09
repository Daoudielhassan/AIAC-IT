"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LoginCard from "@/components/component/LoginCard";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!email || !password) {
        setError("Please enter both email and password");
        setLoading(false);
        return;
      }

      // Simulate an authentication request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Set a cookie with an expiration time
      document.cookie = "authToken=true; path=/; max-age=86400; secure"; // Max-age is 1 day

      console.log("Login successful");
      router.push("/dashboard");
    } catch (err) {
      setError("Failed to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative flex min-h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/pictures/bg1.jpg)" }}
    >
      {/* Background with opacity using ::before */}
      <div className="absolute inset-0 bg-gray-100 opacity-25 z-0"></div>

      {/* Main Content */}
      <div className="relative flex w-full">
        <div className="w-full flex items-center justify-center p-6">
          <LoginCard
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
            loading={loading} // Optionally pass loading state to show a spinner or disable the button
          />
        </div>
      </div>
    </div>
  );
}
