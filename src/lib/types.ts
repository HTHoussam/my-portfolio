export interface Skill {
  name: string;
  level: number;
  image: string;
  rating: number;
}
export interface Experience {
  companyName: string;
  startDate: string;
  role: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface ContactMeObject {
  name: string;
  subject: string;
  email: string;
  message: string;
}
export interface SocialLinkType {
  alt: string;
  href: string;
  iconSrc: string;
}
export interface NavBarLink {
  name: string;
  href: string;
}
