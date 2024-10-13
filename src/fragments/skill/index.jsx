import './style.css'

const Skill = ({ title, skills = [] }) => {
    return (
        <li className='skill-fragment'>
            <h1>{title}</h1>
            <ul>
                {skills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </li>
    )
}

export { Skill }