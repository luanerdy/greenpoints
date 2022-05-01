import { Link } from "react-router-dom";
import { Button_style } from "./styles";

export const Button_Green = ({andress,text}) =>{
    return(
        <Button_style>
            <Link to={andress}>{text}</Link>
        </Button_style>
        
    )
}