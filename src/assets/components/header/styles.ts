import styled from "styled-components"

const HeaderCompany = styled.header`

position: fixed;
top: 0;
left: 50%;
transform: translateX(-50%);

z-index: 100;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

width: 100vw;
height: 70px;

padding: 2% 1%;
text-align:center;

box-shadow: 0px 3px 2px #D3D3D3;
transition: 2s;

background-color: #fff;

`
const Title_company = styled.h1`
color: var(--color-Dark-Button);
`
const Image_header = styled.div`
display: flex;
justify-content: center;

margin-left: 40%;
`
const Icon = styled.div`
    margin-right: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`

//Modal Menu
const Modal_Menu = styled.div`
    display: flex;
    flex-direction: column;

    margin: 5% 2%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    padding: 0% 6%;

    background-color: white;
    width: 92vw;
    height: 150vh;
`
const Choice_menu = styled.div`
    display: flex;
    align-items: center;
    text-align: left;

    margin-right: 50%;
    padding-bottom: 2%;

    width: 100vw;

    & img{
        width: 30px;
        margin-right: 5%;
    }
    & p{
        font-size: 18px;
    }
    margin-bottom: 10%;
`


export {
    HeaderCompany,
    Title_company,
    Image_header,
    Icon,
    Modal_Menu,
    Choice_menu

}