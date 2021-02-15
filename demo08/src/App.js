import { useState } from 'react';
import { Container } from '@material-ui/core';
import UusiTehtava from './components/UusiTehtava';
import Tehtavalista from './components/Tehtavalista';
import Otsikko from './components/Otsikko';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PoistaTehtava from './components/PoistaTehtava';

function App() {

  const [tehtavat, setTehtavat] = useState([
                                { 
                                  nimi : "Siivoa",
                                  deadline : new Date(),
                                  suoritettu : false
                                },  
                                { 
                                  nimi : "Käy kaupassa",
                                  deadline : new Date(),
                                  suoritettu : true
                                },
                                { 
                                  nimi : "Ulkoiluta koiraa",
                                  deadline : new Date(),
                                  suoritettu : false
                                }
                              ]);

  return (
    <Router>
      <Container>

        <Otsikko>Demo 8: Päivämäärien käsittely</Otsikko>

        <Route path="/" exact>
          <Tehtavalista tehtavat={tehtavat} setTehtavat={setTehtavat}/>
        </Route>

        <Route path="/uusi">
          <UusiTehtava tehtavat={tehtavat} setTehtavat={setTehtavat}/>
        </Route>

        <Route path="/poista/:indeksi">
          <PoistaTehtava tehtavat={tehtavat} setTehtavat={setTehtavat}/>
        </Route>

      </Container>
    </Router>
  );
}

export default App;
