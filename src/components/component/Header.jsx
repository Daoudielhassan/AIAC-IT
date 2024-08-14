"use client";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const navItems = [
  { label: "Events", href: "/events" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "About", href: "/about" },
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
            className="h-8 w-auto text-primary"
            alt="IT Club Logo"
          />
          <span className="sr-only">IT Club</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-primary-foreground"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </header>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-background border-t">
          <ul className="flex flex-col space-y-4 py-4 px-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
