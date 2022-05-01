import styled  from "styled-components";
import bell from "../../assets/images/sino.svg"


const Main_Company_profile = styled.main`
    display: flex;
    flex-direction: column;
`
const Box_company = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    
    margin: 5% 2%;

    & img{
        clip-path:circle(); 
        width:110px;

        margin-left: 5%;
    }
`
const Box_text_inform = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;

    margin-left: 6%;
    & h1{
        font-size:25px;
    }
    & h2{
        font-size: 16px;
        margin:5% 0%;
        font-weight: 700;
    }
    & p{
        margin-top: 10%;
    }
`

const OrderCollect = styled.div`
    display: flex;
    align-items: center;

    width: 80%;
    margin-left:6%;

    & p{
        margin-right: 2%;
        font-size: 15px;
    }
    & select{
        border: 1px solid #D3D3D3;
        border-radius: 2px;
        font-size: 13px;

        background-color: white;
    }
`

export {
    Box_company,
    Main_Company_profile,
    Box_text_inform,
    OrderCollect

}