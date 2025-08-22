import './style.css'
import { buttons, menuOptions, phrases } from '../../data/translation'
import { useState } from 'react'
import OptionsComponent from '../../components/Options';
import HomeComponent from '../../components/Home';
import ContactComponent from '../../components/Contact';
import ResumeComponent from '../../components/Resume';

const Home = () => {
    const [ptBr, setPtBr] = useState(false);
    const [darkTheme, setDarkTheme] = useState(true);

    const [home, setHome] = useState(true);
    const [projects, setProjects] = useState(false);
    const [about, setAbout] = useState(false);
    const [contact, setContact] = useState(false);
    const [resume, setResume] = useState(false);
    const [options, setOptions] = useState(false);

    const resetMenu = () => {
        setHome(false);
        setProjects(false);
        setAbout(false);
        setContact(false);
        setResume(false);
        setOptions(false);
    }


    const handleChangePage = (engTitle) => {
        resetMenu();
        switch (engTitle) {
            case "Home":
                setHome(true);
                break;
            case "Projects":
                setProjects(true);
                break;
            case "About me":
                setAbout(true);
                break;
            case "Contact":
                setContact(true);
                break;
            case "Resume":
                setResume(true);
                break;
            case "Options":
                setOptions(true);
                break;
            default:
                setHome(true);
                break;
        }
    }


    return (
        <section className={`home ${darkTheme ? "dark" : "light"}`} id='description' style={darkTheme ? { backgroundColor: "#000000", color: "#fff" } : { color: "#000000", backgroundColor: "#fff" }}>
            <section className='top'>
                <ul>
                    {
                        menuOptions.map((option, index) => (
                            <li onClick={() => handleChangePage(option.eng)}>{ptBr ? option.pt : option.eng}</li>
                        ))
                    }
                </ul>
            </section>
            <section className='content'>
                {
                    home && (
                        <HomeComponent ptBr={ptBr} />
                    )
                }

                {
                    projects && (
                        <section>
                            Projects
                        </section>
                    )
                }

                {
                    about && (
                        <section>
                            About me
                        </section>
                    )
                }

                {
                    contact && (
                        <ContactComponent ptBr={ptBr} />
                    )
                }

                {
                    resume && (
                        <ResumeComponent ptBr={ptBr} />
                    )
                }

                {
                    options && (
                        <OptionsComponent ptBr={ptBr} setDarkTheme={setDarkTheme} setPtBr={setPtBr} darkTheme={darkTheme} />
                    )
                }
            </section>
        </section>
    )
}

export { Home }