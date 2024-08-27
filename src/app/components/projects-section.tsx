"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  images: string[];
  url: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description of project 1",
    images: [
      "/assets/imgs/linkedin-icon.png",
      "/assets/imgs/linkedin-icon.png",
      "/assets/imgs/linkedin-icon.png",
    ],
    url: "https://project1.com",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    images: [
      "/assets/imgs/linkedin-icon.png",
      "/assets/imgs/linkedin-icon.png",
      "/assets/imgs/linkedin-icon.png",
    ],
    url: "https://project1.com",
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    images: [
      "/assets/imgs/linkedin-icon.png",
      "/assets/imgs/linkedin-icon.png",
      "/assets/imgs/linkedin-icon.png",
    ],
    url: "https://project1.com",
  },
];

export default function ProjectsSection() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-1 h-48 w-full">
              {project.images.slice(0, 4).map((image, imgIndex) => (
                <div key={imgIndex} className={`relative overflow-hidden`}>
                  <div
                    className="absolute inset-0 transition-all duration-300"
                    style={{
                      zIndex: hoveredImage === imgIndex ? 10 : 0,
                      transform:
                        hoveredImage === imgIndex ? "scale(1.1)" : "scale(1)",
                    }}
                    onMouseEnter={() => setHoveredImage(imgIndex)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} image ${imgIndex + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>
              <Link
                href={project.url}
                className="text-sm text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
