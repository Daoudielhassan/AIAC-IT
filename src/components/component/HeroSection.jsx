import Link from "next/link";

export function HeroSection() {
  return (
    <header className="hero-section bg-gradient-to-r from-primary-500 to-primary-700 pt-12 md:pt-24 lg:pt-32">
      <div className="container mx-auto px-4 flex flex-col xl:flex-row items-center justify-between space-y-10 xl:space-y-0">
        <div className="hero-content w-full xl:w-1/2 text-center xl:text-left space-y-6 xl:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-sans tracking-tight text-white leading-tight">
            Welcome to the IT Club
          </h1>
          <p className="max-w-full md:text-lg text-white leading-relaxed">
            Explore the latest technologies, collaborate on exciting projects, and connect with like-minded individuals in our vibrant IT community.
          </p>
          <div className="mt-6">
            <Link
              href="#"
              className="inline-flex items-center justify-center h-12 px-8 py-3 text-base font-medium text-white bg-secondary-500 rounded-md shadow hover:bg-secondary-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2"
              prefetch={false}
            >
              Join Now
            </Link>
          </div>
        </div>
        <div className="hero-image w-full xl:w-1/2 flex justify-center xl:justify-end">
          <img
            src="/pictures/logo.png"
            alt="IT Club logo, a vibrant and colorful representation of the community"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-full object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </header>
  );
}