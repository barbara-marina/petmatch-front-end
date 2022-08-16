import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;

    background-image: linear-gradient(to top, #307A5D, #12C77F, #16FA9F, #12C77F, #307A5D);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    label {
        width: 90%;

        padding: 0 10px;

        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-weight: 700;

        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const Button = styled.button` 
    width: 300px;
    max-width: 90vw;
    height: 40px;

    border: none;    
    border-radius: 15px;
    background-color: #003b2499;

    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    color: #ffffff;
    
    display:flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    ${props => props.disabled && 'opacity: 1.5' };


    &&:hover {
        opacity: 0.8;
    }
`;

export const Logo = styled.img`
    width: 300px;
    max-width: 95vw;
    height: 300px;
    max-height: 95vw;

    object-fit: cover;
`;