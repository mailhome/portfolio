
import { Hero } from "@/components/hero/hero";
import { Info } from "@/components/info/info";
import { Portfolio } from "@/components/portfolio/portfolio";
import { Skills } from "@/components/skills/skills";


export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <Info />
      <Skills />
      <Portfolio />
    </main>
  );
}
