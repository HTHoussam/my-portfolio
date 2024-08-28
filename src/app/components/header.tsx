import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavBarLink, SocialLinkType } from "@/lib/types";
import Link from "next/link";
import MobileNavSheet from "./core/mobile-nav-sheet";
import SocialLink from "./core/social-link";

const Header = () => {
  const navBarLinks: NavBarLink[] = [
    {
      name: "Who Am I",
      href: "#whoami",
    },
    {
      name: "Experiences",
      href: "#experiences",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Message Me",
      href: "#message__me",
    },
  ];
  const socialLinks: SocialLinkType[] = [
    {
      href: "https://github.com/HTHoussam",
      iconSrc: "/assets/imgs/github-icon.png",
      alt: "github-icon",
    },
    {
      href: "https://www.linkedin.com/in/habbathoussam/",
      iconSrc: "/assets/imgs/linkedin-icon.png",
      alt: "linkedin-icon",
    },
  ];
  return (
    <div className="flex items-start justify-between max-w-7xl p-4 mx-auto w-full">
      <Avatar>
        <AvatarImage src="/assets/imgs/me.png" alt="@houssam_ht" />
        <AvatarFallback>HH</AvatarFallback>
      </Avatar>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-row text-xl text-secondary-foreground gap-8">
        {navBarLinks.map(({ name, href }) => (
          <Link
            key={name}
            className="pb-4 no-underline relative group capitalize hover:text-muted-foreground transition-all duration-300"
            href={href}
          >
            {name}
            <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-muted-foreground transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex flex-row gap-4">
        {socialLinks.map(({ href, iconSrc, alt }) => (
          <SocialLink key={href} href={href} iconSrc={iconSrc} alt={alt} />
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden">
        <MobileNavSheet navBarLinks={navBarLinks} socialLinks={socialLinks} />
      </div>
    </div>
  );
};
export default Header;
