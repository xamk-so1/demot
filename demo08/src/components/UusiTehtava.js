import { useRef, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import Otsikko from './Otsikko';
import { Link, useHistory } from 'react-router-dom';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { fi } from 'date-fns/locale';

function UusiTehtava(props) {

    const [pvmaika, setPvmaika] = useState(new Date());
    const tekstikentta = useRef();
    const history = useHistory();

    const kasitteleLomake = (e) => {

        e.preventDefault();

        let uusiTehtavaApu = {
                                nimi : tekstikentta.current.value,
                                deadline : pvmaika,
                                suoritettu : false
                             }
    
        props.setTehtavat([...props.tehtavat, uusiTehtavaApu]);
    
        history.push("/");

    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fi}>
            <form onSubmit={kasitteleLomake}>

            <Otsikko tyyli="pieni">Lisää uusi tehtävä</Otsikko>

            <TextField 
                label="Tehtävän nimi"
                variant="outlined"
                fullWidth={true}
                inputRef={tekstikentta}
                style={{marginBottom : 10}}
            />

            <DateTimePicker
                label="Suoritettava viimeistään"
                inputVariant="outlined"
                fullWidth={true}
                cancelLabel="Peruuta"
                ampm={false}
                value={pvmaika}
                format="d.M.y HH:mm"
                onChange={setPvmaika}
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
        </MuiPickersUtilsProvider>
    )
}

export default UusiTehtava;
