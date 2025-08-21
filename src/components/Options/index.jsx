import { buttons } from "../../data/translation";
import './styles.css'

const OptionsComponent = ({ ptBr, setPtBr, setDarkTheme, darkTheme }) => {
    return (
        <section className='options-page-main'>
            <div className="options-selection">
                <p>{ptBr ? buttons.language.pt : buttons.language.eng}</p>
                <div className="options-options">
                    <p style={ptBr ? { opacity: 1 } : { opacity: 0.5 }} onClick={() => setPtBr(true)}>Português</p>
                    <p style={ptBr ? { opacity: 0.5 } : { opacity: 1 }} onClick={() => setPtBr(false)}>English</p>
                </div>
            </div>
            <div className="options-selection">
                <p>{ptBr ? buttons.theme.pt : buttons.theme.eng}</p>
                <div className="options-options">
                    <p style={darkTheme ? { opacity: 0.5 } : { opacity: 1 }} onClick={() => setDarkTheme(false)}>{ptBr ? buttons.themes_light.pt : buttons.themes_light.eng}</p>
                    <p style={darkTheme ? { opacity: 1 } : { opacity: 0.5 }} onClick={() => setDarkTheme(true)}>{ptBr ? buttons.themes_dark.pt : buttons.themes_dark.eng}</p>
                </div>
            </div>
        </section>
    )
}

export default OptionsComponent;