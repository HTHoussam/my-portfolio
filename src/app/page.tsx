import ContactMe from "./components/contact-me";
import DescriptionHero from "./components/description-hero";
import ExperiencesSection from "./components/experiences-section";
import Header from "./components/header";
import SkillsSection from "./components/skills-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between items-center py-10 px-4 sm:px-6 md:px-8 bg-muted">
      {/* header */}
      <Header />
      {/* main content */}
      <div className="w-full max-w-7xl flex-1 flex flex-col justify-center text-center gap-8 md:gap-12 py-8 md:py-12 px-4 sm:px-6 md:px-8">
        <DescriptionHero />
        <ExperiencesSection />
        <SkillsSection />
        <ContactMe />
        {/* <ProjectsSection /> */}
      </div>
    </main>
  );
}
