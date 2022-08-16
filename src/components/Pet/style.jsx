import styled from "styled-components";

export const Container = styled.main`
    width: 80%;

    padding: 15px;
    gap: 5px;

    background-color: ${props => props.isAdopted ? "#ade77e60" : "#ff9e9e6e"};
    border: 1.5px solid #408d6e;
    border-radius: 15px;

    display: flex;
    flex-direction: column;

    position: relative;

    em {
        font-weight: 700;
    }

    svg {
        position: absolute !important;
        top: 15px;
        right: 15px;
        cursor: pointer;
        z-index: 9;
    }
`;