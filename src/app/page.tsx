import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import PhotoIntro from "./components/PhotoIntro";
import ExpertiseSection from "./components/ExpertiseSection";
import TechStackSection from "./components/TechStackSection";
import CareerTimeline from "./components/CareerTimeline";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <PhotoIntro />
      <ExpertiseSection />
      <TechStackSection />
      <CareerTimeline />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
