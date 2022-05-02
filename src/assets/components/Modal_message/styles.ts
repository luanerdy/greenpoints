import styled from "styled-components";



const Box_modal_message = styled.main`
    display: flex;
    
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    
    width: 100vw;
    height: 100vh;

    background-color: rgb(105,105,105,0.8);
`
const Modal_Inform_mission = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: white;

    height: 40vh;
    width: 90vw;
    margin: 0 auto;
    margin-top: 50%;

    padding: 6% 0%;

    & h1{
        font-size: 18px;
        font-weight: 700;
        margin: 10% 0%;

        padding-right: 10%;
    }
    & p{
        font-size:20px;
        width: 80%;
        margin: 10% 0%;
    }
    a{
        width: 300px;
        margin-right: 5%;
    }
`
    


export {
    Box_modal_message,
    Modal_Inform_mission
}