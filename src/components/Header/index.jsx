import { useState } from "react";
import { Container } from "./style";
import logo from "./../../assets/PetMatch1.png"
import {BiMenu} from "react-icons/bi";
import Menu from "../Menu";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";


export default function Header() {
    const [ disabled, setDisabled ] = useState(true);
    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        navigate("/");
    }

    return (
        <Container>
            <img src={logo} alt="logo"/>
            <MdOutlineLogout id="logout" color="#ffffff" size={35} onClick={logout} />
            <BiMenu id="menu" color="#ffffff" size={35} onClick={() => setDisabled(!disabled)}/>
            <Menu disabled={disabled}/>
        </Container>
    );
}