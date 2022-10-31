import React, { useRef, useState } from 'react'
import { Button, TextField } from '@mui/material';
import Otsikko from './Otsikko';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fi } from 'date-fns/locale';


interface Props {
    tehtavat : Tehtava[]
    setTehtavat : (arg0 : Tehtava[]) => void
}

const UusiTehtava : React.FC<Props> = ({ tehtavat, setTehtavat }) : React.ReactElement => {

    const [pvmAika, setPvmAika] = useState<Date>(new Date());

    const navigate : NavigateFunction = useNavigate();

    const uusiTehtavaRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();

    const lisaaTehtava = () : void => {

        let apuTehtava : Tehtava = {
          nimi : uusiTehtavaRef.current!.value || "Nimetön tehtävä",
          deadline : pvmAika,
          tehty : false
        }
    
        setTehtavat([...tehtavat, apuTehtava]);

        navigate("/");
    }

    return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi}>

        <Otsikko tyyli="pieni">Lisää uusi tehtävä</Otsikko>

        <TextField 
            label="Tehtävän nimi"
            inputRef={uusiTehtavaRef}
            variant="outlined"
            fullWidth={true}
            sx={{marginBottom : "10px"}}
        />

        <DateTimePicker 
            label="Suoritettava viimeistään"
            value={pvmAika}
            onChange={(uusiPvm : Date | null) => setPvmAika(uusiPvm!)}
            renderInput={(params : any) => <TextField {...params} 
                                            fullWidth={true}
                                            sx={{marginBottom : "10px"}}
                                            />}
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
    </LocalizationProvider>
    )
}

export default UusiTehtava;