import Head from 'next/head';
import { Bricolage_Grotesque } from 'next/font/google';
import { Space_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const fontHeading = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: '400', // or the appropriate weight
});

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: '400', // or the appropriate weight
});


export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/pictures/logo.png" />
        <title>Welcome to our Club</title>
      </Head>
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
    </>
  );
}
