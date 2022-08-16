import styled from "styled-components";

export const Container = styled.main`
    width: 70%;

    background-color: #ffffff;
    border-radius: 10px;

    padding: 30px;
    gap: 25px;

    display: ${props => props.disabled ? "none" : "flex"};
    flex-direction: column;

    position: fixed;
    z-index: 10;

    #close{
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }
    #add{
        position: absolute;
        bottom: 15px;
        right: 15px;
        cursor: pointer;
    }

    em {
        padding-right: 5px;
        font-weight: 700;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 7px;
    }

    section {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
`;

export const Image = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover
`;