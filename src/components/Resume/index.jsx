import { useState } from "react";
import { resume } from "../../data/translation";
import "./style.css"

const ResumeComponent = ({ ptBr }) => {
    const [openEducation, setOpenEducation] = useState(false);
    const [openExperience, setOpenExperience] = useState(false);
    const [openSkils, setOpenSkills] = useState(false);
    return (
        <section className="resume-main">
            <section className="resume-download">
                <a href="/docs/br.pdf" download={true}>
                    Baixar versão em português
                </a>

                <a href="/docs/eng.pdf" download={true}>
                    Download english version
                </a>
            </section>

            <section className="resume-details">
                <h1 onClick={() => setOpenEducation(!openEducation)}>{ptBr ? "Educação" : "Education"}</h1>
                {
                    openEducation && (
                        <ul>
                            {resume.education.map(ed =>
                                ptBr ? (
                                    <li>
                                        <h2>{ed.pt.course}</h2>
                                        <h3>{ed.pt.university} - {ed.pt.location}</h3>
                                        <p>{ed.pt.start} - {ed.pt.end}</p>
                                    </li>
                                ) : (
                                    <li>
                                        <h2>{ed.eng.course}</h2>
                                        <h3>{ed.eng.university} - {ed.eng.location}</h3>
                                        <p>{ed.eng.start} - {ed.eng.end}</p>
                                    </li>
                                )
                            )}
                        </ul>
                    )
                }

                <h1 onClick={() => setOpenExperience(!openExperience)}>{ptBr ? "Experiência" : "Experience"}</h1>
                {
                    openExperience && (
                        <ul className="experience">
                            {resume.experience.map(ex =>
                                ptBr ? (
                                    <li>
                                        <h2>{ex.pt.jobTitle}</h2>
                                        <h3>{ex.pt.company} - {ex.pt.location}</h3>
                                        <p>{ex.pt.start} - {ex.pt.end}</p>
                                        <p>{ex.pt.description}</p>
                                    </li>
                                ) : (
                                    <li>
                                        <h2>{ex.eng.jobTitle}</h2>
                                        <h3>{ex.eng.company} - {ex.eng.location}</h3>
                                        <p>{ex.eng.start} - {ex.eng.end}</p>
                                        <p>{ex.eng.description}</p>
                                    </li>
                                )
                            )}
                        </ul>
                    )
                }

                <h1 onClick={() => setOpenSkills(!openSkils)}>{ptBr ? "Habilidades" : "Skills"}</h1>
                {
                    openSkils && (
                        <div className="skills">
                            {resume.skills.map(sk =>
                            (
                                <h3> {sk}</h3>
                            )
                            )}
                        </div>
                    )
                }

            </section>
        </section>
    )
}

export default ResumeComponent;