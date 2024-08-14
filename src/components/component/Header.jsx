import Link from "next/link";
import { MountainIcon } from "./Icons";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <img src="/pictures/logo.png" className="size-14 text-primary" />
        <span className="sr-only">IT Club</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {['Events', 'Projects', 'Team', 'About'].map((item) => (
          <Link
            key={item}
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
}


