import { AboutMe } from '../../components/about-me'
import { Description } from '../../components/description'
import { TopMenu } from '../../components/top-menu'
import { Skills } from '../../components/skills'
import './style.css'
import { Contact } from '../../components/contact'
import { Footer } from '../../components/footer'

const Home = () => {
    return (
        <div className="home" id='description'>
            <TopMenu />
            <Description />
            <AboutMe />
            <Skills />
            <Contact />
            <Footer />
        </div>
    )
}

export { Home }