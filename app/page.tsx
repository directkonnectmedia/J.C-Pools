import { ContactWizard } from "@/components/ContactWizard";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ServicesCarousel />
        <Gallery />
        <Testimonials />
        <ContactWizard />
      </main>
      <Footer />
    </div>
  );
}
