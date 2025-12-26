import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>

      <div className="grid">
        <ProjectCard
          title="Job Application Tracker"
          description="React application for tracking job applications. Users can add applications, update their status, delete entries, and persist data using localStorage. Deployed live on Netlify."
          github="https://github.com/Thomas-Mer/job-tracker"
          demo="https://beautiful-boba-b4c57a.netlify.app"
        />

        <ProjectCard
          title="Business Website"
          description="Responsive one-page business website focused on clean layout and usability."
          github=""
          demo=""
        />
      </div>
    </section>
  );
}

export default Projects;
