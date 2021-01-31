import { Container, Typography, Button, TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';

const useStyles = makeStyles({
  tekstikentta : {
                    marginBottom : "10px",
                    marginTop : "10px"
                 }
  
});

function App() {

  const tyylit = useStyles();

  const [tiedotOk, setTiedotOk] = useState(false);
  const [nimi,setNimi] = useState("");
  const [email,setEmail] = useState("");
  const [ehdot,setEhdot] = useState(false);
  
  useEffect( () => {

    if (nimi && email && ehdot) {
      setTiedotOk(true);
    } else {
      setTiedotOk(false);
    }

  }, [nimi, email, ehdot] );

  return (
    <Container maxWidth="sm">
      
      <Typography variant="h5">Demo 4: Material-UI-komponentit</Typography>

      <Typography style={{
                            fontSize : "16pt",
                            marginTop : "10px"
                         }}
      >Uutiskirjeen tilaus</Typography>

      <TextField 
        variant="outlined"
        label="Nimi"
        placeholder="Etunimi Sukunimi"
        fullWidth={true}
        className={tyylit.tekstikentta}
        onChange={ (e) => { setNimi(e.target.value) } }
      />

      <TextField 
        variant="outlined"
        label="Sähköposti"
        placeholder=""
        fullWidth={true}
        className={tyylit.tekstikentta}
        onChange={ (e) => { setEmail(e.target.value) } }
      />

      <FormControlLabel 
        control={<Checkbox onChange={ (e) => { setEhdot(e.target.checked) } }/>}
        label="Hyväksyn käyttöehdot"
      />
      
    <Button 
      variant="contained" 
      color="primary"
      fullWidth={true}
      size="large"
      disabled={!tiedotOk}
      onClick={ () => { alert("Olet tilannut uutiskirjeemme. Kiitos!") }}
    >
      Tilaa uutiskirje
    </Button>

    </Container>
  );
}

export default App;
