import { Container, Logo, Button } from './style';
import logo from "../../assets/logo_PetMatch.png";

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from 'react-router-dom';

import swal from 'sweetalert';

export default function TypeSelect() {
    const navigate = useNavigate();
    const [type, setType] = React.useState("");

    function sendType() {

        const typeData = {
            ong: {
                text: "Sou uma ONG que resgata animais em situações de risco. E quero poder cadastrar os animais resgatados para ajudá-los a encontrar um lar responsável.",
                no: "Cancelar.",
                yes: "Sim."
            },
            adopter: {
                text: "Sou um pessoa responsável que tenho interresse em adotar um pet e serei responsável caso eu venha a adotá-lo.",
                no: "Não posso com esse compromisso.",
                yes: "Aceito essa responsabilidade."
            }
        }

        if (type==="") {
            return swal({
                text: "Você precisa selecionar uma das opções.",
                icon: "warning",
            });
        }
        
        swal({
            text: typeData[type].text,
            buttons: {
                no: {
                    value: false,
                    text: typeData[type].no
                },
                yes: {
                    value: true,
                    text: typeData[type].yes
                }
            },
        })
        .then((value) => {
            (value===true) ?
            navigate(`/sign-in/${type}`) :
            navigate(`/`);
        });
    }

    return (
        <Container>
            <Logo src={logo}/>
            
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Quero...</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="type"
                >
                    <FormControlLabel value="adopter" className='teste' control={<Radio />} 
                    label="adotar um pet."
                    onChange={(e) => setType(e.target.value)} />
                    <FormControlLabel value="ong" control={<Radio />} 
                    label="quero achar lar(es) para pet(s)." 
                    onChange={(e) => setType(e.target.value)} />
                </RadioGroup>
            </FormControl>

            <Button type='button' onClick={sendType}>Enviar</Button>

        </Container>
    );
}