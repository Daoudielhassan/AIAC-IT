// app/login/page.js
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    // Simulate an authentication request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Set a cookie with an expiration time
    document.cookie = "authToken=true; path=/; max-age=86400; secure"; // Max-age is 1 day

    router.push('/dashboard');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
}
