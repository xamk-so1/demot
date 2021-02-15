import { Button, Typography } from '@material-ui/core';
import Otsikko from './Otsikko';
import { Link, useHistory, useParams } from 'react-router-dom';

function PoistaTehtava(props) {

    const history = useHistory();
    const { indeksi } = useParams();

    const kasitteleLomake = (e) => {

        e.preventDefault();

        let tehtavatApu = props.tehtavat.filter((tehtava, idx) => {
            return (idx !== Number(indeksi));
        });
    
        props.setTehtavat([...tehtavatApu]);
    
        history.push("/");

    }

    return (
        <form onSubmit={kasitteleLomake}>

        <Otsikko tyyli="pieni">Vahvista tehtävän poisto</Otsikko>

        <Typography
            style={{marginBottom : 10}}
        >Haluatko varmasti poistaa tehtävän {props.tehtavat[indeksi].nimi}?</Typography>

        <Button 
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{marginBottom : 10}}
        >Poista tehtävä</Button>

        <Button 
            component={Link}
            to="/"
            variant="contained"
            color="default"
            fullWidth
        >Peruuta</Button>

        </form>
    )
}

export default PoistaTehtava;
