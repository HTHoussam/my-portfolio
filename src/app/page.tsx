import ContactMe from "./components/contact-me";
import DescriptionHero from "./components/description-hero";
import ExperiencesSection from "./components/experiences-section";
import Header from "./components/header";
import SkillsSection from "./components/skills-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 px-24 sm:px-2 md:px-4 bg-muted">
      {/* header */}
      <Header />
      {/* main content */}
      <div className="w-full flex-1 flex flex-col justify-center text-center gap-12 py-12 px-28">
        <DescriptionHero />
        <ExperiencesSection />
        <SkillsSection />
        <ContactMe />
      </div>
    </main>
  );
}
