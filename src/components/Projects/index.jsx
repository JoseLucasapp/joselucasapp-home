import { buttons, projects } from "../../data/translation";
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

            <a className="link-github" target="blank" href="https://github.com/JoseLucasapp?tab=repositories">{ptBr ? buttons.see_my_projects.pt : buttons.see_my_projects.eng}</a>
        </section>
    )
}

export default ProjectsComponent;