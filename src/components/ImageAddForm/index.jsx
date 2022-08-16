import { useContext, useState } from "react";
import swal from "sweetalert";
import { TokenContext } from "../../contexts/TokenContext";
import { UserContext } from "../../contexts/UserContext";
import api from "../../services/api";
import { Button, Container, Input, Form } from "./style";

export default function ImgageAddForm({disabled, setDisabled, petId, getPets}) {
    const [ petImageData, setPetImageData ] = useState({
        url: "",
        petId: parseInt(petId)

    });
    const { token } = useContext(TokenContext);
    const { userData } = useContext(UserContext);
    

    function addImagePet(e) {
        e.preventDefault();

        api.createPetImage(token, userData.type, petImageData)
        .then(() => {
            getPets();
            setDisabled(true);
            setPetImageData({...petImageData, url: ""});
        })
        .catch(err => {
            swal(err.response.data);
            setDisabled(true);
        })
    }

    return (
        <Container disabled={disabled} >
            <Form disabled={disabled} onSubmit={e => addImagePet(e)}  >                
                <Input type="text" placeholder="Url da imagem" value={petImageData.url} 
                required pattern="http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png"
                title="Digite uma url de imagem"
                onChange={(e) => setPetImageData({...petImageData, url: e.target.value })}/>
                
                <div>
                    <Button type="button" onClick={() => setDisabled(true)}>Cancelar</Button>
                    <Button type="submit" >Enviar</Button>
                </div>
            </Form>
        </Container>
    );
}