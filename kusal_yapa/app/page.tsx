import React from 'react';
import ProjectCard from './components/portfolio/ProjectCard';
import SkillTag from './components/portfolio/SkillTag';

const sampleProjects = [
  {
    title: 'Project One',
    description: 'This is a cool project that does amazing things.',
    url: 'https://example.com/project-one',
  },
  {
    title: 'Project Two',
    description: 'Another awesome project with great features.',
    url: 'https://example.com/project-two',
  },
];

const sampleSkills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'];

export default function HomePage() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {sampleProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">My Skills</h2>
      <div>
        {sampleSkills.map((skill) => (
          <SkillTag key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
}
