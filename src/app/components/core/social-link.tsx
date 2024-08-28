import Image from "next/image";
import Link from "next/link";

interface SocialLinkProps {
  href: string;
  iconSrc: string;
  alt: string;
  size?: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  iconSrc,
  alt,
  size = 30,
}) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Image src={iconSrc} width={size} height={size} alt={alt} />
    </Link>
  );
};

export default SocialLink;
