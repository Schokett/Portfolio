import Footer from "../components/footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";

function Portfolio() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <div className="font-sans">
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default Portfolio;
