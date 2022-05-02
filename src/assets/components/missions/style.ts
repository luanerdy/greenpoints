import styled from "styled-components";

const Box_missions = styled.main`
    display: flex;
    justify-content: center;
    align-self: center;

    flex-wrap: wrap;
    flex-direction:row;

    margin-top: 10%;

    & img{
        width: 100%;

        margin-bottom:5%;
    }
`

const Unity_missions = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;

    width: 40%;
    margin: 5%;
    text-decoration: none;

    & h1{
        margin: 8% 0%;
    }
    & a {
        text-decoration: none;
        border-radius: 5px;
        background-color: var(--color-Dark-Button);
        color: white;

        padding: 5% 2%;
        width: 90%;

        font-size: 14px;
    }
    
`
const Title_missions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width:100%;
    & img{
        width: 18%;
        margin-top: 7%;
    }
    
    & h2{

        width: 20%;

        font-size:15px ;
    }
`
const Points = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;

    width:63%;
    padding: 1%;

    background-color: #CDC9C9;
    border-radius: 5px;

    margin-right: 34%;
    & img{
        width: 15%;
        margin-right: 5%;
        padding-top: 4%;
    }
    & p{
        font-size: 13px;
    }
`

export {
    Box_missions,
    Unity_missions,
    Points,
    Title_missions
}