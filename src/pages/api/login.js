// pages/api/login.js
import { serialize } from 'cookie';

export default async function loginHandler(req, res) {
  if (req.method === 'POST') {
    // Perform your authentication logic here
    const { username, password } = req.body;
    
    // If authentication is successful:
    const token = 'your-auth-token'; // Replace with your actual token logic

    // Set the cookie with secure and expiration attributes
    const serializedCookie = serialize('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Ensures secure cookies in production
      sameSite: 'strict',
      maxAge: 86400, // 1 day in seconds
      path: '/',
    });

    res.setHeader('Set-Cookie', serializedCookie);
    res.status(200).json({ success: true });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
