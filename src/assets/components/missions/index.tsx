import {
    Box_missions,
    Unity_missions,
    Points,
    Title_missions
}from './style'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import Heart from '../../images/Heart.svg'
import Lightning from '../../images/Lightning.svg'
import garbage from '../../images/lixo.jpeg'
import garbageTwo from '../../images/lixo2.jpeg'

export const MissionsCurrent = () =>{

    let id = 0

    const [missions, setmissions] = useState([
        {value:'100',image:garbage},
        {value:'200',image:garbageTwo},
        {value:'300',image:garbageTwo},
        {value:'50',image:garbage}
    ])
    return(
        <Box_missions>
            {missions.map((item) => {
                return (
                    <Unity_missions key={id++}>
                        <img src={item.image} alt="garbage"/>
                        <Title_missions> <h2>Recicla+</h2> <img src={Heart} alt="Heart" /></Title_missions>
                        <Points>
                            <img src={Lightning} alt="Lightning" />
                            <p>{item.value} Pontos</p>
                        </Points>
                        <h1>Criado por: Ifood</h1>
                        <Link to='/mission_company'>Saber mais</Link>
                    </Unity_missions>
                )
            })}
        </Box_missions>
    )
}