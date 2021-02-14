import { Container, Typography, Button, TextField, Checkbox, FormControlLabel, FormControl, FormHelperText, Radio, FormLabel, RadioGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useRef } from 'react';

const useStyles = makeStyles({
  tekstikentta : {
                    marginBottom : "10px",
                    marginTop : "10px"
                 }              
});

function App() {

  const tyylit = useStyles();

  const lomaketiedot = useRef({});
  const [virheilmoitus, setVirheilmoitus] = useState({});
 
  const lomakeKasittelija = (e) => {

    e.preventDefault();

    let virheet = {};

    if (!lomaketiedot.current.nimi) {

      virheet = {...virheet, nimi : "Nimi puuttuu"}
      
    } 

    if (!lomaketiedot.current.email) {

      virheet = {...virheet, email : "Sähköpostiosoite puuttuu"}
      
    } else {

      if (lomaketiedot.current.email.search("@") === -1) {

        virheet = {...virheet, email : "Virheellinen sähköpostiosoite"}
      }

    }

    if (!lomaketiedot.current.ehdot) {

      virheet = {...virheet, ehdot : "Sinun täytyy hyväksyä käyttöehdot"}
      
    } 

    if (!lomaketiedot.current.jakso) {

      virheet = {...virheet, jakso : "Valitse tilausjakso"}
      
    } 

    if (Object.entries(virheet).length > 0) {

      setVirheilmoitus({...virheet});

    } else {

      setVirheilmoitus({});

      window.alert("Olet tilannut uutiskirjeemme, kiitos!");

    }

    

  }

  const syoteKasittelija = (e) => {

    let arvo = (e.target.type === "checkbox") ? e.target.checked : e.target.value;

    lomaketiedot.current[e.target.name] = arvo;

  }

  return (
    <Container maxWidth="sm">
      
      <Typography variant="h5">Demo 6: Lomakkeiden käsittely</Typography>

      <Typography variant="h6">Uutiskirjeen tilaus v2.0</Typography>

      <form onSubmit={lomakeKasittelija}>

      <TextField 
        name="nimi"
        variant="outlined"
        label="Nimi"
        fullWidth={true}
        className={tyylit.tekstikentta}
        error={Boolean(virheilmoitus.nimi)}
        helperText={virheilmoitus.nimi}
        onChange={ syoteKasittelija }
      />

      <TextField 
        name="email"
        variant="outlined"
        label="Sähköposti"
        fullWidth={true}
        className={tyylit.tekstikentta}
        error={Boolean(virheilmoitus.email)}
        helperText={virheilmoitus.email}        
        onChange={ syoteKasittelija }
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
        <FormHelperText error={Boolean(virheilmoitus.jakso)}>{virheilmoitus.jakso}</FormHelperText>      
      </FormControl>

      <FormControl>
        <FormControlLabel 
          control={<Checkbox 
                      name="ehdot" 
                      onChange={ syoteKasittelija }/>}
          label="Hyväksyn käyttöehdot"
        />
        <FormHelperText 
          error={Boolean(virheilmoitus.ehdot)}
        >{virheilmoitus.ehdot}</FormHelperText>
      </FormControl>
      
      <Button 
        type="submit"
        variant="contained" 
        color="primary"
        fullWidth={true}
        size="large"
      >
        Tilaa uutiskirje
      </Button>

      </form>

    </Container>
  );
}

export default App;
