import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';

const Info : React.FC = () : React.ReactElement => {
  
  const navigate : NavigateFunction = useNavigate()

  const vahvistaPaluu = () : void => {

    if (window.confirm("Haluatko varmasti palata aloitukseen?")) {

      navigate("/");

    }

  }
  
  return (
    <Container>
        
        <Typography 
            variant="h6"
            sx={{marginTop : "10px"}}
        >Infonäkymä</Typography>
        
        <Typography 
            variant="body1"
            sx={{marginTop : "10px"}}
        >Nyt olemme infonäkymässä.</Typography>
    
        <Button
          component={Link}
          to="/"
        >Palaa aloitusnäkymään</Button>

        <Button
          onClick={vahvistaPaluu}
        >Palaa aloitusnäkymään (vahvistuksella)</Button>

    </Container>
  );
}

export default Info;
