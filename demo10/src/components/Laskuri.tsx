import React, { useRef, useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material';

interface Props {
  valuuttakurssit : Valuutat  
}


const Laskuri : React.FC<Props> = (props : Props) : React.ReactElement => {

  const muunnettavaSummaRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();

  const [kohdevaluutta, setKohdevaluutta] = useState<string>("");
  const [tulosteksti, setTulosteksti] = useState<string>("");

  const laskeMuunnos = () : void => {

    if (Number(muunnettavaSummaRef.current!.value)) {

        let tulos : number = Number(muunnettavaSummaRef.current!.value) * Number(props.valuuttakurssit[kohdevaluutta]);

        setTulosteksti(`${muunnettavaSummaRef.current!.value} EUR = ${String(tulos.toFixed(2))} ${kohdevaluutta}`);

    } else {
        setTulosteksti(`Syötä ainoastaan numeroita, kiitos.`);
    }

  }

  return (
    <Stack spacing={2}>

        <Typography 
            variant="h6"             
        >Valuuttalaskuri</Typography>

        <TextField
          variant="outlined"
          label="Anna muunnettava summa (euro)"
          inputRef={muunnettavaSummaRef}
          fullWidth
        />

        <FormControl
          variant="outlined" 
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
            onChange={(e : SelectChangeEvent) => { setKohdevaluutta(e.target.value) }}
          >
            {Object.keys(props.valuuttakurssit).sort().map((valuutta : string, idx : number) => {
              return <MenuItem key={idx} value={valuutta}>{valuutta}</MenuItem>
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
          >{tulosteksti}</Typography>
        :null}

    </Stack>
  );
}

export default Laskuri;