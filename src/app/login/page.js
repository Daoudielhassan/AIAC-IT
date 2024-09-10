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
  
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
  
      const data = await response.json();
      console.log("Response data:", data);  // Log response data for debugging
      console.log("Response status:", response.status);  // Log status code
  
      if (response.ok) {
        document.cookie = "authToken=true; path=/; max-age=86400";
        console.log("Login successful");
        router.push("/dashboard");
      } else {
        setError(data.message || "Failed to login. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);  // Log error details for debugging
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
      <div className="absolute inset-0 bg-gray-100 opacity-25 z-0"></div>

      <div className="relative flex w-full">
        <div className="w-full flex items-center justify-center p-6">
          <LoginCard
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
