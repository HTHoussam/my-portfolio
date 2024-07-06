import Image from "next/image";
import "./description-hero.css";
const DescriptionHero = () => {
  return (
    <section
      id="whoami"
      className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 p-10 bg-transparent "
    >
      <div className="lg:flex-1 flex flex-col gap-20">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-slate-50 bg-clip-text text-transparent p-4">
          Hey, I&apos;m Houssam Habbat
        </h1>
        <p className="mb-4 text-3xl text-left">
          I am a passionate Software Engineer, specialized in front-end
          development using React and TypeScript. As an advocate for web
          performance and accessibility and an evangelist for the Jamstack, I
          create amazing web applications to make the internet a better place.
          You can talk to me about RESTful APIs.
        </p>
        <p className="my-4">
          P.S. this website is open-source and available on{" "}
          <a href="https://github.com" className="text-blue-400 underline">
            Github
          </a>
          .
        </p>
        <div className="flex space-x-4">
          <a href="#contact" className=" text-white py-2 px-4  transition">
            Get in touch
          </a>
          <a
            href="#read-more"
            className="text-white py-2 px-4 border border-white rounded hover:bg-white hover:text-black transition"
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
          className="rounded-lg shadow-lg"
          width={500}
        />
      </div>
    </section>
  );
};
export default DescriptionHero;
