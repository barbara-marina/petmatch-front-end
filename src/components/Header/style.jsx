import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 60px;
    
    box-shadow: 0 0 5px 0 #3c3c3c;
    background-color: #12C77F;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 25px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;

    img {
        width: 40px;
        height: 40px;
    }
    
    svg {
        cursor: pointer;
    }

    #menu {
        display: flex;

        @media (max-width: 600px) {
            display: none;
        }
    }

    #logout {
        display: none;

        @media (max-width: 600px) {
            display: flex;
        }
    }
`;