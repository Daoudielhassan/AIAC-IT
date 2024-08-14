import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

const events = [
  {
    title: "Introduction to React",
    description: "Learn the basics of React.js and build your first web app.",
    date: "October 15, 2024",
    time: "6:00 PM - 8:00 PM",
    link: "/register/react",
  },
  {
    title: "Cybersecurity Fundamentals",
    description:
      "Dive into the world of cybersecurity and learn how to protect your data.",
    date: "October 20, 2024",
    time: "7:00 PM - 9:00 PM",
    link: "/register/cybersecurity",
  },
  {
    title: "Machine Learning Workshop",
    description:
      "Explore the fundamentals of machine learning and build your own models.",
    date: "November 10, 2024",
    time: "9:00 AM - 5:00 PM",
    link: "/register/ml",
  },
];

export function EventsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Upcoming Events
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-lg sm:text-xl">
            Check out our upcoming events and workshops to learn new skills and
            connect with the community.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            slidesPerView: "auto",
            spaceBetween: 16,
          }}
          className="w-full"
        >
          <CarouselContent>
            {events.map((event) => (
              <CarouselItem key={event.title} className="px-2">
                <Card className="w-full sm:w-[300px]">
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {event.time}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <Link
                      href={event.link}
                      className="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary"
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
