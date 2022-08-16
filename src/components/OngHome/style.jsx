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
`;