import { useContext, useState } from "react";
import swal from "sweetalert";
import { TokenContext } from "../../contexts/TokenContext";
import { UserContext } from "../../contexts/UserContext";
import api from "../../services/api";
import { Button, Container, Input, Form, Text } from "./style";

export default function PetAddForm({formDisabled, setFormDisabled, getPets}) {
    const [ petData, setPetData ] = useState({
        name: "",
        species: "",
        breed: "",
        size: "",
        weigth: "",
        age: "",
        story: ""
    });
    const [ disabled, setDisabled ] = useState(false);
    const { token } = useContext(TokenContext);
    const { userData } = useContext(UserContext);
    

    function addPet(e) {
        e.preventDefault();

        setDisabled(true);

        api.createPet(token, userData.type, petData)
        .then(res => {
            setDisabled(false);
            setFormDisabled(true);
            setPetData({...petData,
                        name: "",
                        species: "",
                        breed: "",
                        size: "",
                        weigth: "",
                        age: "",
                        story: ""});
            getPets();
        })
        .catch(err => {
            swal(err.response.data);
            setDisabled(false);
            setFormDisabled(true);
        })

    }

    return (
        <Container formDisabled={formDisabled} >
            <Form formDisabled={formDisabled} onSubmit={e => addPet(e)}  >                
                <Input type="text" placeholder="Nome" value={petData.name} 
                required disabled={disabled}
                onChange={(e) => setPetData({...petData, name: e.target.value })}/>
                <Input type="text" placeholder="Espécie" value={petData.species} 
                required disabled={disabled}
                onChange={(e) => setPetData({...petData, species: e.target.value })}/>
                <Input type="text" placeholder="Raça"  value={petData.breed}
                required disabled={disabled}
                onChange={(e) => setPetData({...petData, breed: e.target.value })}/>
                <Input type="text" placeholder="Porte" value={petData.size} 
                required disabled={disabled}
                onChange={(e) => setPetData({...petData, size: e.target.value })}/>
                <Input type="text" placeholder="Peso" value={petData.weigth} 
                required disabled={disabled}
                onChange={(e) => setPetData({...petData, weigth: e.target.value })}/>
                <Input type="text" placeholder="Idade" value={petData.age} 
                required disabled={disabled}
                onChange={(e) => setPetData({...petData, age: parseInt(e.target.value) })}/>
                <Text type="textarea" placeholder="História" value={petData.story} 
                required disabled={disabled}
                onChange={(e) => setPetData({...petData, story: e.target.value })}/>
                <div>
                    <Button type="button" disabled={disabled} onClick={() => setFormDisabled(true)}>Cancelar</Button>
                    <Button type="submit" disabled={disabled}>Enviar</Button>
                </div>
            </Form>
        </Container>
    );
}