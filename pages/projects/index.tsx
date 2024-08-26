/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";

const Projects: FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center">My Projects</h1>
      <p className="mt-4 text-center">
        Here are some of the projects I've worked on.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {[1, 2, 3, 4, 5].map((project) => (
          <div key={project} className="border p-4 rounded">
            <img
              src={`https://via.placeholder.com/300x200?text=Project+${project}`}
              alt={`Project ${project}`}
            />
            <h2 className="text-xl font-bold mt-2">Project {project}</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
