import styled from "styled-components"

const HeaderCompany = styled.header`
display: flex;
justify-content: center;
align-items: center;

width: 100vw;
height: 50px;

padding: 2% 1%;
text-align:center;

box-shadow: 0px 3px 2px #D3D3D3;

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
    justify-content: space-between;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    padding: 0% 6%;

    background-color: white;
    width: 92vw;
    height: 70vh;
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
`


export {
    HeaderCompany,
    Title_company,
    Image_header,
    Icon,
    Modal_Menu,
    Choice_menu

}