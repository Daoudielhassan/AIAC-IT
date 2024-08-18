import { Bricolage_Grotesque } from 'next/font/google';
import { Space_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const fontHeading = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: '400',
});

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: '400',
});

// Define the metadata for this layout
export const metadata = {
  title: 'Welcome to our Club',
  description: 'Join us and be part of our community!',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
