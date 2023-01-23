import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { FunctionComponent } from "react";
const Contact:FunctionComponent = () => {

    return(
        <section className={clsx("m-[20px]", "flex", "flex-col", "content-center","items-center")}>
            <p>Build with me!</p>
           <div className={clsx("space-x-4")}>
                <FontAwesomeIcon icon={['fab','github']} size="2x" className={clsx("cursor-auto")}/>
                <FontAwesomeIcon icon={['fab','twitter']} size="2x" />
           </div>
        </section>
    )
}

export default Contact