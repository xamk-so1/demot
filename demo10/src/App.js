import { Backdrop, CircularProgress, Container, Typography } from '@material-ui/core';
import Laskuri from './components/Laskuri';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState({
                                      valuuttakurssit : [],
                                      virhe : null,
                                      tiedotHaettu : false
                                   });

  const haeTiedot = async () => {

    try {

      const yhteys = await fetch("https://xamkbit.azurewebsites.net/valuutat");
      const tiedot = await yhteys.json();
  
      setData({
                ...data, 
                valuuttakurssit : tiedot.rates,
                tiedotHaettu : true
              });


    } catch (error) {

      setData({
        ...data, 
        valuuttakurssit : [],
        tiedotHaettu : true,
        virhe : `VIRHE: yhteyttä palvelimelle ei voitu muodostaa. (${error})`
      });

    }


  }

  useEffect(() => {

    haeTiedot();

  }, [])

  return (
    <Container>

      <Typography variant="h5">Demo 10: Ulkoisen datan käyttö</Typography>

      {(data.virhe)
        ? <Typography color="error">
            {data.virhe}
          </Typography>
        : (data.tiedotHaettu) 
          ? <Laskuri valuutat={data.valuuttakurssit} />
          : <Backdrop open={true}>
              <CircularProgress color="inherit" />
            </Backdrop>
      }
      
      

    </Container>
  );
}

export default App;
