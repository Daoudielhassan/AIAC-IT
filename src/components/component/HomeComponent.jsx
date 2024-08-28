import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { MeetTheTeamSection } from "./MeetTheTeamSection";
import { Contact } from "./contact";
export function HomeComponent() {
  return (
    <main>
      <Header />
      <HeroSection />
      <MeetTheTeamSection />
      <Contact />
    </main>
  );
}
