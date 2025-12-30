import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="sectionWide" id="projects">
      <div className="container">
        <h2>Projects</h2>

        <div className="projectsGrid">
          <div className="projectBox">
            <ProjectCard
              title="Job Application Tracker"
              description="React application for tracking job applications. Users can add applications, update status, delete entries, and persist data using localStorage. Deployed live on Netlify."
              github="https://github.com/Thomas-Mer/job-tracker"
              demo="https://beautiful-boba-b4c57a.netlify.app"
            />
          </div>

          <div className="projectBox">
            <ProjectCard
              title="Business Website"
              description="Client-ready one-page business website focused on clean layout, clarity, and usability. Built with React and deployed on Netlify."
              github="https://github.com/Thomas-Mer/business-site-v2"
              demo="https://comfy-dieffenbachia-093a88.netlify.app/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
