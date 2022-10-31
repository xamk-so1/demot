import React from 'react'
import { Button, Typography } from '@mui/material';
import Otsikko from './Otsikko';
import { Link, NavigateFunction, useNavigate, useParams } from 'react-router-dom';

interface Props {
    tehtavat : Tehtava[]
    setTehtavat : (arg0 : Tehtava[]) => void
}

const PoistaTehtava : React.FC<Props> = ({ tehtavat, setTehtavat }) : React.ReactElement => {

    const navigate : NavigateFunction = useNavigate();

    const { indeksi } = useParams<any>();

    const vahvistaPoisto = () : void => {
    
        setTehtavat([...tehtavat.filter((tehtava : Tehtava, idx : number) => idx !== Number(indeksi))]);

        navigate("/");
    }

    return (
    <>

        <Otsikko tyyli="pieni">Poista tehtävä</Otsikko>

        <Typography
            sx={{marginBottom : "20px;"}}
        >Haluatko varmasti poistaa tehtävän "{tehtavat[Number(indeksi)].nimi}"?</Typography>

            <Button
                variant="contained"
                fullWidth={true}
                onClick={vahvistaPoisto}
            >Poista tehtävä</Button>  

            <Button
                fullWidth={true}
                component={Link}
                to="/"
            >Peruuta</Button>    
    </>
    )
}

export default PoistaTehtava;