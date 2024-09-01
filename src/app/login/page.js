// pages/login.js
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import QuoteColumn from "@/components/component/QuoteColumn";
import LoginCard from "@/components/component/LoginCard";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (email && password) {
        console.log('Login successful');
        router.push('/dashboard');
      } else {
        setError('Please enter both email and password');
      }
    } catch (err) {
      setError('Failed to login. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <QuoteColumn />
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <LoginCard
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          error={error}
        />
      </div>
    </div>
  );
}