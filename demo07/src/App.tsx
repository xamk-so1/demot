import { Button, Checkbox, Container, TextField, Typography, FormControlLabel, FormControl, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';
import { SystemStyleObject } from '@mui/system';
import React, { useState, useRef } from 'react';

const tekstikenttaTyyli : SystemStyleObject = {
  marginTop : "10px",
  marginBottom : "5px"
}

interface Lomaketiedot {
  [key : string] : any;
  nimi? : string;
  sahkoposti? : string;
  kayttoehdot? : boolean | string;
}

interface Virheet extends Lomaketiedot {}

const App : React.FC = () : React.ReactElement => {

  const [virheilmoitukset, setVirheilmoitukset] = useState<Virheet>({});

  const lomaketiedot : Lomaketiedot = useRef<Lomaketiedot>({});

  const lomakeKasittelija = (e : React.FormEvent) : void => {

    e.preventDefault();

    console.log(lomaketiedot.current);

    let virheet : Virheet = {}; 

    if (!lomaketiedot.current.nimi) {
      virheet = {...virheet, nimi : "Nimi puuttuu."};
    }

    if (!lomaketiedot.current.sahkoposti) {
      virheet = {...virheet, sahkoposti : "Sähköposti puuttuu."};
    } else {
      if (lomaketiedot.current.sahkoposti.search("@") === -1) {
        virheet = {...virheet, sahkoposti : "Virheellinen sähköpostiosoite."};
      }
    }

    if (!lomaketiedot.current.kayttoehdot) {
      virheet = {...virheet, kayttoehdot : "Hyväksy käyttöehdot."};
    }

    if (!lomaketiedot.current.jakso) {
      virheet = {...virheet, jakso : "Valitse tilausjakso."};
    }

    if (Object.entries(virheet).length > 0) {
      setVirheilmoitukset({...virheet});
    } else {
      setVirheilmoitukset({});
      window.alert("Olet tilannut uutiskirjeemme, kiitos!");
    }

    

  }

  const syoteKasittelija = (e : React.ChangeEvent<HTMLInputElement>) : void => {

    lomaketiedot.current[e.target.name] = (e.target.type === "checkbox") ? Boolean(e.target.checked) : e.target.value;

  }


  return (
    <Container maxWidth="sm">

      <Typography variant="h5">Demo 7: Lomakkeiden käsittely</Typography>

      <Typography sx={{
        marginTop : "10px",
        marginBottom : "10px"
      }}>Uutiskirjeen tilaus v2.0</Typography>

      <form onSubmit={lomakeKasittelija}>

      <TextField
        sx={tekstikenttaTyyli}
        name="nimi"
        label="Nimi"
        placeholder="Etunimi Sukunimi"
        fullWidth={true}
        onChange={syoteKasittelija}
        error={Boolean(virheilmoitukset.nimi)}
        helperText={virheilmoitukset.nimi}
      />

      <TextField
        sx={{
          ...tekstikenttaTyyli,
          marginBottom : "15px"
        }}
        name="sahkoposti"
        label="Sähköpostiosoite"
        fullWidth={true}
        onChange={syoteKasittelija}
        error={Boolean(virheilmoitukset.sahkoposti)}
        helperText={virheilmoitukset.sahkoposti}
      />

      <FormControl fullWidth style={{marginTop : 10}}>
       <FormLabel>Haluan uutiskirjeen </FormLabel>
        <RadioGroup>
          <FormControlLabel 
            value="paiva" 
            label="Päivittäin"
            control={<Radio 
                        name="jakso"  
                        size="small"
                        onChange={ syoteKasittelija } 
                    />} 
          />
          <FormControlLabel 
            value="viikko" 
            label="Viikoittain"
            control={<Radio 
                        name="jakso"  
                        size="small"
                        onChange={ syoteKasittelija } 
                    />} 
          />
          <FormControlLabel 
            value="kuukausi" 
            label="Kuukausittain"
            control={<Radio 
                        name="jakso" 
                        size="small"
                        onChange={ syoteKasittelija } 
                    />} 
          />
        </RadioGroup>
        <FormHelperText error={Boolean(virheilmoitukset.jakso)}>{virheilmoitukset.jakso}</FormHelperText>      
      </FormControl>

      <FormControl>      
      <FormControlLabel
        control={<Checkbox name="kayttoehdot" onChange={syoteKasittelija}/>}
        label="Hyväksyn käyttöehdot"
      />
      <FormHelperText error={Boolean(virheilmoitukset.kayttoehdot)}>
        {virheilmoitukset.kayttoehdot}
      </FormHelperText>
      </FormControl>

      

      <Button
        type="submit"
        variant="contained"
        fullWidth={true}
        size="large"
      >Tilaa uutiskirje</Button>

      </form>

    </Container>    
  );

}
export default App;
