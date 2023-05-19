import clsx from "clsx";
import { FunctionComponent } from "react";

const AboutMe: FunctionComponent = () => {
    return(
        <section id={"#About"} className={clsx("py-10", "text-stone-100" 
        )} >
            {/* <img alt="Image of me"></img> */}
            <div>
            <h2 className={clsx("text-2xl", "font-medium" ,"bg-darkGrey", "px-5", "py-3")}>Who am I?</h2><br/>
            <p className={clsx("text-justify","bg-darkGrey", "p-8")} id={"About"}>
                I am <strong>Francisco Martinez</strong>, a self-taught junior web developer 
                with a passion for creating beautiful, functional websites, and applications. I started 
                learning to code in my spare time and quickly became hooked on the challenge of building
                something from scratch. Over time, I&#39;ve developed strong skills in HTML, CSS, JavaScript,
                and React. I&#39;m always pushing myself to learn more.What I love most about web development 
                is the opportunity to constantly learn and grow. I&#39;m always looking for new challenges and
                projects that will push me to my limits and help me improve my skills. Whether it&#39;s building 
                a new feature, optimizing code for performance, or collaborating with other developers, I&#39;m
                always eager to take on new tasks and learn from my experiences. In my free time, I enjoy
                tinkering with new technologies, physical fitness, and working on personal projects. I&#39;m
                 excited to continue building my skills and exploring the endless possibilities of web development. </p>

            </div>
        </section>
    )
}

export default AboutMe