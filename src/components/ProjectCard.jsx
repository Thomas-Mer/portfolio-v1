function ProjectCard({ title, description, github, demo }) {
  return (
    <div className="card">
      <h3 className="cardTitle">{title}</h3>
      <p className="cardDesc">{description}</p>

      <div className="cardLinks">
        {github && (
          <a className="link" href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {demo && (
          <a className="link" href={demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
