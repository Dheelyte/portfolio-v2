import useSlide from "./useSlide";

export default function About () {

   const [ containerRef ] = useSlide()

    return (
        <div ref={containerRef} className="slide about" id="about">
            <h1>About me</h1>
            <p>
            My tech journey started in 2018 with Scratch programming language, and honestly? 
            I've been hooked ever since. Few months later, I started learning
            Python. I went from dragging 
            blocks of code to writing real code and building mini-projects that brought 
            my ideas to life.
            </p>
            <p>
            Fast-forward to a year later, I enrolled in the highly respected ALX Africa 12-month Software Engineering 
            program. That experience didn't just sharpen my technical skills, it turned 
            me into a problem-solver. I gained a solid foundation in core 
            software engineering principles and got to tackle real-world challenges.
            </p>
            <p>
            Since then, I've had the privilege of collaborating with brilliant minds 
            on diverse projects, working at Cowrywise Financial Technology Ltd as a 
            Backend Engineer, building a software currently used by 700K+ uers, and 
            sharing what I've learned by teaching 
            programming at various bootcamps, including one hosted by the Microsoft 
            Learn Student Ambassadors (MLSA).
            </p>
            <p>
            When I'm not building stuff, you'll probably find me taking photos 
            of beautiful skies, watching movies, or writing tech articles to help 
            others in their tech journey. Oh, and I speak English, French, and 
            Yoruba, just in case we ever need to switch it up!
            </p>
        </div>
    )
}