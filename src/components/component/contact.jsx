import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GitlabIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon } from "./Icons";

import Link from "next/link";

export function Contact() {
  return (
    <div id="Contact">
      {
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid gap-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a question or want to get involved with the AIAC IT Club?
                  Fill out the form below or use the contact information to
                  reach out.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Contact Form</h3>
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Contact Info</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-10 w-10 text-muted-foreground" />
                    <p>
                      AIAC, Technopole de l’Aéroport Mohammed V, Nouasser,
                      Casablanca, Maroc
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                    <p>0611286753</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MailIcon className="h-5 w-5 text-muted-foreground" />
                    <p>info@aiacitclub.com</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Social Media</h3>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://www.instagram.com/aiacit/"
                    className="text-muted-foreground hover:text-primary"
                    prefetch={false}
                  >
                    <InstagramIcon className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/aimac-it-club/"
                    className="text-muted-foreground hover:text-primary"
                    prefetch={false}
                  >
                    <LinkedinIcon className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://gitlab.com/aiacit"
                    className="text-muted-foreground hover:text-primary"
                    prefetch={false}
                  >
                    <GitlabIcon className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      }{" "}
    </div>
  );
}

