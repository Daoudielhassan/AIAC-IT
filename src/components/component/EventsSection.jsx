import {  Carousel,  CarouselContent,  CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CalendarDaysIcon, ClockIcon } from "./Icons";
import Link from "next/link";

// Define the event data as a separate constant
const events = [
  {
    title: "Introduction to React",
    description: "Learn the basics of React.js and build your first web app.",
    date: "June 15, 2024",
    time: "6:00 PM - 8:00 PM",
    link: "/register/react",
  },
  {
    title: "Cybersecurity Fundamentals",
    description: "Dive into the world of cybersecurity and learn how to protect your data.",
    date: "July 20, 2024",
    time: "7:00 PM - 9:00 PM",
    link: "/register/cybersecurity",
  },
  {
    title: "Machine Learning Workshop",
    description: "Explore the fundamentals of machine learning and build your own models.",
    date: "August 10, 2024",
    time: "9:00 AM - 5:00 PM",
    link: "/register/ml",
  },
];

export function EventsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Upcoming Events
            </h2>
            <p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Check out our upcoming events and workshops to learn new skills and
              connect with the community.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            slidesPerView: "auto",
            spaceBetween: 16,
          }}
          className="w-full"
          centerMode
          centerSlidePercentage={50}
        >
          <CarouselContent>
            {events.map((event) => (
              <CarouselItem key={event.title}>
                <Card className="w-[300px]">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <ClockIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {event.time}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={event.link}
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Register
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:block" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:block" />
        </Carousel>
      </div>
    </section>
  );
} 