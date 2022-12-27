import { FunctionComponent } from "react";

const Card: FunctionComponent = (props) => {
    return(
        <div>
            <img alt="Card Image/ Banner"></img> 
            <h3>Card Head</h3>
            <p>Card Summary</p>
            <p>{props}</p>
        </div>
    );
}

export default Card;