import { Button, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles({
    otsikko : {
        marginTop: 10,
        marginBottom  : 20
    },
    syote : {
        marginBottom  : 15
    },
    tulos : {
        margin  : 15
    }
});

function Laskuri(props) {

  const [muunnettavaSumma, setMuunnettavaSumma] = useState();
  const [kohdevaluutta, setKohdevaluutta] = useState("");
  const [tulosteksti, setTulosteksti] = useState();

  const tyylit = useStyles();

  const laskeMuunnos = () => {

    if (isNaN(muunnettavaSumma)) {

      setTulosteksti(`Syötä ainoastaan numeroita, kiitos.`);

    } else {

      let tulos = muunnettavaSumma * props.valuutat[kohdevaluutta];

      setTulosteksti(`${muunnettavaSumma} EUR = ${tulos.toFixed(2)} ${kohdevaluutta}`);

    }

  }

  return (
    <>

        <Typography 
            variant="h6" 
            className={tyylit.otsikko}
        >Valuuttalaskuri</Typography>

        <TextField
          variant="outlined"
          label="Anna muunnettava summa (euro)"
          onChange={(e) => { setMuunnettavaSumma(e.target.value) }}
          className={tyylit.syote}
          fullWidth
        />

        <FormControl
          variant="outlined" 
          className={tyylit.syote}
          fullWidth
        >
          <InputLabel
            style={{backgroundColor: "#fff",
                    paddingLeft: 5,
                    paddingRight: 5}}
          >Kohdevaluutta</InputLabel>

          <Select
            value={kohdevaluutta}
            displayEmpty
            onChange={(e) => { setKohdevaluutta(e.target.value) }}
          >
            {Object.keys(props.valuutat).sort().map((valuutta) => {
              return <MenuItem key={valuutta} value={valuutta}>{valuutta} ({props.valuutat[valuutta]})</MenuItem>          
            })}          
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={laskeMuunnos}
        >Laske muunnos</Button>

        {(tulosteksti)
        ? <Typography
            className={tyylit.tulos}
          >{tulosteksti}</Typography>
        :null}


    </>
  );
}

export default Laskuri;
