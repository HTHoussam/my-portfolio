import Link from "next/link";
import DescriptionHero from "./components/description-hero";
import ExperiencesSection from "./components/experiences-section";
import SkillsSection from "./components/skills-section";

export default function Home() {
  const pages = ["page1", "page2", "page3", "page4"];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 px-24 bg-muted">
      {/* header */}
      <div className="flex justify-between p-2 w-full">
        <div>image</div>
        <nav className="flex flex-row text-2xl text-secondary-foreground gap-8">
          {pages.map((page) => (
            <Link
              key={page}
              className="pb-4 no-underline relative group capitalize"
              href="/page1"
            >
              {page}
              <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-muted-foreground transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <div>Navigation here </div>
      </div>
      {/* main content */}
      <div className="w-full flex-1 flex flex-col justify-center text-center gap-12 py-12 px-28">
        <DescriptionHero />
        <SkillsSection />
        <ExperiencesSection />
        <div>dkemdoemdeome</div>
      </div>
    </main>
  );
}
