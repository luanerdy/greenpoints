import styled from "styled-components";

const Button_style = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 5%;
    & a{
        background-color: var(--color-Dark-Button);
        color: white;
        text-decoration: none;
        text-align: center;
        font-size: 20px;

        padding: 3% 0%;
        margin-top: 8%;

        width: 90vw;
        border-radius: 5px;
    }
`

export {
    Button_style
}