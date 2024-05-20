// Footer.tsx
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { Link } from 'react-router-dom'; // Import Link component

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      Built with:
      <span className="flex justify-center"> {/* Maintain flexbox for centering */}
        <Link to="https://react.dev/" target="_blank" rel="noopener noreferrer" className="mr-2 ml-2"> {/* Link React icon */}
          <span className="mr-2">
            <FaReact />
          </span>
        </Link>
        <Link to="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="mr-2"> {/* Link TypeScript icon */}
          <span className="mr-2">
            <SiTypescript />
          </span>
        </Link>
        <Link to="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer" className="mr-2"> {/* Link Tailwind CSS icon */}
          <span className="mr-2">
            <SiTailwindcss />
          </span>
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
