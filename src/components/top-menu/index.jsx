import './style.css'

const TopMenu = () => {
    return (
        <section className='top-menu'>
            <div className='logo'>
                <h1>Joselucasapp</h1>
            </div>
            <nav className='menu'>
                <ul>
                    <li>
                        <a href='#description'>About me</a>
                    </li>
                    <li>
                        <a href='#skills'>Skills</a>
                    </li>
                    <li>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export { TopMenu }