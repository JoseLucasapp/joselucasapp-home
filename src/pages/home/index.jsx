import './style.css'
import { menuOptions } from '../../data/translation'
import { useEffect, useState, useCallback } from 'react'
import OptionsComponent from '../../components/Options';
import HomeComponent from '../../components/Home';
import ContactComponent from '../../components/Contact';
import ResumeComponent from '../../components/Resume';
import ProjectsComponent from '../../components/Projects';

const Home = () => {
    const [ptBr, setPtBr] = useState(false);
    const [darkTheme, setDarkTheme] = useState(true);

    const [home, setHome] = useState(true);
    const [projects, setProjects] = useState(false);
    const [about, setAbout] = useState(false);
    const [contact, setContact] = useState(false);
    const [resume, setResume] = useState(false);
    const [options, setOptions] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const resetMenu = useCallback(() => {
        setHome(false);
        setProjects(false);
        setAbout(false);
        setContact(false);
        setResume(false);
        setOptions(false);
    }, []);

    const handleChangePage = useCallback((engTitle) => {
        resetMenu();
        switch (engTitle) {
            case 'Home': setHome(true); break;
            case 'Projects': setProjects(true); break;
            case 'About me': setAbout(true); break;
            case 'Contact': setContact(true); break;
            case 'Resume': setResume(true); break;
            case 'Options': setOptions(true); break;
            default: setHome(true); break;
        }
        setIsMenuOpen(false);
    }, [resetMenu]);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    return (
        <section
            className={`home ${darkTheme ? 'dark' : 'light'}`}
            style={darkTheme ? { backgroundColor: '#000', color: '#fff' } : { color: '#000', backgroundColor: '#fff' }}
        >
            <section className="top">
                <button
                    className="menu-toggle"
                    aria-label={ptBr ? 'Abrir menu' : 'Open menu'}
                    onClick={() => setIsMenuOpen(true)}
                >
                    Menu
                </button>

                <ul>
                    {menuOptions.map((option, index) => (
                        <li key={option.eng + index} onClick={() => handleChangePage(option.eng)}>
                            {ptBr ? option.pt : option.eng}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="content">
                {home && <HomeComponent ptBr={ptBr} />}
                {projects && <ProjectsComponent ptBr={ptBr} darkTheme={darkTheme} />}
                {about && <section>About me</section>}
                {contact && <ContactComponent ptBr={ptBr} />}
                {resume && <ResumeComponent ptBr={ptBr} />}
                {options && (
                    <OptionsComponent
                        ptBr={ptBr}
                        setDarkTheme={setDarkTheme}
                        setPtBr={setPtBr}
                        darkTheme={darkTheme}
                    />
                )}
            </section>

            <div
                className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMenuOpen(false)}
            />

            <aside className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-drawer-header">
                    <strong>{ptBr ? 'Menu' : 'Menu'}</strong>
                    <button className="mobile-drawer-close" onClick={() => setIsMenuOpen(false)}>
                        {ptBr ? 'Fechar' : 'Close'}
                    </button>
                </div>
                <ul className="mobile-menu-list">
                    {menuOptions.map((option, index) => (
                        <li key={'m-' + option.eng + index} onClick={() => handleChangePage(option.eng)}>
                            {ptBr ? option.pt : option.eng}
                        </li>
                    ))}
                </ul>
            </aside>
        </section>
    );
};

export { Home };
