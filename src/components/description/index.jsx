import './style.css'

const Description = () => {
    return (
        <section className='description' id='description'>
            <div className="description-data">
                <p>Hello, I am</p>
                <p>José Lucas Gonçalves Freitas</p>
                <p>Full Stack Developer</p>
            </div>
            <div className="description-image">
                <div className="image">
                    <img src={process.env.PUBLIC_URL + 'images/me.png'} alt="" />
                    <img className="second-image" src={process.env.PUBLIC_URL + 'images/rey.jpg'} alt="" />
                </div>
            </div>
        </section>

    )
}

export { Description }