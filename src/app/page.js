import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Initialize from "./Initialize";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full !p-0 !m-0">
      <div className="bg-background relative overflow-x-hidden z-10">
        <Initialize />
        <div id='blob-1' data-scroll data-scroll-speed='0.3' aria-hidden className="blob" />
        <div id='blob-2' data-scroll data-scroll-speed='0.15' aria-hidden className="blob" />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
      {/* safe load certain tailwind classes being passed down to components */}
      <div className="text-green-600 bg-green-600 hidden" />
    </main>
  );
}
