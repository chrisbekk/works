import { tProject } from '../../types';

export const ProjectCard = ({ id, name, date, links }: tProject) => {
  return (
    <div className="hover:cursor-pointer border mb-5 border-custom_cream font-jetbrains py-3 font-thin text-lg">
      <a href={links.github} target="_blank">
        <div className="pl-3 sm:grid grid-cols-3 text-wrap">
          <div className="hidden sm:flex items-center gap-1">
            <img src="/id.svg" />
            <p>{id}</p>
          </div>

          <p className="hidden sm:block">{date}</p>
          <p className="text-sm xs:text-base">{name}</p>
        </div>
      </a>
    </div>
  );
};
