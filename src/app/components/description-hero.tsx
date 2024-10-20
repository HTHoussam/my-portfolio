import Image from "next/image";
import ReadResumeButton from "./core/read-resume-button";
import ResumeDownloadButton from "./core/resume-download-button";
import "./description-hero.css";
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
            <ReadResumeButton />
            <ResumeDownloadButton />
          </div>
        </div>
        <p className="text-center lg:text-left my-4">
          P.S. this website is open-source and available on{" "}
          <a
            href="https://github.com/HTHoussam/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            Github
          </a>
          .
        </p>
      </div>
      <div className="lg:flex-[1/2] mt-8 lg:mt-0">
        <Image
          priority
          src="/assets/imgs/me_min.jpg"
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
