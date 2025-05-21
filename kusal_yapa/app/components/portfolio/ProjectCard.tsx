import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, url }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition cursor-pointer">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mt-2 block">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
