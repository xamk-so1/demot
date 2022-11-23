import React, { useEffect, useRef, useState } from 'react';
import { Backdrop, CircularProgress, Container, Typography } from '@mui/material';
import Laskuri from './components/Laskuri';

const App : React.FC = () : React.ReactElement => {

  const pyyntoLahetetty : React.MutableRefObject<boolean> = useRef(false);

  const [data, setData] = useState<Data>({
                                    valuuttakurssit : {},
                                    virhe : "",
                                    valmis : false
                                  });

  const haeData = async () : Promise<void> => {

    try {

      const yhteys : Response = await fetch("https://xamkbit.azurewebsites.net/valuutat");
      const data : any = await yhteys.json();
  
      setData({...data, valuuttakurssit : data.rates, valmis : true});

    } catch (e: any) {

      setData({...data, virhe : "Palvelimelle ei saada yhteyttä.", valmis : true});

    }

  }

  useEffect(() => {
    
    if (!pyyntoLahetetty.current) {
      haeData();
    }

    return () => {
      pyyntoLahetetty.current = true;
    }

  }, []);

  return (

    <Container>

      <Typography variant="h5">Demo 10: Ulkoisen datan käyttö</Typography>

      {Boolean(data.virhe) 
      ? <Typography sx={{marginTop : 2, color : "#F00"}}>{data.virhe}</Typography>
      : (!data.valmis) 
      ? <Backdrop open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      : <Laskuri valuuttakurssit={data.valuuttakurssit}/>
      }
      

    </Container>

    );
}

export default App;
