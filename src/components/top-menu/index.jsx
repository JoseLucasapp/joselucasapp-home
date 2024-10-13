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
                        <a href='#'>Projects</a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/jlgf524150/'>Contact</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export { TopMenu }