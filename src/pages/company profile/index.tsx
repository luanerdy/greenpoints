import {
    Main_Company_profile,
    Box_company,
    Box_text_inform,
    OrderCollect

} from './styles'

import logo_company from '../../assets/images/ifood.png'

import {HeaderCompanyProfile} from '../../assets/components/header/index'

export const CompanyProfile = () =>{
    return(
        <Main_Company_profile>

            <HeaderCompanyProfile/>

            <Box_company>
                <img src={logo_company} alt="logo"/>
                <Box_text_inform>
                    <h1>Ifood</h1>
                    <p>Ajudando o planeta desde 2022</p>
                </Box_text_inform>
                
            </Box_company>

            <Box_text_inform>
                <p >
                    Sobre a empresa: O iFood é uma empresa brasileira que aproxima clientes, 
                    restaurantes e entregadores de forma simples e prática. E para proporcionar uma 
                    experiência incrível a cada um deles, nossa entrega vai muito além do delivery.
                </p>

                <h2>
                    Desafios criados por essa companhia
                </h2>
            </Box_text_inform>

            <OrderCollect>
                <p>
                    Ordenar por:
                </p>
                <select>
                    <option>Desafios com mais pontos</option>
                </select>
            </OrderCollect>
        

        </Main_Company_profile>
    )
}