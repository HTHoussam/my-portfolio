import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "./description-hero.css";
import ResumeDownloadButton from "./resume-download-button";
const DescriptionHero = () => {
  return (
    <section
      id="whoami"
      className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 p-6 md:p-2 bg-transparent"
    >
      <div className="flex-1 flex flex-col gap-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-slate-50 bg-clip-text text-transparent p-2 md:p-4 text-center lg:text-left">
          Hey, I&apos;m Houssam Habbat
        </h1>
        <div className="mb-4 flex flex-col gap-12">
          <p className="text-lg md:text-2xl md:text-left mb-4 text-center lg:text-left">
            I am a passionate Software Engineer with a strong focus on front-end
            development, specializing in React and TypeScript. With a commitment
            to web performance and accessibility, I craft high-quality web
            applications that enhance user experiences and contribute to a
            better internet. My expertise extends to building and optimizing
            modern web solutions using technologies such as RESTful APIs,
            JavaScript,Typescript Node.js, Next.js, React.js, GraphQL and more.
            Whether it's developing seamless interfaces or creating scalable
            back-end services, I'm dedicated to delivering robust and innovative
            solutions
          </p>
          <div className="flex flex-row ml-auto gap-4 w-fit">
            <Link
              target="_blank"
              href={"/assets/pdf/Houssam_Habbat_Resume.pdf"}
            >
              <Button className="relative overflow-hidden bg-gradient-to-r from-secondary-foreground to-slate-300 text-black group">
                <span className="absolute inset-0 bg-gradient-to-r from-slate-300 to-secondary-foreground transition-transform transform translate-x-full group-hover:translate-x-0 ease-in-out duration-300"></span>
                <span className="relative flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  Read Resume
                </span>
              </Button>
            </Link>
            <ResumeDownloadButton />
          </div>
        </div>
        <p className="text-center lg:text-left my-4">
          P.S. this website is open-source and available on{" "}
          <a href="https://github.com" className="text-blue-400 underline">
            Github
          </a>
          .
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#contact"
            className="text-white py-2 px-4 bg-blue-500 rounded transition text-center"
          >
            Get in touch
          </a>
          <a
            href="#read-more"
            className="text-white py-2 px-4 border border-white rounded hover:bg-white hover:text-black transition text-center"
          >
            Read more →
          </a>
        </div>
      </div>
      <div className="lg:flex-[1/2] mt-8 lg:mt-0">
        <Image
          src="/assets/imgs/mock-img.jpg"
          alt="Houssam Habbat"
          height={500}
          className="rounded-lg shadow-lg mx-auto lg:mx-0"
          width={500}
        />
      </div>
    </section>
  );
};
export default DescriptionHero;
