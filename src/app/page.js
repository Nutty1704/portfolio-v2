import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Initialize from "./Initialize";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Initialize />
      <div id='blob-1' data-scroll data-scroll-speed='0.3' aria-hidden className="blob" />
      <div id='blob-2' data-scroll data-scroll-speed='0.15' aria-hidden className="blob" />
      <Navbar />
      <Hero />
      <div className="bg-amber-200 w-full h-[105dvh]" />
      <div className="bg-green-200 w-full h-[105dvh]" />
      <div className="bg-cyan-200 w-full h-[105dvh]" />
    </main>
  );
}
