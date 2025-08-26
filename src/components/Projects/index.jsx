import { projects } from "../../data/translation";
import ProjectsFragment from "../../fragments/projects";
import "./styles.css";

const ProjectsComponent = ({ ptBr, darkTheme }) => {
    return (
        <section className='projects-page-main'>
            <ul className="projects-main-list">
                {projects.map(project => (
                    <ProjectsFragment ptBr={ptBr} data={project} darkTheme={darkTheme} />
                ))}
            </ul>

            <a className="link-github" target="blank" href="https://github.com/JoseLucasapp?tab=repositories">See all my projects here</a>
        </section>
    )
}

export default ProjectsComponent;