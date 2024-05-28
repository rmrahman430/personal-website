import React from "react";
import "./App.css";
import HomePage from "./pages/home"; // Assuming HomePage.tsx is in the pages directory
import Header from "./components/header";
import avatar from "./img/avatar.png";
import Projects from "./pages/projects";
import Footer from "./components/footer";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

interface HomeInfoProps {
  name: string;
  bio: string; // Add bio for About Me section
  avatarUrl?: string; // Optional avatar image URL
  email: string;
  github: string;
}

function App() {
  const myInfo: HomeInfoProps = {
    name: "Rayyan Rahman",
    bio: "A passionate software engineer with a focus on [Your Specialization]. I am always eager to learn new things and take on challenging projects.",
    // Remove unnecessary props: specialization, skills, projects, linkedin
    email: "rayyanmrahman@gmail.com",
    github: "https://github.com/rmrahman430",
    avatarUrl: avatar,
  };

  return (
    <HashRouter basename="/">
      <div className="app-container d-flex flex-col min-h-screen">
        <Header title={"Portfolio"} />
        <Routes>
          {/* Wrap HomePage in a Route component */}
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<HomePage {...myInfo} />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
