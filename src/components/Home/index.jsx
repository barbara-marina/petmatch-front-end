import Header from "../Header/index";
import Footer from "../Footer/index";
import { Container } from "./style";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import OngHome from "../OngHome";
import AdopterHome from "../AdopterHome";
import { TokenContext } from "../../contexts/TokenContext";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const { userData } = useContext(UserContext);
    const { token } = useContext(TokenContext);
    const navigate = useNavigate();

    useEffect(() => !token && navigate("/"));

    return (
        <Container>
            <Header />
            {(userData.type === "ong" && <OngHome />)}
            {(userData.type === "adopter" && <AdopterHome />)}
            <Footer/>
        </Container>
    );
}