import { useRef } from 'react';
import { Button, TextField } from '@material-ui/core';
import Otsikko from './Otsikko';
import { Link, useHistory } from 'react-router-dom';

function UusiTehtava(props) {

    const tekstikentta = useRef();
    const history = useHistory();

    const kasitteleLomake = (e) => {

        e.preventDefault();

        let uusiTehtavaApu = {
                                nimi : tekstikentta.current.value,
                                suoritettu : false
                             }
    
        props.setTehtavat([...props.tehtavat, uusiTehtavaApu]);
    
        history.push("/");

    }

    return (
        <form onSubmit={kasitteleLomake}>

        <Otsikko tyyli="pieni">Lisää uusi tehtävä</Otsikko>

        <TextField 
            variant="outlined"
            fullWidth={true}
            inputRef={tekstikentta}
            placeholder="Kirjoita tehtävä ja paina Enter..."
            style={{marginBottom : 10}}
        />

        <Button 
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{marginBottom : 10}}
        >Lisää uusi tehtävä</Button>

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

export default UusiTehtava;
