import { Icon } from "@iconify/react";
import "../styles/components/ProjectCard.scss";

function ProjectCard({ data }) {
  return (
    <div className="project-card text-dark shadow-md shadow-dark dark:shadow-light">
      <img src={data.image} alt="" className="" />
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <div className="technologies">
        {data.technologies.map((item, i) => (
          <Icon icon={item} key={i} />
        ))}
      </div>
      <div className="links">
        <span className="github">
          <a href={data.githubLink} target="_blank">
            <Icon icon="icon-park:github" className="bg-light" />
          </a>
        </span>
        {data.link && (
          <span className="visit">
            <a href={data.link} target="_blank">
              visit
              <Icon icon="fluent:arrow-left-32-filled" rotate={2} />
            </a>
          </span>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
