import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px 25px;
    gap: 20px;

    h1 {
        position: fixed;
        top: 100px;

        font-size: 16px;
        text-align: center;
        color: #408d6e;
        word-wrap: break-word;
    }

    svg {
        position: fixed;
        bottom: 25px;
        right: 25px;
        z-index: 5px;

        cursor: pointer;

        @media (max-width: 600px) {
            bottom: 85px;
        }
    }

    #left, #right {
        position:fixed;
        top: 50%;
        cursor: pointer;
        z-index: 15;
    }

    #left {
        left: 8%;
    }

    #right {
        right: 8%;
    }

    p {
        width: 100%;
        
    }

    em {
        font-weight: 700;
    }
`;

export const Button = styled.button` 
    width: 100px;
    height: 40px;

    border: none;    
    border-radius: 15px;
    background-color: #003B24;

    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    color: #ffffff;
    
    display:flex;
    justify-content: center;
    align-items: center;

    margin: 20px 0 10px 0;

    position: fixed;
    bottom: 1%;

    @media (max-width: 600px) {
        z-index: 20;
        position: fixed;
        bottom: 12%;
    }

    cursor: pointer;

    &&:hover {
        opacity: 0.8;
    }

`;