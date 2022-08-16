
import { Fragment, useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import {  IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import PetInfos from "../PetInfos";
import { Container, Image } from "./style";

export default function PetCard({pet, getPets}) {
    
    const [ disabled, setDisabled ] = useState(true);
    const [ counter, setCounter ] = useState(0);

    return (
        <>
            <Container>
                {(pet.petImage.length === 0) 
                    ? <>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Paw-print.svg/1200px-Paw-print.svg.png" alt="foto" />
                        <p>Esse pet ainda não possui fotos.</p>
                    </>
                    : pet.petImage?.map((image, i) => {
                        if (counter === i) {
                            return (
                                <Fragment key={i}>
                                    {(counter !== 0) && <IoIosArrowDropleftCircle id="left" size={27} color="#138d5c" onClick={() => setCounter(counter - 1)}/>}
                                    <Image src={image.url} alt="foto"/>
                                    {(counter !== (pet.petImage.length - 1)) && <IoIosArrowDroprightCircle id="right" size={27} color="#138d5c" onClick={() => setCounter(counter + 1)}/>}
                                </Fragment>
                            );
                        } else return;
                    })
                }

                <div>
                    <p><em>Nome: </em>{pet.name}</p>
                    <p><em>Espécie: </em>{pet.species}</p>
                    <p><em>História: </em>{pet.story}</p>
                </div>

                <IoInformationCircleOutline size={27} color="#138d5c" onClick={() => setDisabled(false)}/>
            </Container>
            <PetInfos pet={pet} disabled={disabled} setDisabled={setDisabled} getPets={getPets} isOng={false}/>
        </>
    );
}