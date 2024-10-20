import { ProjectCard } from "../../fragments/projectCard"
import "./style.css"

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h1 className="title">Projects</h1>
            <ul>
                <ProjectCard title="Boot Buddy" link="https://github.com/joselucasapp/Boot-Buddy" content="Boot Buddy is an app that automatically launches your preferred applications when your system boots up. Simplify your workflow with customizable settings, a user-friendly interface, and minimal system impact. Compatible with Windows, macOS, and Linux." logo="boot-buddy.png" labels={["Python"]} />

                <ProjectCard title="Who unfollow me on github" link="https://github.com/JoseLucasapp/who-unfollow-me-github" content="This app is a Python script that uses web scraping and multithreading to identify GitHub users you don't follow and users who don't follow you back. This bot helps you manage your GitHub follower relationships efficiently." labels={["Python", "Selenium", "WebScraping"]} />

                <ProjectCard title="Coin Game" link="https://github.com/JoseLucasapp/coin-game" content="Welcome to our Heads or Tails game! This simple yet exciting game lets you challenge the computer in a classic coin flip. Just choose heads or tails and test your luck. Will you guess correctly and win? It's easy to play and perfect for a quick fun break. Try your luck now and see if fortune favors you!" labels={["HTML", "CSS", "JavaScript"]} logo="coin-game.png" invert />

                <ProjectCard title="School API" link="https://github.com/JoseLucasapp/school-api" content="This project was developed to enhance my knowledge of TypeScript and Swagger. The API provides a simple yet efficient way to organize students and staff across multiple schools. It features a JWT-based login system, allowing multiple schools to use the platform with secure authentication. The system distinguishes between roles (e.g., teachers and students), granting access to specialized routes based on the user’s role." labels={["NodeJS", "Express", "MongoDB", "TypeScript", "Swagger"]} />
            </ul>
        </section>
    )
}

export { Projects }