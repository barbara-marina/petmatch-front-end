import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;

    box-shadow: 5px 0 #888888;
    background-image: linear-gradient(to top, #9bfcd6, #dffdf2);

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 80px 0;
    gap: 20px;

`;

export const Chat = styled.section`
    width: 90%;

    background-color: #ffffff44;
    border: 2px solid #007a43;
    border-radius: 15px;

    padding: 15px;
    gap: 10px;

    h1 {
        font-size: 18px;
        font-weight: 700;
        color: #007a43;

        margin-bottom: 10px;
    }
`;