import { tProject } from '../../types';
import { ProjectCard } from './ProjectCard';

const projects: tProject[] = [
  {
    id: 'id01',
    name: 'Ditt Innspill',
    date: 'jun2024',
    links: {
      github: 'https://github.com/chrisbekk/ditt-innspill',
    },
  },
  {
    id: 'id02',
    name: 'Holidaze',
    date: 'jun2024',
    links: {
      github: 'https://github.com/chrisbekk/project-exam-2',
    },
  },
  {
    id: 'id03',
    name: 'Digital Market',
    date: 'mar2024',
    links: {
      github: 'https://github.com/chrisbekk/e-commerce',
    },
  },
  {
    id: 'id04',
    name: 'Social Media Client',
    date: 'nov2023',
    links: {
      github: 'https://github.com/chrisbekk/social-media-client',
    },
  },
];

export const Projects = () => {
  return (
    <div className="px-5 ">
      <h1 className="tracking-wide text-4xl font-thin pb-8">./projects</h1>
      <div className=" px-5 pt-32 h-full">
        {projects.map(project => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};
