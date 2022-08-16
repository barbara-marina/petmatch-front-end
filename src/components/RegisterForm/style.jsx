import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    
    background-image: linear-gradient(to top, #307A5D, #12C77F, #16FA9F, #12C77F, #307A5D);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
`;

export const Form = styled.form`
    width: 350px;
    max-width: 95vw;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 12px;
`;

export const Input = styled.input`
    width: 100%;
    min-width: 95%;
    height: 40px;

    padding: 0 10px;

    border: none;    
    border-radius: 15px;
    background-color: ${props => props.disabled ? '#ffffff99' : '#ffffff'};
    color: ${props => props.disabled ? '#003B24' : '#757575'};
    
    &&::placeholder{
        font-family: 'Poppins', sans-serif;
        font-weight: 900;
        color: ${props => props.disabled ? '#003B24' : '#003B24'};
    }
`;

export const Button = styled.button` 
    width: 100%;
    height: 40px;

    border: none;    
    border-radius: 15px;
    background-color: ${props => props.disabled ? '#003b2499;' : '#003B24'};

    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    color: #ffffff;
    
    display:flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 10px;

    cursor: pointer;
    ${props => props.disabled && 'opacity: 1.5' };


    &&:hover {
        opacity: 0.8;
    }
`;

export const Foward = styled(Link)`
    padding: 0 10px;
    
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    word-break: break-all;

    color: #ffffff;

    margin-bottom: 10px;

    cursor: pointer;

    &&:hover {
        opacity: 0.7;
    }
`;

export const Logo = styled.img`
    width: 350px;
    max-width: 95vw;
    height: 350px;
    max-height: 95vw;

    object-fit: cover;
`;

export const Welcome = styled.h1`
    width: 350px;
    max-width: 95vw;

    color: #155c41;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-align: center;
    word-wrap: break-word;
    
    display:flex;
    justify-content: center;
    align-items: center;
`;