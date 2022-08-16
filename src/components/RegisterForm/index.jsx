import { useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, Input, Logo, Foward, Welcome } from './style';
import {ThreeDots} from "react-loader-spinner";
import logo from "../../assets/logo_PetMatch.png";
import api from '../../services/api';

import swal from 'sweetalert';

export default function RegisterForm() {
    const { type } = useParams();
    const navigate = useNavigate();
    const [ registerData, setRegisterData ] = useState({
        username: "",
        email: "", 
        password: "",
        passwordConfirm: "",
        type: type
    });
    const [ disabled , setDisabled ] = useState(false);

    function register(e) {    
        e.preventDefault();
        setDisabled(true);

        api.registerUser(registerData).then(() => {
            setDisabled(false);
            navigate(`/sign-in/${type}`);
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

            <Form onSubmit={register}>
            <Input required type="text" placeholder="Usuário" value={registerData.username} 
                onChange={e => setRegisterData({...registerData, username: e.target.value})}
                disabled={disabled} />

                <Input required type="email" placeholder="E-mail" value={registerData.email} 
                onChange={e => setRegisterData({...registerData, email: e.target.value})} 
                pattern="^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$" 
                title="Digite um endereço de email válido." disabled={disabled} />

                <Input required type="password" placeholder="Senha" value={registerData.password} 
                onChange={e => setRegisterData({...registerData, password: e.target.value})} 
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" disabled={disabled}
                title="Mínimo de 8 caracteres e pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número" />
                
                <Input required type="password" placeholder="Confirme a senha" value={registerData.passwordConfirm} 
                onChange={e => setRegisterData({...registerData, passwordConfirm: e.target.value})} 
                pattern={registerData.password} disabled={disabled}
                title="Deve ser igual a senha colocada acima." />
                
                <Button type='submit' disabled={disabled}>
                    {disabled ? 
                    <ThreeDots color="#ffffff" height={20} width={50} /> : 
                    "Entrar"}
                </Button>
            </Form>
            
            <Foward to={`/sign-in/${type}`} disabled={disabled}>Já tem uma conta? Logue-se!</Foward>
            <Foward to="/" disabled={disabled}>
                {(type==="ong") ? "Ops! Cheguei aqui por engano. Quero adotar." : "Ops! Cheguei aqui por engano. Sou de uma ONG."}
            </Foward>
        </Container>
    );
}