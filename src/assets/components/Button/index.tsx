import { Link } from "react-router-dom";
import { Button_style } from "./styles";

export const Button_Green = (props: {andress: string, text: string}) =>{
    const {andress, text} = props;

    return(
        <Button_style>
            <Link to={andress}>{text}</Link>
        </Button_style>

    )
}