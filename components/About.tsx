import clsx from "clsx";
import { FunctionComponent } from "react";

const AboutMe: FunctionComponent = () => {
    return(
        <section className={clsx("md:w-[70%] md:p-[2rem] lg:flex lg:flex-row lg:space-x-5")}>
            <h2>About Me</h2><br/>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum laudantium tenetur quo inventore, quod id expedita enim dolorem delectus facilis consequatur, iure pariatur sed laboriosam omnis sint, sunt maiores!</p>
        </section>
    )
}

export default AboutMe