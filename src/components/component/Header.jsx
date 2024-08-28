// Header.jsx
"use client";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const navItems = [
  { label: "Events", href: "/events" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "#Team" },
  { label: "Contact", href: "#Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-background border-b">
        <Link href="/" className="flex items-center">
          <img
            src="/pictures/logo.png"
            className="h-10 w-auto text-primary"
            alt="IT Club Logo"
          />
          <span className="sr-only">IT Club</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 justify-center items-center w-full">
          <div className="flex flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium hover:underline underline-offset-4 text-primary-foreground mx-4"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex justify-end">
            <Link
              href="/login"
              className="text-base font-medium bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Login
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-primary-foreground"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
      </header>
      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-background border-t">
          <ul className="flex flex-col space-y-4 py-4 px-4 bg-cyan-800 rounded-md">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="px-2 block text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/login"
                className="inline-flex items-center justify-center h-8 px-4 py-2 text-base font-medium text-white bg-clip-border bg-transparent rounded-md border-2 border-white"
                onClick={() => setMenuOpen(false)} // Close menu on login click
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
