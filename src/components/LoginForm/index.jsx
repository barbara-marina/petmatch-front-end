import { useContext, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, Input, Logo, Foward, Welcome } from './style';
import {ThreeDots} from "react-loader-spinner";
import logo from "../../assets/logo_PetMatch.png";
import api from '../../services/api';

import swal from 'sweetalert';
import { TokenContext } from '../../contexts/TokenContext';
import { UserContext } from '../../contexts/UserContext';

export default function LoginForm() {
    const {setToken} = useContext(TokenContext);
    const {setUserData} = useContext(UserContext);
    const { type } = useParams();
    const navigate = useNavigate();
    const [ loginData, setLoginData ] = useState({
        email: "", 
        password: "", 
        type: type
    });
    const [ disabled , setDisabled ] = useState(false);

    function login(e) {    
        e.preventDefault();
        setDisabled(true);

        api.loginUser(loginData).then(res => {
            localStorage.setItem("token", res.data);
            localStorage.setItem("userData", JSON.stringify({type}));
            setToken(res.data);
            setUserData({type});
            setDisabled(false);
            navigate(`/home`);
        }).catch(err => {
            swal(err.response.data);
            setDisabled(false);
        });

    }
    
    return (
        <Container>
            <Logo src={logo}/>

            <Welcome>
                {(type==="ong") ? 
                "Bem-vind@ ao PetMatch. Parabéns pela iniciativa de resgatar os bichinhos <3" : 
                "Bem-vind@ ao PetMatch. Parabéns pela iniciativa de oferecer um lar e muito amor aos bichinhos <3"}
            </Welcome>

            <Form onSubmit={login}>
                <Input required type="email" placeholder="E-mail" value={loginData.email} 
                onChange={e => setLoginData({...loginData, email: e.target.value})} 
                pattern="^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$" 
                title="Digite um endereço de email válido." disabled={disabled} />
                
                <Input required type="password" placeholder="Senha" value={loginData.password} 
                onChange={e => setLoginData({...loginData, password: e.target.value})} 
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" disabled={disabled}
                title="Mínimo de 8 caracteres e pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número" />
                
                <Button type='submit' disabled={disabled}>
                    {disabled ? 
                    <ThreeDots color="#ffffff" height={20} width={50} /> : 
                    "Entrar"}
                </Button>
            </Form>
            
            <Foward to={`/sign-up/${type}`} disabled={disabled}>Não possui uma conta? Registre-se!</Foward>
            <Foward to="/" disabled={disabled}>
                {(type==="ong") ? "Ops! Cheguei aqui por engano. Quero adotar." : "Ops! Cheguei aqui por engano. Sou de uma ONG."}
            </Foward>
        </Container>
    );
}