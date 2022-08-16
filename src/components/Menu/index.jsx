
import { Bar, Container, Options } from "./style";
import { MdOutlineMail, MdOutlineLogout, MdPersonOutline } from "react-icons/md";
import { IoPawOutline } from "react-icons/io5";
import { useContext } from "react";
import { UserContext} from "./../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Menu({disabled}) {
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        navigate("/");
    }

    return (
        <Container disabled={disabled}>
            {(userData.type === "adopter") ? 
                <>
                    <Options onClick={() => navigate("/user")}>
                        <MdPersonOutline size={20} color="#138d5c"/>
                        <p> Meu perfil </p>
                    </Options>
                    <Bar />
                </>
                : <></>
            }
    
            <Options onClick={() => navigate("/home")}>
                <IoPawOutline size={20} color="#138d5c"/>
                <p> Pets </p>
            </Options>
            <Bar />

            <Options onClick={() => navigate("/chats")}>
                <MdOutlineMail size={20} color="#138d5c"/>
                <p> Mensagens </p>
            </Options>
            <Bar />
            <Options onClick={logout}>
                <MdOutlineLogout size={20} color="#138d5c"/>
                <p> Sair </p>
            </Options>
        </Container>
    );
}