import { Container } from "./style";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useState } from "react";
import PetInfos from "../PetInfos";

export default function Pet({pet, getPets, isOng}) {
    const [disabled, setDisabled] = useState(true);

    return (
        <>
            <Container isAdopted={pet.isAdopted}>
                <p><em>Nome:</em> {pet.name}</p>
                <p><em>Espécie:</em> {pet.species}</p>
                <p><em>História:</em> {pet.story}</p>

                <IoInformationCircleOutline size={27} color="#138d5c" onClick={() => setDisabled(false)}/>
                
            </Container>
            <PetInfos pet={pet} disabled={disabled} setDisabled={setDisabled} getPets={getPets} isOng={isOng}/>
        </>
    );
}