import Link from "next/link";

const Header = () => {
  const links: { name: string; href: string }[] = [
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
  return (
    <div className="flex justify-between p-2 w-full">
      <div>image</div>
      <nav className="flex flex-row text-xl text-secondary-foreground gap-8">
        {links.map(({ name, href }) => (
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
      <div>Navigation here </div>
    </div>
  );
};
export default Header;
