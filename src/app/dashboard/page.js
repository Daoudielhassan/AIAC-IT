// ./src/app/dashboard/page.js
'use client'; // This marks the component as a Client Component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const authToken = document.cookie.includes('authToken=true');
    if (!authToken) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Your dashboard content goes here */}
    </div>
  );
}
