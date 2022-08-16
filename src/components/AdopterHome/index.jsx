import { Fragment, useContext, useEffect, useState } from "react";
import { Button, Container } from "./style";
import api from "./../../services/api"
import { UserContext } from "../../contexts/UserContext";
import { TokenContext } from "../../contexts/TokenContext";
import swal from 'sweetalert';
import PetCard from "../PetCard";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { Navigate, useNavigate } from "react-router-dom";

export default function AdopterHome() {
    const [ pets, setPets ] = useState([]);
    const { userData } = useContext(UserContext);
    const { token } = useContext(TokenContext);
    const [ counter, setCounter ] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        getPets();
    },[]);

    function getPets (){
        api.getPets(token, userData.type)
        .then(res => {
            setPets(res.data);
        })
        .catch(err => {
            swal(err.response.data);
        });
    }

    function adopting(petId) {
        api.adoptingPet(token, userData.type, petId)
        .then(() => {
            swal("Pet adotado do sucesso");
            getPets();
            navigate("/chats");
        })
        .catch(err => {
            swal(err.response.data);
        });
    }

    return (
        <Container>
            {(pets?.length===0)
                ? <h1>Nenhum pet ainda foi cadastrado.</h1>
                : pets?.map((pet, i) => {
                    if (counter === i) {
                        return (
                            <Fragment key={i}>
                                {(counter !== 0) && <FiArrowLeftCircle id="left" size={27} color="#138d5c" onClick={() => setCounter(counter - 1)}/>}
                                <PetCard pet={pet} getPets={getPets} />
                                {(counter !== (pets.length - 1)) && <FiArrowRightCircle id="right" size={27} color="#138d5c" onClick={() => setCounter(counter + 1)}/>}
                                <Button onClick={() => adopting(pet.id)}> Adotar </Button>
                            </Fragment>
                        );
                    } else return;
                })
            }
        </Container>
    );
}