import Achievements from "@/components/home/Achievements";
import Determined from "@/components/home/Determined";
// import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Principal from "@/components/home/Principal";
import ToppersSection from "@/components/home/ToppersSection";
import UpcomingEvents from "@/components/home/UpcomingEvents";

export default function HomePage() {
  return (
    <main className="w-full" id="top">
      <Hero />
      <UpcomingEvents />
      <Determined />
      <Achievements />
      <Principal />
      <ToppersSection />
      {/* <Faq /> */}
    </main>
  );
}
