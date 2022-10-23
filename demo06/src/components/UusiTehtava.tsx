import React, { useRef } from 'react'
import { Button, TextField } from '@mui/material';
import Otsikko from './Otsikko';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';

interface Tehtava {
    nimi : string,
    tehty : boolean
}

interface Props {
    tehtavat : Tehtava[]
    setTehtavat : (arg0 : Tehtava[]) => void
}

const UusiTehtava : React.FC<Props> = ({ tehtavat, setTehtavat }) : React.ReactElement => {

    const navigate : NavigateFunction = useNavigate();

    const uusiTehtavaRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();

    const lisaaTehtava = () : void => {

        let apuTehtava : Tehtava = {
          nimi : uusiTehtavaRef.current!.value || "Nimetön tehtävä",
          tehty : false
        }
    
        setTehtavat([...tehtavat, apuTehtava]);

        navigate("/");
    }

    return (
    <>

        <Otsikko tyyli="pieni">Lisää uusi tehtävä</Otsikko>

        <TextField 
            inputRef={uusiTehtavaRef}
            variant="outlined"
            fullWidth={true}
            placeholder="Kirjoita tehtävä ja paina Enter..."
            sx={{marginBottom : "10px"}}
        />

            <Button
                variant="contained"
                fullWidth={true}
                onClick={lisaaTehtava}
            >Tallenna</Button>  

            <Button
                fullWidth={true}
                component={Link}
                to="/"
            >Peruuta</Button>    
    </>
    )
}

export default UusiTehtava;