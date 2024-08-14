import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { EventsSection } from "./EventsSection";
import { FeaturedProjectsSection } from "./FeaturedProjectsSection";
import { MeetTheTeamSection } from "./MeetTheTeamSection";
import { Contact } from "./contact";
export function HomeComponent() {
  return (
    <main>
     <Header />
      <HeroSection />
      <EventsSection />
      <FeaturedProjectsSection />
      <MeetTheTeamSection />
      <Contact />
    </main>
  );
}
