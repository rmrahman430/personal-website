// projects.jsx

import React from 'react';

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">  <h2>Projects</h2>
      <div className="project-item bg-gray-200 p-4 rounded shadow">
        <h3>Project Name (Replace with your project name)</h3>
        <ul>
          <li className="list-disc pl-4">Bullet point detail 1 (Replace with your detail)</li>
          <li className="list-disc pl-4">Bullet point detail 2 (Replace with your detail)</li>
          <li className="list-disc pl-4">Bullet point detail 3 (Replace with your detail)</li>
        </ul>
      </div>
      {/* Add more project-item divs for additional projects */}
    </div>
  );
};

export default Projects
