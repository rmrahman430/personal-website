// Footer.tsx
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { Link } from 'react-router-dom'; // Import Link component

const Footer: React.FC = () => {
  return (
    <footer className=" py-2 absolute inset-x-0 bottom-0 h-16 bg-gray-800 text-white text-center">
      Built with:
      <span className="flex items-center justify-center flex-wrap py-1"> {/* Maintain flexbox for centering */}
        <Link to="https://react.dev/" target="_blank" rel="noopener noreferrer" className="mr-2 ml-2"> {/* Link React icon */}
          <span className="">
            <FaReact />
          </span>
        </Link>
        <Link to="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="mr-2"> {/* Link TypeScript icon */}
          <span className="">
            <SiTypescript />
          </span>
        </Link>
        <Link to="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer" className="mr-2"> {/* Link Tailwind CSS icon */}
          <span className="">
            <SiTailwindcss />
          </span>
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
