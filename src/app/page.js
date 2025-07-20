import Hero from "@/components/hero/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen">
      <Navbar />
      <Hero />
    </main>
  );
}
