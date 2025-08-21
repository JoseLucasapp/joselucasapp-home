import { buttons } from "../../data/translation";
import "./style.css";

const ContactComponent = ({ ptBr }) => {
    return (
        <section className="contact-page-main">
            <div className="contact-details">
                <h1>{ptBr ? buttons.my_contact.pt : buttons.my_contact.eng}</h1>
                <div className="line"></div>
                <ul>
                    <li><a target="blank" href="https://github.com/joselucasapp">Github</a></li>
                    <li><a target="blank" href="https://www.linkedin.com/in/jlgf524150/">Linkedin</a></li>
                    <li><a target="blank" href="https://www.instagram.com/jlucasgf">Instagram</a></li>
                    <li><a target="blank" href="mailto:jlgf.profissional@gmail.com">jlgf.profissional@gmail.com</a></li>
                </ul>
            </div>
        </section>
    )
}

export default ContactComponent;