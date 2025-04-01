import { Hero } from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import GameDev from "@/components/home/GameDev";
import GamingMode from "@/components/home/GamingMode";
import MoveEarn from "@/components/home/MoveEarn";
import Platform from "@/components/home/Platform";
import Faq from "@/components/home/Faq";

export default function HomePage() {
  return (
    <main className="w-full" id="top">
      <Hero />
      <Partners />
      <GameDev />
      <GamingMode />
      <MoveEarn />
      <Platform />
      {/* <ToppersSection /> */}
      <Faq />
    </main>
  );
}
