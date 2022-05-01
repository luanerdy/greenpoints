import styled from "styled-components";


const BoxInform = styled.main`
    display: flex;
    flex-direction: column;
    text-align: left;

    padding: 4%;
    & h1 {
        font-weight: 700;
        font-size: 23px;

        margin: 10% 0%;
    }
    & h2{
        font-weight: 700;
        font-size: 18px;
    }
    & img{
        position: absolute;
        right: 0;
        top: 24%;

        margin-right: 7%;
        width:8%;
    }
    & p{
        margin: 15% 0%;
    }
`
const Detach = styled.div`
    display: flex;

    & img{
        display:flex;
        width: 4%;
        height: 25px;

        margin: 4%;
    }
    & h3{
        margin-top: 5.5%;
    }
`

const Points = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;

    width:63%;
    padding: 1%;

    margin-left: -7%;
    & img{
        width: 13%;
        margin-right: 5%;
        padding-top: 4%;
    }
    & p{
        font-size: 26px;
        margin-top: 5%;

        color: var(--color-Dark-Button);
    }
`

export {
    BoxInform,
    Detach,
    Points
}