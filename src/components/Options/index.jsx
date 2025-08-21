import { buttons } from "../../data/translation";
import './styles.css'

const OptionsComponent = ({ ptBr, setPtBr, setDarkTheme, darkTheme }) => {
    return (
        <section className='options-page-main'>
            <div className="options-selection">
                <p>{ptBr ? buttons.language.pt : buttons.language.eng}</p>
                <div className="options-options">
                    <p onClick={() => setPtBr(true)}>Português</p>
                    <p onClick={() => setPtBr(false)}>English</p>
                </div>
            </div>

            <div className="options-selection">
                <p>{ptBr ? buttons.theme.pt : buttons.theme.eng}</p>
                <div className="options-options">
                    <p onClick={() => setDarkTheme(false)}>{ptBr ? buttons.themes_light.pt : buttons.themes_light.eng}</p>
                    <p onClick={() => setDarkTheme(true)}>{ptBr ? buttons.themes_dark.pt : buttons.themes_dark.eng}</p>
                </div>
            </div>
        </section>
    )
}

export default OptionsComponent;