import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import FeaturedProducts from "@/components/FeaturedProducts";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingLeaves from "@/components/FloatingLeaves";

export default function Home() {
  return (
    <main className="relative">
      <FloatingLeaves />
      <Navbar />
      <Hero />
      <WhyChoose />
      <FeaturedProducts />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
