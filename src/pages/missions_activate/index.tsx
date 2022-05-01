import { Link } from "react-router-dom";

import {HeaderGlobal} from '../../assets/components/header/index'
import { Input_Missions } from "../../assets/components/input_missions";
import { MissionsCurrent } from "../../assets/components/missions";
import {
    BoxInform,
    Detach,
    Points
}from './styles'
import Heart from '../../assets/images/Heart.svg'
import right from '../../assets/images/right.svg'
import Lightning from '../../assets/images/Lightning.svg'

export const Missions_Activate = () =>{
    return(
        <>
            <HeaderGlobal/>
            <BoxInform>

                <h1>Entregar 3 kg de plástico</h1>
                <h2>Descrição</h2>

                <img src={Heart} alt="Heart" />

                <p>
                Quisque amet, Praesent sodales. placerat vitae lobortis, 
                maximus Ut fringilla nisi nulla, dignissim, Sed elit. 
                quis vel Donec risus tortor. Ut in nec non. sodales. est. Praesent 
                </p>

                <h2>Como você vai impactar o planeta</h2>
            </BoxInform>

            <Detach>
                    <img src={right} alt="right"/>
                    <h3>-0,2kg de CO2 na atmosfera</h3>
            </Detach>

            <BoxInform>
                <h2>O que você precisa fazer</h2>
            </BoxInform>

            <Detach>
                    <img src={right} alt="right"/>
                    <h3>Entregar os itens no posto de coleta mais próximo</h3>
            </Detach>
            <Detach>
                    <img src={right} alt="right"/>
                    <h3>Comprovar a entrega com o código recebido</h3>
            </Detach>

            <BoxInform>
                <h2>O que você vai ganhar</h2>
            </BoxInform>
            <Detach>
                    <img src={right} alt="right"/>
                    <h3>Um planeta longe do aquecimento global</h3>
            </Detach>
            <Points>
                <img src={Lightning} alt="Lightning" />
                <p>300 Pontos</p>
            </Points>

            <BoxInform>
                <h2>Onde você vai entregar</h2>
            </BoxInform>

            <Input_Missions/>

            <MissionsCurrent/>


        </>
    )
}