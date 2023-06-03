import clsx from "clsx";

import { FunctionComponent } from "react";

const AboutMe: FunctionComponent = () => {
    return(
        <section id={"#About"} className={clsx("py-10", "text-darkGrey", "px-5", "md:px-0"
        )} >
            {/* <img alt="Image of me"></img> */}
            <div>
            <h2 className={clsx("text-3xl", "font-medium", "underline" )}>Hi, I&#39;m Francisco Martinez!</h2><br/>
            <p className={clsx("text-left",)} id={"About"}>
                I&#39;m a self-taught Junior Developer
                with a passion for creating beautiful, functional websites, and applications.
                <br/>
                <br/>
                I began
                learning to code in my spare time and quickly became hooked on the challenge of building
                something from scratch. Over time, I&#39;ve developed strong skills in HTML, CSS, JavaScript,
                and React. 
                <br/>
                <br/>
                What I love most about web development is the opportunity to constantly learn and grow.
                I&#39;m always looking for new challenges and projects that will push me to my limits and 
                help me improve my skills. Whether it&#39;s building a new feature, optimizing code for 
                performance, or collaborating with other developers, I&#39;m always eager to take on new
                tasks and learn from my experiences.
                <br/>
                <br/>
                In my free time, I enjoy tinkering with new technologies, physical fitness through sports, and working on personal projects.
                
            </p>
            </div>
        </section>
    )
}

export default AboutMe