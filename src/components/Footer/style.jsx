import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 60px;

    box-shadow: 5px 0 0 0 #3c3c3c;
    background-color: #12C77F;

    display: none;
    justify-content: space-between;
    align-items: center;

    padding: 0 25px;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 20;

    @media (max-width: 600px) {
        display: flex;
    }

    svg {
        cursor: pointer;
        
        &&:hover {
            opacity: 0.6;
        }
    }

`;