import "./style.css"

const ProjectCard = ({ title, link, content, logo = null, labels = [], invert = false }) => {
    if (logo == null) {
        logo = "default.png"
    }
    return (
        <li className="project-card">
            <a href={link} target="_blank" rel="noreferrer">
                <img className={logo == "default.png" || invert ? "default-logo" : ""} src={process.env.PUBLIC_URL + "/images/projects/" + logo} alt={title} />
                <div>
                    <h1>{title}</h1>
                    <p>{content}</p>

                    <ul>
                        {labels.map((label, index) => <li key={index}>{label}</li>)}
                    </ul>
                </div>

            </a>
        </li>
    )
}

export { ProjectCard }