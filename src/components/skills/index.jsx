import { Skill } from '../../fragments/skill'
import '../skills/style.css'

const Skills = () => {
    return (
        <section className='skills'>
            <div className="hard-skills">
                <h1 className='title'>Hard Skills</h1>
                <ul>

                    <Skill title='Frontend' skills={[
                        'React, React Native, Redux, NextJS, Styled Components',
                        'HTML5, CSS3, JavaScript (ES6+), TypeScript',
                        'Responsive Design & UI/UX Principles',
                    ]} />

                    <Skill title='Backend' skills={[
                        'Python, Java, C#, Golang, PHP, JavaScript...',
                        'Node.js, NestJS',
                        'Django, Flask, FastAPI',
                        'RESTful APIs & Microservices',
                        'GraphQL',
                        'Database Management',
                    ]} />

                    <Skill title='Platforms & Tools' skills={[
                        'Magento, Adobe Experience Manager (AEM)',
                        'Docker, Git & GitHub',
                        'CI/CD pipelines and Agile Methodologies',
                    ]} />

                    <Skill title='Automation & Other Technologies' skills={[
                        'Development of bots and automated workflows',
                        'SEO Optimization & Content Management',
                        'Experience with cloud platforms (AWS, Azure)',
                    ]} />
                </ul>
            </div>

            <div className="soft-skills">
                <h1 className='title'>Soft Skills</h1>

                <ul>
                    <Skill title='Problem Solving' skills={[
                        'Ability to analyze challenges and develop efficient solutions',
                    ]} />

                    <Skill title='Communication' skills={[
                        'Skilled in explaining technical ideas clearly to multidisciplinary teams',
                    ]} />

                    <Skill title='Teamwork' skills={[
                        'Experienced in collaborating within agile environments and fostering effective teamwork',
                    ]} />

                    <Skill title='Adaptability' skills={[
                        'Quick to learn new technologies and adapt to fast-changing environments',
                    ]} />

                    <Skill title='Time Management' skills={[
                        'Organized in meeting deadlines and prioritizing tasks',
                    ]} />

                    <Skill title='Creativity' skills={[
                        'Innovative approach to problem-solving and process automation',
                    ]} />

                    <Skill title='Continuous Learning' skills={[
                        'Passionate about constantly improving knowledge and skills',
                    ]} />
                </ul>

            </div>
        </section>
    )
}

export { Skills }