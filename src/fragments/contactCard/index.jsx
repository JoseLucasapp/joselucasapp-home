import './style.css'

const ContactCard = ({ title, content, link }) => {
    return (
        <li className="contact-card">
            <a href={link} target="_blank" rel="noreferrer">
                {title}
            </a>
        </li>
    )
}

export { ContactCard }