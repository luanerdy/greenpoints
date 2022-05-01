import { Link } from "react-router-dom";
import { Box_input_missions } from "./styled";
import { Button_Green } from "../Button";

export const Input_Missions = ()=> {
    return(
        <Box_input_missions>
            <h1>Digite seu CEP</h1>
            <input type='text'/>

            <h2>Selecione o ponto de coleta</h2>

            <select>
                <option>São Paulo</option>
                <option>Rio de Janeiro</option>
                <option>Minas Gerais</option>
                <option>Pernambuco</option>
            </select>

            <Button_Green andress='/' text='Começar tarefa' />
            
        </Box_input_missions>
    )
}