import { ProjectCard } from "../../fragments/projectCard"
import "./style.css"
const Zumbra = () => {
    const desc = "Zumbra is a lightweight, expressive programming language designed and built entirely from scratch. It features a fully custom lexer, parser, compiler, and virtual machine, providing an educational yet powerful platform to explore language design concepts. Zumbra supports basic types like integers, floats, booleans, and strings, control flow structures like if and for, and logical operators with proper short-circuit evaluation. Designed for clarity, simplicity, and extensibility, Zumbra is the perfect playground for learning how modern programming languages work internally."

    return (
        <div className="mainZumbra" id="zumbra">
            <h1 className="title">Zumbra — A New Programming Language Built from Scratch</h1>

            <ul>
                <ProjectCard
                    title={"Zumbra"}
                    link={"https://zumbra-web.vercel.app"}
                    content={desc}
                    logo={"zumbra.png"} />

                <ProjectCard
                    title={"Zumbra VS Code Extension"}
                    link={"https://marketplace.visualstudio.com/items/?itemName=joselucasapp.zumbra-lang-support"}
                    logo={"zumbra.png"}
                    content={"This extension provides support for the ZUMBRA programming language in Visual Studio Code."}
                />
            </ul>
        </div>
    )
}

export default Zumbra