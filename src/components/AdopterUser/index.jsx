import { useContext, useEffect, useState } from "react";
import api from "../../services/api"
import { UserContext } from "../../contexts/UserContext";
import { TokenContext } from "../../contexts/TokenContext";
import swal from 'sweetalert';
import { Container } from "./style";
import Pet from "../Pet";

export default function AdopterUser() {
    const { userData } = useContext(UserContext);
    const { token } = useContext(TokenContext);
    const [ adopterData, setAdopterData ] = useState({});

    useEffect(() => {
        getData();
    },[]);

    function getData (){
        api.getAdopterData(token, userData.type)
        .then(res => {
            setAdopterData(res.data);
        })
        .catch(err => {
            swal(err.response.data);
        });
    }

    return (
        <Container>
            <p><em>Nome: </em> {adopterData.username}</p>
            <p><em>Email: </em> {adopterData.email}</p>
            <h2><em>Adoções </em></h2>
            {(adopterData.adoption?.length === 0)
            ? <h2>Você não tem nenhuma adoção.</h2>
            : adopterData.adoption?.map((adoption, i) => 
                <Pet pet={adoption.pet} key={i} getPets={getData} isOng={false}/>
            )}
        </Container>
    );
}