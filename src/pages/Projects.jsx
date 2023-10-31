import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import {
  templates,
  reactProject,
  backendProjects,
  tailwindCss,
  mernProject,
} from "../data";
import "../styles/pages/Projects.scss";

function Projects() {
  return (
    <main className="projects bg-light dark:bg-dark text-dark dark:text-light">
      <section className="templates">
        <h1>Templates</h1>
        <Layout>
          {templates.map((item) => (
            <ProjectCard data={item} key={item.name} />
          ))}
        </Layout>
      </section>

      <section className="tailwind-css">
        <h1>Tailwind css</h1>
        <Layout>
          {tailwindCss.map((item) => (
            <ProjectCard data={item} key={item.name} />
          ))}
        </Layout>
      </section>

      <section className="react">
        <h1>React JS</h1>
        <Layout>
          {reactProject.map((item) => (
            <ProjectCard data={item} key={item.name} />
          ))}
        </Layout>
      </section>

      <section className="backend">
        <h1>Backend + Database</h1>
        <Layout>
          {backendProjects.map((item) => (
            <ProjectCard data={item} key={item.name} />
          ))}
        </Layout>
      </section>

      <section className="mern-project">
        <h1>Mern Stack</h1>
        <Layout>
          {mernProject.map((item) => (
            <ProjectCard data={item} key={item.name} />
          ))}
        </Layout>
      </section>
    </main>
  );
}

export default Projects;
