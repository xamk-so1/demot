import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import UusiTehtava from './components/UusiTehtava';
import Tehtavalista from './components/Tehtavalista';
import Otsikko from './components/Otsikko';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PoistaTehtava from './components/PoistaTehtava';

function App() {

  const [tehtavat, setTehtavat] = useState([]);

  const tallennaTehtavalista = () => {

    localStorage.setItem("tehtavalista", JSON.stringify(tehtavat));

  }

  const avaaTehtavalista = () => {

    if (localStorage.getItem("tehtavalista")) {

      setTehtavat(JSON.parse(localStorage.getItem("tehtavalista")));

    } else {

      setTehtavat([]);
    }

  }

  useEffect(() => {

    avaaTehtavalista();

  }, []);

  useEffect(() => {

    tallennaTehtavalista();

  }, [tehtavat]); 
                              

  return (
    <Router>
      <Container>

        <Otsikko>Demo 9: Tietojen tallentaminen</Otsikko>

        <Route path="/" exact>
          <Tehtavalista tehtavat={tehtavat} setTehtavat={setTehtavat} tallennaTehtavalista={tallennaTehtavalista}/>
        </Route>

        <Route path="/uusi">
          <UusiTehtava tehtavat={tehtavat} setTehtavat={setTehtavat}/>
        </Route>

        <Route path="/poista/:id">
          <PoistaTehtava tehtavat={tehtavat} setTehtavat={setTehtavat}/>
        </Route>

      </Container>
    </Router>
  );
}

export default App;
