import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export function FeaturedProjectsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the exciting projects our members have been working on.
            </p>
          </div>
        </div>
        <Carousel opts={{ align: "start", slidesPerView: "auto", spaceBetween: 16 }} className="w-full">
          <CarouselContent>
            {[
              { title: "AI-Powered Chatbot", description: "A conversational AI assistant that can help with a variety of tasks.", imgSrc: "/placeholder.svg", imgAlt: "AI-Powered Chatbot" },
              { title: "Blockchain-based Supply Chain", description: "A decentralized supply chain management system built on blockchain technology.", imgSrc: "/placeholder.svg", imgAlt: "Blockchain-based Supply Chain" }
            ].map((project) => (
              <CarouselItem key={project.title}>
                <Card className="w-[300px]">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={project.imgSrc}
                      width="400"
                      height="225"
                      alt={project.imgAlt}
                      className="rounded-md object-cover"
                    />
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Learn More
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
