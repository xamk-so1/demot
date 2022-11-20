import React, { useEffect, useRef, useState } from 'react';
import { Backdrop, CircularProgress, Container, Typography } from '@mui/material';
import Laskuri from './components/Laskuri';

const App : React.FC = () : React.ReactElement => {

  const tiedotHaettu : React.MutableRefObject<boolean> = useRef(false);

  const [data, setData] = useState<Data>({
    valuuttakurssit : {},
    virhe : "",
    valmis : false
  });

  const haeTiedot = async () : Promise<any> => {

    if (!tiedotHaettu.current) {

      try {

        const yhteys = await fetch("https://xamkbit.azurewebsites.net/valuutat");
        const tiedot = await yhteys.json();

        setData({
          ...data, 
          valuuttakurssit : tiedot.rates,
          valmis : true
        });

      } catch (error) {

        setData({
          ...data, 
          valuuttakurssit : {},
          valmis : true,
          virhe : `VIRHE: yhteyttä palvelimelle ei voitu muodostaa. (${error})`
        });

      }

    }

    return () => {
      tiedotHaettu.current = true;
    }

  }

  useEffect(() => {

    haeTiedot();

  }, [])

  return (

    <Container>

      <Typography variant="h5">Demo 10: Ulkoisen datan käyttö</Typography>

      {(data.virhe)
        ? <Typography color="error">{data.virhe}</Typography>
        : (data.valmis) 
          ? <Laskuri valuutat={data.valuuttakurssit} />
          : <Backdrop open={true}>
              <CircularProgress color="inherit" />
            </Backdrop>
      }

    </Container>

    );
}

export default App;
