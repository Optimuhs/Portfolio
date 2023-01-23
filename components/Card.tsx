import clsx from "clsx";
import { FunctionComponent } from "react";
const Card: FunctionComponent = ({props}) => {
    return(
        <div className={clsx("border-amber-600 border-2", "min-h-[150px]", "m-[20px]")}>
            <img alt="Card Image/ Banner"></img> 
            <h3>{props.projectName}</h3>
            <p>Card Summary</p>
            <p></p>
        </div>
    );
}

export default Card;