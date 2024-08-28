"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavBarLink, SocialLinkType } from "@/lib/types";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SocialLink from "./social-link";

interface MobileNavSheetProps {
  navBarLinks: NavBarLink[];
  socialLinks: SocialLinkType[];
}

const MobileNavSheet: React.FC<MobileNavSheetProps> = ({
  navBarLinks,
  socialLinks,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-0">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex bg-slate-800 flex-col p-6">
        <div className="flex justify-between items-center mb-8">
          <Image
            src="/assets/imgs/logo.png"
            width={30}
            height={30}
            alt="logo"
          />
          <Button
            variant="ghost"
            className="p-0"
            onClick={() => setIsOpen(false)}
          >
            <XIcon className="w-6 h-6" />
          </Button>
        </div>
        <nav className="flex flex-col space-y-6 text-lg text-secondary-foreground">
          {navBarLinks.map(({ name, href }) => (
            <Link
              key={name}
              className="no-underline capitalize hover:text-muted-foreground transition-all duration-300"
              href={href}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-row gap-4 mt-6">
          {socialLinks.map(({ href, iconSrc, alt }) => (
            <SocialLink key={alt} href={href} iconSrc={iconSrc} alt={alt} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavSheet;
