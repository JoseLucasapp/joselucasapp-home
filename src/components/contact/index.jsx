import { ContactCard } from '../../fragments/contactCard'
import './style.css'

const Contact = () => {
    return (
        <section className="contact" id='contact'>
            <h1 className="title">Contact me</h1>
            <p className="description">Your message is important to me, and I'll get back to you as soon as possible. Let's build something amazing together!</p>
            <ul>
                <ContactCard title="LinkedIn" content="This is my linkedin profile" link="https://www.linkedin.com/in/jlgf524150/" />
                <ContactCard title="Github" content="This is my Github profile" link="https://github.com/joselucasapp" />
                <ContactCard title="Email" content="This is my email" link="mailto:jlgf.profissional@gmail.com" />
            </ul>
        </section>
    )
}

export { Contact }