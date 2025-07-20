import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Initialize from "./Initialize";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <Initialize />
      <Navbar />
      <Hero />
      <div className="w-1/2 h-[105dvh]" />
    </main>
  );
}
