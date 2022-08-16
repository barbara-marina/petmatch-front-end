import { useContext, useEffect, useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { Container } from "./style";
import api from "./../../services/api"
import { UserContext } from "../../contexts/UserContext";
import { TokenContext } from "../../contexts/TokenContext";
import swal from 'sweetalert';
import PetAddForm from "../PetAddForm";
import Pet from "../Pet";

export default function OngHome() {
    const [ pets, setPets ] = useState([]);
    const [ formDisabled, setFormDisabled ] = useState(true);
    const { userData } = useContext(UserContext);
    const { token } = useContext(TokenContext);

    useEffect(() => {
        getPets();
    },[]);

    function getPets (){
        api.getPetsUser(token, userData.type)
        .then(res => {
            setPets(res.data);
        })
        .catch(err => {
            swal(err.response.data);
        })
    }

    return (
        <Container>
            {(pets?.length===0)
                ? <h1>Nenhum pet ainda foi cadastrado por você. Clique no ícone + para adicionar.</h1>
                : pets?.map((pet, i) => <Pet key={i} pet={pet} getPets={getPets} isOng={true}/>)
            }

            <BiPlusCircle size={40} color="#138d5c" onClick={() => setFormDisabled(!formDisabled)}/>
            <PetAddForm formDisabled={formDisabled} setFormDisabled={setFormDisabled} getPets={getPets}/>
        </Container>
    );
}