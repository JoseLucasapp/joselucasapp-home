import { buttons, phrases } from "../../data/translation";
import './styles.css'

const HomeComponent = ({ ptBr }) => {
    return (
        <section className='home-page-main'>
            <section className='home-page-photo'>
                <img src="/images/main_photo.jpg" alt="" />
            </section>

            <section className='home-page-info'>
                <h1>{ptBr ? phrases.home_second.pt : phrases.home_second.eng}</h1>
                <h2>{ptBr ? phrases.home_second.pt : phrases.home_second.eng}</h2>
                <p>{ptBr ? phrases.short_description.pt : phrases.short_description.eng}</p>
                <span>{ptBr ? phrases.call_to_action.pt : phrases.call_to_action.eng}</span>

                <button className='cta-button'>{ptBr ? buttons.my_projects.pt : buttons.my_projects.eng}</button>
            </section>
        </section>
    )
}

export default HomeComponent;