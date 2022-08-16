import { Container, Image } from "./style";
import { MdOutlineCancel } from "react-icons/md";
import { BiPlusCircle } from "react-icons/bi";
import { useState } from "react";
import ImgageAddForm from "../ImageAddForm";

export default function PetInfos({disabled, setDisabled, pet, getPets, isOng}) {
    const [ addImageDisabled, setAddImageDisabled ] = useState(true); 
    
    return (
        <>
            <Container disabled={disabled} >
                <MdOutlineCancel id="close" size={27} color="#138d5c" onClick={() => setDisabled(true)}/>

                <p><em>Nome:</em> {pet.name}</p>
                <p><em>Espécie:</em> {pet.species}</p>
                <p><em>Raça:</em> {pet.breed}</p>
                <p><em>Porte:</em> {pet.size}</p>
                <p><em>Peso:</em> {pet.weigth}</p>
                <p><em>Idade:</em> {pet.age}</p>
                <p><em>História:</em> {pet.story}</p>
                <p><em>Adotado?</em> {(pet.isAdopted===true) ? "Siiim!" : "Ainda não :("}</p>

                <div>
                    <em>Fotos:</em> 
                    <section>
                        {pet.petImage?.length === 0 
                    ? <p>Esse pet ainda não possue fotos.</p>
                    : pet.petImage?.map((image, i) => <Image key={i} src={image.url} alt="foto"/>)}
                    </section>
                </div>
                
                {isOng && <BiPlusCircle  id="add" size={27} color="#138d5c" onClick={() => setAddImageDisabled(false)}/>}
            </Container>
            <ImgageAddForm disabled={addImageDisabled} setDisabled={setAddImageDisabled} petId={pet.id} getPets={getPets} />
        </>
    );
}