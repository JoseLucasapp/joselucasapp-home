import { AboutMe } from '../../components/about-me'
import { Description } from '../../components/description'
import { TopMenu } from '../../components/top-menu'
import './style.css'

const Home = () => {
    return (
        <div className="home">
            <TopMenu />
            <Description />
            <h1>Em desenvolvimento...</h1>
        </div>
    )
}

export { Home }