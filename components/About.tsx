import clsx from "clsx";
import { FunctionComponent } from "react";

const AboutMe: FunctionComponent = () => {
    return(
        <section className={clsx("m-[20px]",
        )}>
            <img alt="Image of me"></img>
            <div>
            <h2>About Me</h2><br/>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum laudantium tenetur quo inventore, quod id expedita enim dolorem delectus facilis consequatur, iure pariatur sed laboriosam omnis sint, sunt maiores!</p>
            </div>
        </section>
    )
}

export default AboutMe