import styled from "styled-components";

export const Container = styled.main`
    width: 70%;
    height: 75%;

    margin-top: 60px;
    padding: 30px;
    gap: 30px;

    background-color: #ffffff;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    top: 25px;
    z-index: 9;

    p{
        color: #777676;
    }

    div {
        width: 100%;
        
        display: flex;
        flex-direction: column;

        gap: 7px;

        p {
            color: #000000;
        }

        em {
            font-weight: 700;
            padding-right: 5px;
        }
    }

    svg {
        position: absolute;
        bottom:60px;
        right: 15px;
        cursor: pointer;
    }

    #left, #right {
        position:fixed;
        top: 37%;
        cursor: pointer;
        z-index: 15;
    }

    #left {
        left: 15%;
    }

    #right {
        right: 15%;
    }
`;

export const Image = styled.img`
    width: 80%;
    height: 65%;

    object-fit: contain;

    @media (max-width: 600px ) {
        width: 70%;
        height: 65%;

    }
`;