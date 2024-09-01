import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/component/Header";
import { HeroSection } from "@/components/component/HeroSection";
import { MeetTheTeamSection } from "@/components/component/MeetTheTeamSection";
import { Contact } from "@/components/component/contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-4 md:p-3 lg:p-10 bg-background">
      <Header />
      <HeroSection />
      <MeetTheTeamSection />
      <Contact />
      <SpeedInsights />
      <Analytics />
    </main>
  );
}
