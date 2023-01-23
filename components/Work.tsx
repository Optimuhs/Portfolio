import clsx from "clsx";
import { FunctionComponent } from "react";
import Card from "./Card";
const Work: FunctionComponent = () => {
    return(

        <section className={clsx("m-[20px]",
        )}>
            <div>
                <h2>My work</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum rerum dicta laborum hic aliquam dolores, odio molestias iure. Nemo architecto quas pariatur maiores earum, nulla quia numquam ab omnis aliquam.</p>
            </div>
            <div>
                <Card props={{projectName:"Project 1"}}/>
                <Card props={{projectName: "Project 2"}}/>
                <Card props={{projectName: "Project 3"}}/>
            </div>
        </section>
    )
}
export default Work