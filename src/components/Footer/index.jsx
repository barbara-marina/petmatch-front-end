import { Container } from "./style";
import { MdOutlineMail, MdPersonOutline } from "react-icons/md";
import { IoPawOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./../../contexts/UserContext";

export default function Footer() {
    const navigate = useNavigate();
    const {userData} = useContext(UserContext);

    return (
        <Container>
            {(userData.type === "adopter") &&<MdPersonOutline color="#ffffff" size={30} onClick={() => navigate("/user")} />}
            <IoPawOutline color="#ffffff" size={30} onClick={() => navigate("/home")} />
            <MdOutlineMail color="#ffffff" size={30} onClick={() => navigate("/chats")} />
        </Container>
    );
}