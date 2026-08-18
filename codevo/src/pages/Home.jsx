import Hero from "../components/Hero";
import Domains from "../components/Domains";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Domains />
      <HowItWorks />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </>
  );
}