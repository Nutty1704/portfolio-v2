import Hero from "@/components/hero/Hero";
import Navbar from "@/components/Navbar";
import Initialize from "./Initialize";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen">
      <Initialize />
      <Navbar />
      <Hero />
    </main>
  );
}
