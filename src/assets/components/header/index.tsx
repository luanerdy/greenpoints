import {
    HeaderCompany, 
    Title_company,
    Image_header,
    Icon,
    Modal_Menu,
    Choice_menu

} from './styles'

import {Link}  from 'react-router-dom'
import { useState } from 'react'

import bell from '../../images/Bell.svg'
import Menu from '../../images/Burger.svg'
import Profile from '../../images/User.svg'
import Rocket from '../../images/Rocket.svg'
import logo from '../../images/planeta-terra.png'

export const HeaderCompanyProfile = () =>{

    const [ButtonAcivate, setButtonAcrivate] = useState(true)
    return(
        <HeaderCompany>

            <Link to={'/'} style={{textDecoration:'none',display:'flex',alignItems:'center'}}> 
            <img src={logo} alt="logo" style={{width:'30px', marginRight:'10px'}} /> 
            <Title_company>Green Points</Title_company></Link>

            <Image_header>

                <Icon><Link to={"/notification"} ><img src={bell} alt="bell" /></Link></Icon> 
                <Icon onClick={()=>{ setButtonAcrivate(false) }} ><img src={Menu} alt="Menu" /></Icon>

            </Image_header> 

            {  !ButtonAcivate &&
                <Modal_Menu>

                    <Choice_menu onClick={()=>{setButtonAcrivate(true)}} ><p style={{position:'absolute', left:'-20px', fontSize: '40px',color: 'var(--color-Dark-Button)',marginLeft:'85%', paddingTop:'30%'}} >&times;</p> </Choice_menu>
                    <Choice_menu> <img src={Profile} alt='Profile'/> <p>Perfil</p> </Choice_menu>
                    <Choice_menu> <img src={Rocket} alt='Rocket' /> <p>Meus desafios</p> </Choice_menu>
                    <Choice_menu> <img src={Profile} alt='Profile'/> <p>Trocar pontos</p> </Choice_menu>
                    <Choice_menu> <img src={Rocket} alt='Rocket' /> <p>Desafios favoritos</p> </Choice_menu>
                    <Choice_menu> <img src={Profile} alt='Profile'/> <p>Notificações</p> </Choice_menu>
                    <Choice_menu> <img src={Rocket} alt='Rocket' /> <p>Ajuda</p> </Choice_menu>

                </Modal_Menu>
            }
            
                
        </HeaderCompany>
    )
}