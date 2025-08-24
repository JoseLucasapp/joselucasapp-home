import "./styles.css"

const ProjectsFragment = ({ data, ptBr, darkTheme }) => {
    return (
        <section className="projects-fragment-main">
            <a href={data.link} target="blank">
                <h1>{data.title}</h1>
                <img src={`/images/projects/${data.thumb}`} style={data.thumb === "default.png" && darkTheme ? { filter: "invert(1)" } : { filter: "invert(0)" }} alt="" />
                <p>{ptBr ? data.description.pt : data.description.eng}</p>
                <ul className="projects-fragment-list">
                    {data.stack.map(s => (
                        <li>{s}</li>
                    ))}
                </ul>
            </a>

        </section>
    )
}

export default ProjectsFragment;