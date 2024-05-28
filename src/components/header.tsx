import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header bg-white-800 text-white px-4 py-12 flex items-center justify-between text-center ">
      <svg
        className="header-shape"
        width="150"
        height="50"
        viewBox="0 0 150 50"
      >
        <rect
          x="0"
          y="0"
          width="150"
          height="50"
          fill="transparent"
          stroke="white"
          stroke-width="2"
          rx="10"
          ry="10"
        ></rect>
        <text
          x="50%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          fill="white"
          className="text-2xl font-bold"
        >
          Portfolio
        </text>
      </svg>
      <nav className="flex space-x-4">
        {" "}
        {/* Navigation container */}
        <ul className="flex space-x-4">
          {" "}
          {/* List for links */}
          <li>
            <NavLink to="/home" className="text-white-300 hover:underline flex">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Projects"
              className="text-white-300 hover:underline flex"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className="text-white-300 hover:underline flex"
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
