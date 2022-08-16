import styled from "styled-components";

export const Container = styled.div`
    width: 120px;

    background-color: #ffffff;
    border-radius: 10px;

    display: ${props => props.disabled ? 'none' : 'flex'};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 10px 10px;
    gap: 5px;

    position: fixed;
    top: 65px;
    right: 25px;
    z-index: 2;
`;

export const Options = styled.section`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    &&:hover {
        opacity: 0.6;
    }

    p {
        font-size: 13px;
        text-align: left;
        color: #138d5c;
    }
`;

export const Bar = styled.div`
    width: 100%;
    height: 1px;

    background-color: #138d5c6e;
`;