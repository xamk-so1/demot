import { Button, Checkbox, Container, TextField, Typography, FormControlLabel } from '@mui/material';
import { SystemStyleObject } from '@mui/system';
import { useState, useEffect } from 'react';

const tekstikenttaTyyli : SystemStyleObject = {
  marginTop : "10px",
  marginBottom : "5px"
}

const App : React.FC = () : React.ReactElement => {

  const [tiedotOk, setTiedotOk] = useState<boolean>(false);
  const [nimi, setNimi] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [ehdot, setEhdot] = useState<boolean>(false);

  useEffect( () : void => {

    if (Boolean(nimi) && Boolean(email) && ehdot) {
      setTiedotOk(true);
    } else {
      setTiedotOk(false);
    }

  }, [nimi, email, ehdot]);

  return (
    <Container maxWidth="sm">

      <Typography variant="h5">Demo 4: MUI-komponentit</Typography>

      <Typography sx={{
        marginTop : "10px",
        marginBottom : "10px"
      }}>Uutiskirjeen tilaus</Typography>

      <TextField
        sx={tekstikenttaTyyli}
        label="Nimi"
        placeholder="Etunimi Sukunimi"
        fullWidth={true}
        onChange={(e : any) => { setNimi(e.target.value) }}
      />

      <TextField
        sx={{
          ...tekstikenttaTyyli,
          marginBottom : "15px"
        }}
        label="Sähköpostiosoite"
        fullWidth={true}
        onChange={(e : any) => { setEmail(e.target.value) }}
      />

      <FormControlLabel
        control={<Checkbox onChange={(e : any) => { setEhdot(e.target.checked) }}/>}
        label="Hyväksyn käyttöehdot"
      />
      

      <Button
        variant="contained"
        fullWidth={true}
        size="large"
        disabled={!tiedotOk}
        onClick={ (e: any) => { alert("Olet tilannut uutiskirjeemme, kiitos!") } }
      >Tilaa uutiskirje</Button>

    </Container>    
  );

}
export default App;
