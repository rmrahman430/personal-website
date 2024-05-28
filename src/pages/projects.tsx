import React from "react";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Post Office Website",
    description: [
      "Contributed to the development of a user-friendly Post Office website as part of a group project. Specifically, designed and implemented the Node.js backend for efficient data processing and communication with a MySQL database, optimizing internal operations.",
      "Collaborated on building a dynamic and responsive website using React.js, ensuring a seamless user experience for the Post Office project.",
      "Leveraged my knowledge of CSS to contribute to the creation of a user-friendly and visually appealing interface for the Post Office website.",
    ],
    githubUrl: "https://github.com/your-username/post-office-website",
  },
  // Add another project here using the same format
  {
    title: "Face Recognition Program",
    description: [
      "Designed and developed a Python-based face recognition system with a user-friendly GUI, utilizing deep learning- based face detection (MTCNN).",
      "Leveraged machine learning and computer vision concepts to preprocess images, detect faces, and perform facial recognition.",
      "Demonstrated proficiency in Python, deep learning frameworks, image processing, and GUI development by creating a functional application that displays knowledge of AI and machine learning to recognize faces.",
    ],
    githubUrl: "https://github.com/rmrahman430/FaceRecognition", // Replace with your project repo URL
  },
  {
    title: "Hotspot Discovery & Solar Intensity Analysis", // Replace with your project title
    description: [
      "Analyzed solar flare data from the RHESSI mission to identify flare hotspots and intensities and learn about their characteristics, using R programming for data analysis and exploration.",
      "Applied R's statistical and visualization tools to uncover patterns in flare data, explore relationships between variables, and create informative visualizations.",
      "Developed clear and informative plots and maps to visualize flare hotspot distributions, solar flare intensities and share results effectively with others.",
    ],
    githubUrl: "https://github.com/rmrahman430/HeliosProject", // Replace with your project repo URL
  },
];

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {projects.map((project, index) => (
        <div
          key={project.title}
          className={`project-item bg-gray-800 text-white p-4 rounded-lg shadow border border-white ${
            index % 2 === 0 ? "animate-fade-left" : "animate-fade-right"
          } py-4 px-4 mb-8 mr-4`} // Dynamic animation class
        >
          <h1 className="font-bold text-2xl">{project.title}</h1>
          <ul className="pl-4 text-2xl pt-4">
            {project.description.map((desc) => (
              <li key={desc} className="list-disc">
                {desc}
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg flex items-center p-4" // Remove underline, add padding
            >
              <FaGithub size="2em" /> {/* Increase icon size and margin */}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
