import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-primary">
      <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
        <div className="grid gap-4 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-primary-foreground">
              Welcome to the IT Club
            </h1>
            <p className="max-w-[700px] text-primary-foreground md:text-xl">
              Explore the latest technologies, collaborate on exciting projects, and connect with like-minded
              individuals in our vibrant IT community.
            </p>
            <div className="mt-6">
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Join Now
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/pictures/logo.png"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
