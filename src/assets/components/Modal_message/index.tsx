import { useState } from "react";
import { Link } from "react-router-dom";
import { Button_Green } from "../Button";
import { Box_modal_message, Modal_Inform_mission } from "./styles";


export const Modal_message = () => {
    
    return(
        <Box_modal_message>
            <Modal_Inform_mission>
                <h1>Mais 300 pontos para você!</h1>
                <p>
                Você está contribuindo para um planeta cada vez mais longe do aquecimento global - 
                e ganhando com isso! Acesse o menu para trocar seus pontos ou busque outros desafios.
                </p>
                <Button_Green andress="/mission_company" text="Fechar"/>
            </Modal_Inform_mission>
        </Box_modal_message>
    )
}