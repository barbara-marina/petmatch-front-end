import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100%;

    display: ${props => props.formDisabled ? 'none' : 'flex'};
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 25px;
    z-index: 9;

`;

export const Form = styled.form`
    width: 70vw;
    max-width: 90vw;

    background-color: #ffffff;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 10px 10px;
    gap: 5px;

    position: fixed;
    z-index: 10;

    div {
        display: flex;
        justify-content: center;

        gap: 100%;

        @media (max-width: 600px) {
            gap: 20%;
        }
    }

`;

export const Input = styled.input`
    width: 95%;
    height: 40px;

    padding: 0 10px;

    border: 2px solid #003B24;    
    border-radius: 15px;
    background-color: ${props => props.disabled ? '#ffffff99' : '#ffffff'};
    color: ${props => props.disabled ? '#003B24' : '#757575'};
    
    &&::placeholder{
        font-family: 'Poppins', sans-serif;
        font-weight: 900;
        color: ${props => props.disabled ? '#003B24' : '#003B24'};
    }
`;

export const Text = styled.textarea`
    width: 95%;
    height: 100px;

    padding: 0 10px;

    border: 2px solid #003B24;    
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
    width: 100px;
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

    margin: 20px 0 10px 0;

    cursor: pointer;
    ${props => props.disabled && 'opacity: 1.5' };


    &&:hover {
        opacity: 0.8;
    }
`;