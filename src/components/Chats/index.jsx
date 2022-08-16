import Header from "../Header/index";
import Footer from "../Footer/index";
import { Chat, Container } from "./style";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TokenContext } from "../../contexts/TokenContext";
import api from "../../services/api";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

export default function Chats() {
    const [ chats, setChats ] = useState([]);
    const { userData } = useContext(UserContext);
    const { token } = useContext(TokenContext);
    const navigate = useNavigate();

    useEffect(() => !token && navigate("/"));

    useEffect(() => getChats(), []);
    
    function getChats() {
        api.getChats(token, userData.type)
        .then(res => {
            setChats(res.data);
        })
        .catch(err => {
            swal(err.response.data);
        })
    }

    return (
        <Container>
            <Header />
            {(chats.length===0) 
            ? <h1> Você não tem mensagem.</h1>
            : chats?.map ((chat, i) => 
                <Chat key={i}>
                    {(userData.type==="adopter") 
                    ?   <>
                            <h1>De mim para {chat.ong.username}: </h1>
                            <p>{chat.description}</p>
                        </> 
                    :   <>
                            <h1>De {chat.ong.username} para mim: </h1>
                            <p>{chat.description}</p>
                        </> 
                    }
                </Chat>
            )}
            <Footer/>
        </Container>
    );
}