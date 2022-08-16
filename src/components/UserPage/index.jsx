import Header from "../Header/index";
import Footer from "../Footer/index";
import { Container } from "./style";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import AdopterUser from "../AdopterUser";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../contexts/TokenContext";

export default function UserPage() {

    const { userData } = useContext(UserContext);
    const { token } = useContext(TokenContext);
    const navigate = useNavigate();

    useEffect(() => !token && navigate("/"));
    
    return (
        <Container>
            <Header />
            {(userData.type === "adopter" && <AdopterUser/>)}
            <Footer/>
        </Container>
    );
}